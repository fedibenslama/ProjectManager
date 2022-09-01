/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

function Tasks({ TasksInfo, setTasksInfo, setEditTaskData, setEditTaskId }) {
    // eslint-disable-next-line no-unused-vars
    const [ViewTaskId, setViewTaskId] = useState(null)

    let navigatee = useNavigate()

    useEffect(() => {
        fetch('http://localhost:3001/Tasks')
            .then(response => {
                return response.json();
            })
            .then(Tasks => {

                setTasksInfo(Tasks)
            })

    }, [setTasksInfo])


    const onAddTaskClick = () => {
        navigatee('/addTask')
    }

    const onTaskViewClick = (event, TaskInfo) => {
        event.preventDefault();
        setViewTaskId(TaskInfo.id)
        navigatee(`/ViewTask/${TaskInfo.id}`)

    }

    const onTaskEditClick = (event, TaskInfo) => {
        event.preventDefault();
        setEditTaskId(TaskInfo.id)
        navigatee("/EditTask")
        const TaskValue = {
            TaskTitle: TaskInfo.tasktitle,
            TaskIdCode: TaskInfo.taskidcode,
            TaskDescription: TaskInfo.taskdescription,
            TaskMainTask: TaskInfo.taskmaintask,
            TaskSpecification: TaskInfo.taskspecification,
            TaskNature: TaskInfo.tasknature,
            TaskStatus: TaskInfo.taskstatus,
            TaskPriority: TaskInfo.taskpriority,
            TaskExpectedDuration: TaskInfo.taskexpectedduration,
            TaskCompletionTime: TaskInfo.taskcompletiontime,
            TaskMembInCharge: TaskInfo.taskmembincharge
        }

        setEditTaskData(TaskValue)
    }
    const onTaskDeleteClick = (TaskId) => {

        const NewTasks = [...TasksInfo]
        const index = TasksInfo.findIndex((TaskInfo) => TaskInfo.id === TaskId);
        NewTasks.splice(index, 1);
        navigatee("/Tasks")
        setTasksInfo(NewTasks)

        fetch('http://localhost:3001/DeleteTask', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: TaskId

            })
        })
            .then(response => response.json())
            .catch(console.log)
    }

    return (


        <div>
            <Navbar />
            <Menu />

            <div className="content-wrapper">

                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Tasks</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Tasks</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-13">
                                <div className="card">


                                </div>
                                {/* /.card */}
                                <div className="card">

                                    <div className="card-header">
                                        <h3 className="card-title">List Of Tasks</h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <div className="dt-buttons btn-group flex-wrap">
                                            <button type="button"
                                                className="btn btn-block btn-outline-dark mb-3 " //mr,ml,mt,mb
                                                onClick={onAddTaskClick}
                                                tabindex="0">Add a Task</button>
                                        </div>
                                        <table id="example2" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>ID Code</th>
                                                    {/* <th>Description</th> */}
                                                    <th>Main Task</th>
                                                    {/* <th>Task Specification</th> */}
                                                    <th>Task Nature</th>
                                                    <th>Priority</th>
                                                    <th>Expected Duration</th>
                                                    <th>Completion Time</th>
                                                    <th>Member in Charge</th>
                                                    <th>Status</th>
                                                    <th></th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {TasksInfo.map((TaskInfo, i) => (
                                                    <Fragment>
                                                        <tr>
                                                            <td>{TaskInfo.tasktitle}</td>
                                                            <td>{TaskInfo.taskidcode} </td>
                                                            {/* <td>{TaskInfo.taskdescription}</td> */}
                                                            <td>{TaskInfo.taskmaintask}</td>
                                                            {/* <td>{TaskInfo.taskspecification}</td> */}
                                                            <td>{TaskInfo.tasknature}</td>
                                                            <td>{TaskInfo.taskpriority}</td>
                                                            <td>{TaskInfo.taskexpectedduration}</td>
                                                            <td>{TaskInfo.taskcompletiontime}</td>
                                                            <td>{TaskInfo.taskmembincharge}</td>
                                                            <td className="project-state">
                                                                <span className="badge badge-dark">{TaskInfo.taskstatus}</span>
                                                            </td>
                                                            <td className="project-actions text-left btn-group " >
                                                                <button className="btn btn-primary btn-sm mr-1"
                                                                    onClick={(event) => onTaskViewClick(event, TaskInfo)}
                                                                >
                                                                    <i className="fas fa-folder">
                                                                    </i>
                                                                    View
                                                                </button>
                                                                <button className="btn btn-info btn-sm ml-1"
                                                                    onClick={(event) => onTaskEditClick(event, TaskInfo)}
                                                                >
                                                                    <i className="fas fa-pencil-alt">
                                                                    </i>
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    className="btn btn-danger btn-sm ml-1"

                                                                    onClick={() => onTaskDeleteClick(TaskInfo.id)}
                                                                >
                                                                    <i className="fas fa-trash">
                                                                    </i>
                                                                    Delete
                                                                </button>
                                                            </td>
                                                        </tr>
                                                    </Fragment>

                                                ))}
                                            </tbody>
                                  
                                        </table>
                                    </div>
                                    {/* /.card-body */}
                                </div>
                                {/* /.card */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* /.content */}

            </div>

        </div>
    )

}

export default Tasks