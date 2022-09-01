const handleMembers = (req, res,db) => {
    db.select('*').from('members').then(Members => {
        res.json(Members);
    })

}
module.exports = {
    handleMembers:handleMembers
}