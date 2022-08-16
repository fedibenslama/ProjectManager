const handleRegister = (req, res, db, bcrypt) => {
    const { email, name, password, role } = req.body;

    if (!email || !password || !name || !role) {
       return res.status(400).json("Incorrect Form Submission")
    }

    const hash = bcrypt.hashSync(password);
    db.transaction(trx => {               //we create a transaction when we want to do more thant 2 things at once
        trx.insert({
            hash: hash,
            email: email,
            role: role
        })
            .into('login')
            .returning('email')
            .then(loginemail => {
                return trx('users')
                    .returning('*')
                    .insert({
                        email: loginemail[0].email,
                        name: name,
                        role: role
                    }).then(response => {
                        res.json(response)
                    })
            })  //we can do the same syntax also the same syntax as below
            .then(trx.commit)
            .catch(trx.rollback)
    })

        .catch(err => res.status(400).json('Unable To Register :('))

}

module.exports = {
    handleRegister: handleRegister
}