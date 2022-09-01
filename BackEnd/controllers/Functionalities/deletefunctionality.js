const handleDeleteFunctionality =(req, res,db) => {
    const { id } = req.body;
    db('functionalities')
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
    handleDeleteFunctionality: handleDeleteFunctionality
}