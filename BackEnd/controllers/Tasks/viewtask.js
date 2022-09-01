const handleViewTask = (req, res,db) => {
    
    const { id } = req.params;
    
    db.select('*').from('tasks').where({ id: id })
        .then(response => {
            if (response.length) {            //To Check if Task exists , we can change 'response' to 'Task' for clarity
                res.json(response[0]);
            } else { res.status(400).json('Task Not Found') }

        })
        .catch(err => res.status(400).json('Task Not Found'))
}

module.exports = {
    handleViewTask : handleViewTask
}