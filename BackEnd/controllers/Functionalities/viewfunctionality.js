const handleViewFunctionality = (req, res,db) => {
    
    const { id } = req.params;
    
    db.select('*').from('functionalities').where({ id: id })
        .then(response => {
            if (response.length) {            //To Check if Functionality exists , we can change 'response' to 'Functionality' for clarity
                res.json(response[0]);
            } else { res.status(400).json('Functionality Not Found') }

        })
        .catch(err => res.status(400).json('Functionality Not Found'))
}

module.exports = {
    handleViewFunctionality : handleViewFunctionality
}