const handleViewMember = (req, res,db) => {
    
    const { id } = req.params;
    
    db.select('*').from('members').where({ id: id })
        .then(response => {
            if (response.length) {            //To Check if Member exists , we can change 'response' to 'Member' for clarity
                res.json(response[0]);
            } else { res.status(400).json('Member Not Found') }

        })
        .catch(err => res.status(400).json('Member Not Found'))
}

module.exports = {
    handleViewMember : handleViewMember
}