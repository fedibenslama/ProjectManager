const handleDeleteClient =(req, res,db) => {
    const { id } = req.body;
    db('clients')
        .where('id', '=', id)
        .del(
            '*'
        )
        .then(response => {
            res.json("Deleted")
        })
        .catch(err => res.status(400).json('Unable To Delete'))

}

module.exports = {
    handleDeleteClient: handleDeleteClient
}