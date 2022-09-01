const handleFunctionalities = (req, res,db) => {
    db.select('*').from('functionalities').then(functionalities => {
        res.json(functionalities);
    })

}
module.exports = {
    handleFunctionalities:handleFunctionalities
}