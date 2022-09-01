const handleEditFunctionality = (req, res,db) => {


    const { id, FuncTitle, FuncIdCode, FuncDescription, FuncStatus, FuncAssociatedReq, FuncAssociatedTasks, FuncAssociatedMemb,
        FuncStartDate, FuncFinishDate, FuncDuration } = req.body; //to avoid repeating req.body
    db('functionalities')
        .returning('*')  //our response is all the columns
        .where('id', '=', id)
        .update({
            // be careful it's case sensitive , in the db all are lowercase
            functitle: FuncTitle,
            funcidcode: FuncIdCode,
            funcdescription: FuncDescription,
            funcstatus: FuncStatus,
            funcassociatedreq: FuncAssociatedReq,
            funcassociatedtasks: FuncAssociatedTasks,
            funcassociatedmemb: FuncAssociatedMemb,
            funcstartdate: FuncStartDate,
            funcfinishdate: FuncFinishDate,
            funcduration: FuncDuration,
        }).then(functionality => {
            res.json(functionality[0]);
        })
        .catch(err => {
            res.status(400).json('Unable To Edit Functionality')  //giving the error details in not good for security so i'll change the err with smthing else
        })



}
module.exports = {
    handleEditFunctionality: handleEditFunctionality
}