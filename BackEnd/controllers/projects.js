const handleProjects = (req, res,db) => {
    db.select('*').from('projects').then(projects => {
        res.json(projects);
    })

}
module.exports = {
    handleProjects:handleProjects
}