const handleDeleteMember =(req, res,db) => {
    const { id } = req.body;
    db('members')
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
    handleDeleteMember: handleDeleteMember
}