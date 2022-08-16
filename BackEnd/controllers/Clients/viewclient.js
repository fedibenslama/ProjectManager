const handleViewClient = (req, res,db) => {
    
    const { id } = req.params;
    
    db.select('*').from('clients').where({ id: id })
        .then(client => {
            if (client.length) {           
                res.json(client[0]);
            } else { res.status(400).json('Client Not Found') }

        })
        .catch(err => res.status(400).json('Client Not Found'))
}

module.exports = {
    handleViewClient : handleViewClient
}