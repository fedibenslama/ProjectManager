const handleEditTask = (req, res, db) => {


    const { id, TaskTitle, TaskIdCode, TaskDescription, TaskMainTask, TaskSpecification, TaskNature, TaskStatus,
        TaskPriority, TaskExpectedDuration, TaskCompletionTime,TaskMembInCharge } = req.body; //to avoid repeating req.body
    db('tasks')
        .returning('*')  //our response is all the columns
        .where('id', '=', id)
        .update({
            // be careful it's case sensitive , in the db all are lowercase
            tasktitle: TaskTitle,
            taskidcode: TaskIdCode,
            taskdescription: TaskDescription,
            taskmaintask: TaskMainTask,
            taskspecification: TaskSpecification,
            tasknature: TaskNature,
            taskstatus: TaskStatus,
            taskpriority: TaskPriority,
            taskexpectedduration: TaskExpectedDuration,
            taskcompletiontime: TaskCompletionTime,
            taskmembincharge:TaskMembInCharge
        }).then(Task => {
            res.json(Task[0]);
        })
        .catch(err => {
            res.status(400).json('Unable To Edit Task')  //giving the error details in not good for security so i'll change the err with smthing else
        })



}
module.exports = {
    handleEditTask: handleEditTask
}