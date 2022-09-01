const handleAddTask = (req, res, db) => {
    const { TaskTitle, TaskIdCode, TaskDescription, TaskMainTask, TaskSpecification, TaskNature, TaskStatus,
        TaskPriority, TaskExpectedDuration, TaskCompletionTime,TaskMembInCharge } = req.body; //to avoid repeating req.body
    db('tasks')
        .returning('*')  //our response is all the columns
        .insert({
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
            res.status(400).json('Unable To Add Task')  //giving the error details in not good for security so i'll change the err with smthing else
        })



}
module.exports = {
    handleAddTask: handleAddTask
}