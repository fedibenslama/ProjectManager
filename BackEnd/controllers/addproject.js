const handleAddProject = (req, res, db) => {
    const { Name, Type, UsedSolutions, AssociatedServers, AssociatedClient, Status, ProjectProgress, StartDate, FinishDate, ProjectDescription } = req.body; //to avoid repeating req.body
    db('projects')
        .returning('*')  //our response is all the columns
        .insert({
            // be careful it's case sensitive , in the db all are lowercase
            name: Name,
            type: Type,
            usedsolutions: UsedSolutions,
            associatedservers: AssociatedServers,
            associatedclient: AssociatedClient,
            status: Status,
            projectprogress: ProjectProgress,
            startdate: StartDate,
            finishdate: FinishDate,
            projectdescription: ProjectDescription
        }).then(project => {
            res.json(project[0]);
        })
        .catch(err => {
            res.status(400).json('Unable To Add Project')  //giving the error details in not good for security so i'll change the err with smthing else
        })



}
module.exports = {
    handleAddProject: handleAddProject
}