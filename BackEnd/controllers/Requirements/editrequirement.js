const handleEditRequirement = (req, res,db) => {


    const { id, RequirementTitle,RequirementIdCode,RequirementDescription,RequirementStatus,RequirementCreatedBy,RequirementAssociatedProject,RequirementMainRequirement } = req.body; //to avoid repeating req.body
    db('requirements')
        .returning('*')  //our response is all the columns
        .where('id', '=', id)
        .update({
            // be careful it's case sensitive , in the db all are lowercase
            requirementtitle: RequirementTitle,
            requirementidcode: RequirementIdCode,
            requirementdescription: RequirementDescription,
            requirementstatus: RequirementStatus,
            requirementcreatedby: RequirementCreatedBy,
            requirementassociatedproject: RequirementAssociatedProject,
            requirementmainrequirement: RequirementMainRequirement
        }).then(requirement => {
            res.json(requirement[0]);
        })
        .catch(err => {
            res.status(400).json('Unable To Edit Requirement')  //giving the error details in not good for security so i'll change the err with smthing else
        })



}
module.exports = {
    handleEditRequirement: handleEditRequirement
}