/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";
import Plot from 'react-plotly.js';

function Dashboard({ TasksInfo, setTasksInfo, setEditTaskData, setEditTaskId }) {

    ////////// Plot ////////
    const [plot, setPlot] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/plot').then(res => res.json()).then(data => { setPlot(data); });
    }, []);

    ////////////////////
    ///Tasks/////
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

    const onClientFeedbacksView = () => {
        navigatee('/clientsfeedback')
    }
    const onProjectsView = () => {
        navigatee('/')
    }
    const onUsersView = () => {
        navigatee('/Members')
    }
    const onViewAllTasksClick = () => {
        navigatee('/tasks')
    }

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
    /////////

    return (


        <div>
            <Navbar />
            <Menu />

            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">

                {/* Content Header (Page header) */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1 className="m-0">Dashboard</h1>
                            </div>{/* /.col */}
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Dashboard</li>
                                </ol>
                            </div>{/* /.col */}
                        </div>{/* /.row */}
                    </div>{/* /.container-fluid */}
                </div>
                {/* /.content-header */}
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">

                        {/* Small boxes (Stat box) */}
                        <div className="row">
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>4</h3>
                                        <p>Client's Feedback</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fas fa-comments" />
                                    </div>
                                    <a onClick={onClientFeedbacksView} className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-success">
                                    <div className="inner">
                                        <h3>4</h3>
                                        <p>Number Of Projects</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-stats-bars" />
                                    </div>
                                    <a onClick={onProjectsView} className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-warning">
                                    <div className="inner">
                                        <h3>10</h3>
                                        <p>Number Of Users</p>
                                    </div>
                                    <div className="icon">
                                        <i className="ion ion-person-add" />
                                    </div>
                                    <a onClick={onUsersView} className="small-box-footer">More info <i className="fas fa-arrow-circle-right" /></a>
                                </div>
                            </div>
                            {/* ./col */}
                            <div className="col-lg-3 col-6">
                                {/* small box */}
                                <div className="small-box bg-danger">
                                    <div className="inner">
                                        <h3>65</h3>
                                        <p>Your Entries</p>
                                    </div>
                                    
                                    <div className="icon">
                                        <i className="fa fa-database" />
                                    </div>
                                   
                                </div>
                            </div>
                            {/* ./col */}
                        </div>
                        {/* /.row */}

                        {/* Main row */}
                        <div className="row">
                            {/* Left col */}

                            <section className="col-lg-7 connectedSortable">
                                {/* Custom tabs (Charts with tabs)*/}
                                <div className="card">
                                    {/* ///////////////// */}
                                    {/* TABLE: LATEST ORDERS */}
                                    <div className="card">
                                        <div className="card-header border-transparent">
                                            <h3 className="card-title">Latest Tasks</h3>
                                            <div className="card-tools">
                                                <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                                    <i className="fas fa-minus" />
                                                </button>
                                                <button type="button" className="btn btn-tool" data-card-widget="remove">
                                                    <i className="fas fa-times" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body p-0">
                                            <div className="table-responsive">
                                                <table className="table m-0">
                                                    <thead>
                                                        <tr>
                                                            <th>Task ID</th>
                                                            <th>Title</th>
                                                            <th>Status</th>
                                                            <th>Importance</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        {TasksInfo.map((TaskInfo, i) => (
                                                            <Fragment>
                                                                <tr>
                                                                    <td>{TaskInfo.taskidcode}</td>
                                                                    <td>{TaskInfo.tasktitle}</td>
                                                                    <td><span className="badge badge-warning">{TaskInfo.taskstatus}</span></td>
                                                                    <td>
                                                                        <small className="badge badge-danger"><i className="far fa-clock" /> {TaskInfo.taskpriority}</small>
                                                                    </td>
                                                                </tr>
                                                            </Fragment>

                                                        ))}
                                                    </tbody>


                                                </table>
                                            </div>
                                            {/* /.table-responsive */}
                                        </div>
                                        {/* /.card-body */}
                                        <div className="card-footer clearfix">
                                            <a onClick={onAddTaskClick} className="btn btn-sm btn-info float-left">Make A New Task</a>
                                            <a onClick={onViewAllTasksClick} className="btn btn-sm btn-secondary float-right">View All Tasks</a>
                                        </div>
                                        {/* /.card-footer */}
                                    </div>
                                    {/* /.card */}

                                    {/* /////////////// */}
                                    {/* DIRECT CHAT */}


                                    {/*/.direct-chat */}

                                </div>
                                {/* /.card */}

                                {/* TO DO List */}
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">
                                            <i className="ion ion-clipboard mr-1" />
                                            To Do List
                                        </h3>
                                        <div className="card-tools">
                                            <ul className="pagination pagination-sm">
                                                <li className="page-item"><a href="#" className="page-link">«</a></li>
                                                <li className="page-item"><a href="#" className="page-link">1</a></li>
                                                {/* <li className="page-item"><a href="#" className="page-link">2</a></li>
                                                <li className="page-item"><a href="#" className="page-link">3</a></li> */}
                                                <li className="page-item"><a href="#" className="page-link">»</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <ul className="todo-list" data-widget="todo-list">
                                            <li>
                                                {/* drag handle */}
                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v" />
                                                    <i className="fas fa-ellipsis-v" />
                                                </span>
                                                {/* checkbox */}
                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" defaultValue name="todo1" id="todoCheck1" />
                                                    <label htmlFor="todoCheck1" />
                                                </div>
                                                {/* todo text */}
                                                <span className="text">Design a nice interface for the Classification System</span>
                                                {/* Emphasis label */}
                                                <small className="badge badge-danger"><i className="far fa-clock" /> 1 Week</small>
                                                {/* General tools such as edit or delete*/}
                                                <div className="tools">
                                                    <i className="fas fa-edit" />
                                                    <i className="fas fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v" />
                                                    <i className="fas fa-ellipsis-v" />
                                                </span>
                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" defaultValue name="todo2" id="todoCheck2" defaultChecked />
                                                    <label htmlFor="todoCheck2" />
                                                </div>
                                                <span className="text">Make the theme responsive</span>
                                                <small className="badge badge-info"><i className="far fa-clock" /> 4 hours</small>
                                                <div className="tools">
                                                    <i className="fas fa-edit" />
                                                    <i className="fas fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v" />
                                                    <i className="fas fa-ellipsis-v" />
                                                </span>
                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" defaultValue name="todo3" id="todoCheck3" />
                                                    <label htmlFor="todoCheck3" />
                                                </div>
                                                <span className="text">Make the application faster</span>
                                                <small className="badge badge-warning"><i className="far fa-clock" /> 2 days</small>
                                                <div className="tools">
                                                    <i className="fas fa-edit" />
                                                    <i className="fas fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v" />
                                                    <i className="fas fa-ellipsis-v" />
                                                </span>
                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" defaultValue name="todo4" id="todoCheck4" />
                                                    <label htmlFor="todoCheck4" />
                                                </div>
                                                <span className="text">Fix the clients interface</span>
                                                <small className="badge badge-success"><i className="far fa-clock" /> 3 days</small>
                                                <div className="tools">
                                                    <i className="fas fa-edit" />
                                                    <i className="fas fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v" />
                                                    <i className="fas fa-ellipsis-v" />
                                                </span>
                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" defaultValue name="todo5" id="todoCheck5" />
                                                    <label htmlFor="todoCheck5" />
                                                </div>
                                                <span className="text">Check Emails</span>
                                                <small className="badge badge-primary"><i className="far fa-clock" /> 1 hour</small>
                                                <div className="tools">
                                                    <i className="fas fa-edit" />
                                                    <i className="fas fa-trash-o" />
                                                </div>
                                            </li>
                                            <li>
                                                <span className="handle">
                                                    <i className="fas fa-ellipsis-v" />
                                                    <i className="fas fa-ellipsis-v" />
                                                </span>
                                                <div className="icheck-primary d-inline ml-2">
                                                    <input type="checkbox" defaultValue name="todo6" id="todoCheck6" />
                                                    <label htmlFor="todoCheck6" />
                                                </div>
                                                <span className="text">Complete End of Study Project</span>
                                                <small className="badge badge-secondary"><i className="far fa-clock" /> 7 months</small>
                                                <div className="tools">
                                                    <i className="fas fa-edit" />
                                                    <i className="fas fa-trash-o" />
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* /.card-body */}
                                    <div className="card-footer clearfix">
                                        <button type="button" className="btn btn-primary float-right"><i className="fas fa-plus" /> Add item</button>
                                    </div>
                                </div>
                                {/* /.card */}
                            </section>
                            <section className="col-lg-5 connectedSortable">
                                {/* Map card */}
                                <div>

                                </div>
                                <div className="card-header">
                                    <p className="text-center">
                                        <strong>Goal Completion</strong>
                                    </p>
                                    <div className="progress-group">
                                        Complete Projects Successfully
                                        <span className="float-right"><b>4</b>/100</span>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-primary" style={{ width: '4%' }} />
                                        </div>
                                    </div>
                                    {/* /.progress-group */}
                                    <div className="progress-group">
                                        Obtain Clients
                                        <span className="float-right"><b>4</b>/200</span>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-info" style={{ width: '2%' }} />
                                        </div>
                                    </div>
                                    {/* /.progress-group */}
                                    <div className="progress-group">
                                        <span className="progress-text">Complete Tasks</span>
                                        <span className="float-right"><b>6</b>/400</span>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-warning" style={{ width: '1.5%' }} />
                                        </div>
                                    </div>
                                    {/* /.progress-group */}
                                    <div className="progress-group">
                                        Complete Requirements
                                        <span className="float-right"><b>5</b>/50</span>
                                        <div className="progress progress-sm">
                                            <div className="progress-bar bg-danger" style={{ width: '10%' }} />
                                        </div>
                                    </div>
                                    {/* /.progress-group */}
                                </div>
                                <div className="card-footer clearfix">
                                    <a onClick={onAddTaskClick} className="btn btn-sm btn-info float-left">Add A New Goal</a>
                                    <a onClick={onViewAllTasksClick} className="btn btn-sm btn-secondary float-right">Edit Goal's Progress</a>
                                </div>
                                <div className="card-header mt-3">
                                    <div className="info-box mb-3 bg-warning">
                                        <span className="info-box-icon"><i className="fas fa-tasks" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Tasks</span>
                                            <span className="info-box-number">6</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                    <div className="info-box mb-3 bg-success">
                                        <span className="info-box-icon"><i className="fas fa-project-diagram" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Functionalities</span>
                                            <span className="info-box-number">3</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                    <div className="info-box mb-3 bg-danger">
                                        <span className="info-box-icon"><i className="fas fa-business-time" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Requirements</span>
                                            <span className="info-box-number">5</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                    <div className="info-box mb-3 bg-info">
                                        <span className="info-box-icon"><i className="fas fa-address-card" /></span>
                                        <div className="info-box-content">
                                            <span className="info-box-text">Clients</span>
                                            <span className="info-box-number">4</span>
                                        </div>
                                        {/* /.info-box-content */}
                                    </div>
                                    {/* /.info-box */}
                                </div>




                            </section>
                        </div>
                        {/* /.row (main row) */}
                    </div>{/* /.container-fluid */}
                </section>
                {/* /.content */}
            </div>
            {/* /.content-wrapper */}


        </div>
    )

}

export default Dashboard