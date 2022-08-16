const handleViewProject = (req, res,db) => {
    
    const { id } = req.params;
    
    db.select('*').from('projects').where({ id: id })
        .then(response => {
            if (response.length) {            //To Check if project exists , we can change 'response' to 'project' for clarity
                res.json(response[0]);
            } else { res.status(400).json('Project Not Found') }

        })
        .catch(err => res.status(400).json('Project Not Found'))
}

module.exports = {
    handleViewProject : handleViewProject
}