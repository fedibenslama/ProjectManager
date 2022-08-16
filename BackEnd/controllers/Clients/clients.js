const handleClients = (req, res, db) => {
    db.select('*').from('clients').then(clients => {
        res.json(clients);
    })
}

module.exports = {
    handleClients: handleClients
}