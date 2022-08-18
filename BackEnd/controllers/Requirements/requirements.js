const handleRequirements = (req, res,db) => {
    db.select('*').from('requirements').then(requirements => {
        res.json(requirements);
    })

}
module.exports = {
    handleRequirements:handleRequirements
}