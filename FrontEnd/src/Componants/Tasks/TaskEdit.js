import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";


function TaskEdit({ TasksInfo, setTasksInfo, EditTaskData, setEditTaskData, EditTaskId, setEditTaskId }) {

    //----------------------Task Edit---------------------------------

    let navigate = useNavigate()

    const onCancelClick = () => {
        navigate('/Tasks')
    }

    const onTaskEditChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const NewTaskData = { ...EditTaskData };
        NewTaskData[fieldName] = fieldValue;

        setEditTaskData(NewTaskData)
    }
    const onTaskEditSubmit = (event) => {
        event.preventDefault();

        const editedTask = {
            id: EditTaskId,
            TaskTitle: EditTaskData.TaskTitle,
            TaskIdCode: EditTaskData.TaskIdCode,
            TaskDescription: EditTaskData.TaskDescription,
            TaskMainTask: EditTaskData.TaskMainTask,
            TaskSpecification: EditTaskData.TaskSpecification,
            TaskNature: EditTaskData.TaskNature,
            TaskStatus: EditTaskData.TaskStatus,
            TaskPriority: EditTaskData.TaskPriority,
            TaskExpectedDuration: EditTaskData.TaskExpectedDuration,
            TaskCompletionTime: EditTaskData.TaskCompletionTime,
            TaskMembInCharge: EditTaskData.TaskMembInCharge
        }
        const NewTasks = [...TasksInfo]
        const index = TasksInfo.findIndex((TaskInfo) => TaskInfo.id === EditTaskId);
        NewTasks[index] = editedTask;
        setTasksInfo(NewTasks)
        setEditTaskId(null)

        fetch('http://localhost:3001/EditTask', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: EditTaskId,
                TaskTitle: EditTaskData.TaskTitle,
                TaskIdCode: EditTaskData.TaskIdCode,
                TaskDescription: EditTaskData.TaskDescription,
                TaskMainTask: EditTaskData.TaskMainTask,
                TaskSpecification: EditTaskData.TaskSpecification,
                TaskNature: EditTaskData.TaskNature,
                TaskStatus: EditTaskData.TaskStatus,
                TaskPriority: EditTaskData.TaskPriority,
                TaskExpectedDuration: EditTaskData.TaskExpectedDuration,
                TaskCompletionTime: EditTaskData.TaskCompletionTime,
                TaskMembInCharge: EditTaskData.TaskMembInCharge

            })
        })
            .then(response => response.json())

    }

    /////////////////////////////////////////

    const onTaskEditSubmitAndClose = (event) => {
        event.preventDefault();
        const editedTask = {
            id: EditTaskId,
            TaskTitle: EditTaskData.TaskTitle,
            TaskIdCode: EditTaskData.TaskIdCode,
            TaskDescription: EditTaskData.TaskDescription,
            TaskMainTask: EditTaskData.TaskMainTask,
            TaskSpecification: EditTaskData.TaskSpecification,
            TaskNature: EditTaskData.TaskNature,
            TaskStatus: EditTaskData.TaskStatus,
            TaskPriority: EditTaskData.TaskPriority,
            TaskExpectedDuration: EditTaskData.TaskExpectedDuration,
            TaskCompletionTime: EditTaskData.TaskCompletionTime,
            TaskMembInCharge: EditTaskData.TaskMembInCharge
        }
        const NewTasks = [...TasksInfo]
        const index = TasksInfo.findIndex((TaskInfo) => TaskInfo.id === EditTaskId);
        NewTasks[index] = editedTask;
        setTasksInfo(NewTasks)
        setEditTaskId(null)

        fetch('http://localhost:3001/EditTask', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: EditTaskId,
                TaskTitle: EditTaskData.TaskTitle,
                TaskIdCode: EditTaskData.TaskIdCode,
                TaskDescription: EditTaskData.TaskDescription,
                TaskMainTask: EditTaskData.TaskMainTask,
                TaskSpecification: EditTaskData.TaskSpecification,
                TaskNature: EditTaskData.TaskNature,
                TaskStatus: EditTaskData.TaskStatus,
                TaskPriority: EditTaskData.TaskPriority,
                TaskExpectedDuration: EditTaskData.TaskExpectedDuration,
                TaskCompletionTime: EditTaskData.TaskCompletionTime,
                TaskMembInCharge: EditTaskData.TaskMembInCharge

            })
        })
            .then(response => response.json())
            .then(edit => {
                navigate('/Tasks')
            })




    }


    return (

        <div>
            <Navbar />
            <Menu />
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Task Edit</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/Tasks">Home</a></li>
                                    <li className="breadcrumb-item active">Task Edit</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">General</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                            <i className="fas fa-minus" />
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="TaskTitle">Title</label>
                                        <input
                                            type="text"
                                            id="TaskTitle"
                                            name="TaskTitle"
                                            className="form-control"
                                            onChange={onTaskEditChange}
                                            value={EditTaskData.TaskTitle}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TaskIdCode">ID Code</label>
                                        <input
                                            type="text"
                                            id="TaskIdCode"
                                            className="form-control"
                                            name="TaskIdCode"
                                            onChange={onTaskEditChange}
                                            value={EditTaskData.TaskIdCode} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TaskDescription">Description</label>
                                        <textarea id="TaskDescription"
                                            className="form-control"
                                            rows={4}
                                            name="TaskDescription"
                                            onChange={onTaskEditChange}
                                            value={EditTaskData.TaskDescription} />
                                    </div>

                                   
                                    <div className="form-group">
                                        <label htmlFor="TaskMainTask">Main Task</label>
                                        <input
                                            type="text"
                                            id="TaskMainTask"
                                            className="form-control"
                                            name="TaskMainTask"
                                            onChange={onTaskEditChange}
                                            value={EditTaskData.TaskMainTask} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TaskSpecification">Task Specification</label>
                                        <input type="text"
                                            id="TaskSpecification"
                                            className="form-control"
                                            name="TaskSpecification"
                                            onChange={onTaskEditChange}
                                            value={EditTaskData.TaskSpecification} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TaskNature">Nature</label>
                                        <input type="text"
                                            id="TaskNature"
                                            className="form-control"
                                            name="TaskNature"
                                            onChange={onTaskEditChange}
                                            value={EditTaskData.TaskNature} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TaskMembInCharge">Member In Charge</label>
                                        <input type="text"
                                            id="TaskMembInCharge"
                                            className="form-control"
                                            name="TaskMembInCharge"
                                            onChange={onTaskEditChange}
                                            value={EditTaskData.TaskMembInCharge} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TaskPriority">Priority</label>
                                        <select
                                            id="TaskPriority"
                                            className="form-control custom-select"
                                            onChange={onTaskEditChange}
                                            name="TaskPriority">
                                            <option selected disabled>{EditTaskData.TaskPriority}</option>
                                            <option>Low</option>
                                            <option>Normal</option>
                                            <option>Important</option>
                                            <option>Critical</option>

                                        </select>
                                    </div>


                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                        <div className="col-md-6">
                            <div className="card card-secondary">
                                <div className="card-header">
                                    <h3 className="card-title">Progress</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                            <i className="fas fa-minus" />
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="TaskExpectedDuration">Expected Duration</label>
                                        <input type="text"
                                            id="TaskExpectedDuration"
                                            className="form-control"
                                            name="TaskExpectedDuration"
                                            onChange={onTaskEditChange}
                                            value={EditTaskData.TaskExpectedDuration} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TaskCompletionTime">Completion Time</label>
                                        <input type="date"
                                            id="TaskCompletionTime"
                                            className="form-control"
                                            name="TaskCompletionTime"
                                            onChange={onTaskEditChange}
                                            value={EditTaskData.TaskCompletionTime} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TaskStatus">Status</label>
                                        <select
                                            id="TaskStatus"
                                            className="form-control custom-select"
                                            onChange={onTaskEditChange}
                                            name="TaskStatus">
                                            <option selected disabled>{EditTaskData.TaskStatus}</option>
                                            <option>On Hold</option>
                                            <option>Canceled</option>
                                            <option>Success</option>

                                        </select>
                                    </div>
                                    <button type="submit"
                                        defaultValue="Create new Task"
                                        className="btn btn-danger"
                                        onClick={onTaskEditSubmit} >
                                        Save And Continue
                                    </button>
                                </div>

                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-secondary" onClick={onCancelClick}>Cancel</button>

                            <button type="submit"
                                defaultValue="Create new Task"
                                className="btn btn-success float-right"
                                onClick={onTaskEditSubmitAndClose} >
                                Save And Go Back

                            </button>

                        </div>
                    </div>
                </section>
                {/* /.content */}
            </div>

        </div>


    )
}

export default TaskEdit