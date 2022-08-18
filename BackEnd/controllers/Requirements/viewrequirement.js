const handleViewRequirement = (req, res,db) => {
    
    const { id } = req.params;
    
    db.select('*').from('requirements').where({ id: id })
        .then(response => {
            if (response.length) {            //To Check if Requirement exists , we can change 'response' to 'Requirement' for clarity
                res.json(response[0]);
            } else { res.status(400).json('Requirement Not Found') }

        })
        .catch(err => res.status(400).json('Requirement Not Found'))
}

module.exports = {
    handleViewRequirement : handleViewRequirement
}