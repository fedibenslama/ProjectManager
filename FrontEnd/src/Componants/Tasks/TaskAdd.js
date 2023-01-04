import React from "react";
import { useState } from "react";
import { nanoid } from 'nanoid';
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";

function TaskAdd({ setTasksInfo, TasksInfo }) {

    let navigate = useNavigate()

    const [AddTaskData, setAddTaskData] = useState({
        TaskTitle: '',
        TaskIdCode: '',
        TaskDescription: '',
        TaskMainTask: '',
        TaskSpecification: '',
        TaskNature: '',
        TaskStatus: '',
        TaskPriority: '',
        TaskExpectedDuration: '',
        TaskCompletionTime: '',
        TaskMembInCharge: ''
    })
    const onCancelClick = () => {
        navigate("/Tasks")
    }
    const onTaskAddChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const NewTaskData = { ...AddTaskData }

        NewTaskData[fieldName] = fieldValue;
        setAddTaskData(NewTaskData);

    }
    const onTaskAddSubmit = (event) => {
        event.preventDefault();
        const newTask = {
            id: nanoid(),
            TaskTitle: AddTaskData.TaskTitle,
            TaskIdCode: AddTaskData.TaskIdCode,
            TaskDescription: AddTaskData.TaskDescription,
            TaskMainTask: AddTaskData.TaskMainTask,
            TaskSpecification: AddTaskData.TaskSpecification,
            TaskNature: AddTaskData.TaskNature,
            TaskStatus: AddTaskData.TaskStatus,
            TaskPriority: AddTaskData.TaskPriority,
            TaskExpectedDuration: AddTaskData.TaskExpectedDuration,
            TaskCompletionTime: AddTaskData.TaskCompletionTime,
            TaskMembInCharge: AddTaskData.TaskMembInCharge

        };
        const NewTasks = [...TasksInfo, newTask];
        setTasksInfo(NewTasks)


        fetch('http://localhost:3001/addTask', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                TaskTitle: AddTaskData.TaskTitle,
                TaskIdCode: AddTaskData.TaskIdCode,
                TaskDescription: AddTaskData.TaskDescription,
                TaskMainTask: AddTaskData.TaskMainTask,
                TaskSpecification: AddTaskData.TaskSpecification,
                TaskNature: AddTaskData.TaskNature,
                TaskStatus: AddTaskData.TaskStatus,
                TaskPriority: AddTaskData.TaskPriority,
                TaskExpectedDuration: AddTaskData.TaskExpectedDuration,
                TaskCompletionTime: AddTaskData.TaskCompletionTime,
                TaskMembInCharge: AddTaskData.TaskMembInCharge

            })
        })
            .then(response => response.json())
            navigate("/Tasks")
            

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
                                <h1>Task Add</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li className="breadcrumb-item active">Task Add</li>
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
                                            onChange={onTaskAddChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TaskIdCode">ID Code</label>
                                        <input
                                            type="TaskIdCode"
                                            id="TaskIdCode"
                                            className="form-control"
                                            name="TaskIdCode"
                                            onChange={onTaskAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TaskDescription">Description</label>
                                        <textarea id="TaskDescription"
                                            className="form-control"
                                            rows={4}
                                            defaultValue={""}
                                            name="TaskDescription"
                                            onChange={onTaskAddChange} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="TaskMainTask">Main Task</label>
                                        <input
                                            type="text"
                                            id="TaskMainTask"
                                            className="form-control"
                                            name="TaskMainTask"
                                            onChange={onTaskAddChange} />
                                    </div>
                                    {/* <div className="form-group">
                                        <label htmlFor="TaskSpecification">Task Specification</label>
                                        <input type="text"
                                            id="TaskSpecification"
                                            className="form-control"
                                            name="TaskSpecification"
                                            onChange={onTaskAddChange} />
                                    </div> */}
                                    <div className="form-group">
                                        <label htmlFor="TaskNature">Nature</label>
                                        <input type="text"
                                            id="TaskNature"
                                            className="form-control"
                                            name="TaskNature"
                                            onChange={onTaskAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TaskMembInCharge">Member In Charge</label>
                                        <input type="text"
                                            id="TaskMembInCharge"
                                            className="form-control"
                                            name="TaskMembInCharge"
                                            onChange={onTaskAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TaskPriority">Priority</label>
                                        <select
                                            id="TaskPriority"
                                            className="form-control custom-select"
                                            onChange={onTaskAddChange}
                                            name="TaskPriority">
                                            <option selected disabled>Select one</option>
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
                                            onChange={onTaskAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TaskCompletionTime">Completion Time</label>
                                        <input type="date"
                                            id="TaskCompletionTime"
                                            className="form-control"
                                            name="TaskCompletionTime"
                                            onChange={onTaskAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="TaskStatus">Status</label>
                                        <select
                                            id="TaskStatus"
                                            className="form-control custom-select"
                                            onChange={onTaskAddChange}
                                            name="TaskStatus">
                                            <option selected disabled>Select one</option>
                                            <option>On Hold</option>
                                            <option>Canceled</option>
                                            <option>Success</option>

                                        </select>
                                    </div>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button onClick={onCancelClick} className="btn btn-secondary">Cancel</button>

                            <button type="submit"
                                className="btn btn-danger float-right mr-3"
                                onClick={onTaskAddSubmit} > Add New Task </button>
                        </div>
                    </div>
                </section>
                {/* /.content */}
            </div>

        </div>

    )
}

export default TaskAdd