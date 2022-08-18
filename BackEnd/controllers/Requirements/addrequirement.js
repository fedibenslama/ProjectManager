const handleAddRequirement = (req, res, db) => {
    const { RequirementTitle,RequirementIdCode,RequirementDescription,RequirementStatus,RequirementCreatedBy,RequirementAssociatedProject,RequirementMainRequirement} = req.body; //to avoid repeating req.body
    db('requirements')
        .returning('*')  //our response is all the columns
        .insert({
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
            res.status(400).json('Unable To Add Requirement')  //giving the error details in not good for security so i'll change the err with smthing else
        })



}
module.exports = {
    handleAddRequirement: handleAddRequirement
}