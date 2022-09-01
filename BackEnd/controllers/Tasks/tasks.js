const handleTasks = (req, res,db) => {
    db.select('*').from('tasks').then(Tasks => {
        res.json(Tasks);
    })

}
module.exports = {
    handleTasks:handleTasks
}