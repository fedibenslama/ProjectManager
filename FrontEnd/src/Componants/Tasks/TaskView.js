import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../../Layouts/Menu";
import Navbar from "../../Layouts/Navbar";

function TaskView() {

    let navigate = useNavigate()
    const onButtonClick = () => {
        navigate('/')
    }
    const [ViewTaskData, setViewTaskData] = useState([{
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
    }])
    let { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3001/ViewTask/${id}`)
            .then(response => {
                return response.json();
            })
            .then(Task => {

                setViewTaskData(Task)

            })

    }, [id]) //



    return (

        <div>
            <Navbar />
            <Menu/>
            <div className="content-wrapper">

                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Tasks Details</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li className="breadcrumb-item active">Task Detail</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}

                <section className="content">
                    {/* Default box */}

                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title">{ViewTaskData.tasktitle}</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                               
                            </div>
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
                                    <div className="row">
                                    <div className="col-12 col-sm-4">
                                            <div className="info-box bg-light">
                                                <div className="info-box-content">
                                                    <span className="info-box-text text-center text-muted">Title</span>
                                                    <span
                                                        className="info-box-number text-center text-muted mb-0"

                                                    >{ViewTaskData.tasktitle}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <div className="info-box bg-light">
                                                <div className="info-box-content">
                                                    <span className="info-box-text text-center text-muted">Member In Charge</span>
                                                    <span
                                                        className="info-box-number text-center text-muted mb-0"

                                                    >{ViewTaskData.taskmembincharge}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <div className="info-box bg-light">
                                                <div className="info-box-content">
                                                    <span className="info-box-text text-center text-muted">ID Code</span>
                                                    <span className="info-box-number text-center text-muted mb-0">
                                                        {ViewTaskData.taskidcode}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* -------------------------------------------- */}
                                    {/* <div className="row"> */}
                                    <div>
                                        <h5 className="mt-4 mb-2">Specifications &amp; Client</h5>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="card">
                                                    <div className="card-header">
                                                        <h3 className="card-title " >{ViewTaskData.tasktitle}</h3>
                                                    </div>
                                                    {/* /.card-header */}
                                                    <div className="card-body">
                                                        {/* we are adding the accordion ID so Bootstrap's collapse plugin detects it */}
                                                        <div id="accordion">
                                                            <div className="card card-primary">
                                                                <div className="card-header">
                                                                    <h4 className="card-title w-100">
                                                                        <a className="d-block w-100" data-toggle="collapse" href="#collapseOne">
                                                                            Main Task
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                                <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                                                    <div className="card-body">
                                                                        {ViewTaskData.taskmaintask}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card card-danger">
                                                                <div className="card-header">
                                                                    <h4 className="card-title w-100">
                                                                        <a className="d-block w-100" data-toggle="collapse" href="#collapseTwo">
                                                                            Task Nature
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                                <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                                                    <div className="card-body">
                                                                        {ViewTaskData.tasknature}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card card-success">
                                                                <div className="card-header">
                                                                    <h4 className="card-title w-100">
                                                                        <a className="d-block w-100" data-toggle="collapse" href="#collapseThree">
                                                                            Priority
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                                <div id="collapseThree" className="collapse" data-parent="#accordion">
                                                                    <div className="card-body">
                                                                        {ViewTaskData.taskpriority}
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>


                                                    </div>

                                                </div>

                                            </div>


                                        </div>

                                    </div>



                                    {/* </div> */}
                                    {/* --------------------------------------------- */}
                                </div>
                                <div className="col-12 col-md-12 col-lg-4 order-1 order-md-2">
                                    {/* <div>
                                        <h3 className="text-primary"><i className="fas fa-book " /> {ViewTaskData.tasktitle}</h3></div> */}

                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas" />
                                                Task Description
                                            </h3>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            <blockquote>
                                                <p>{ViewTaskData.taskdescription}</p>
                                                <small>Specification: <cite>{ViewTaskData.taskspecification}</cite></small>
                                            </blockquote>
                                        </div>
                                        {/* /.card-body */}
                                    </div>


                                    <br />
                                    <div className="text-muted">
                                        <p className="text-lg">Status
                                            <b className="d-block">{ViewTaskData.taskstatus}</b>
                                        </p>
                                        <p className="text-lg">Expected Duration
                                            <b className="d-block">{ViewTaskData.taskexpectedduration}</b>
                                        </p>
                                        <p className="text-lg">Completion Time
                                            <b className="d-block">{ViewTaskData.taskcompletiontime}</b>
                                        </p>
                                    </div>

                                    <div className="text-center mt-5 mb-3">
                                        <button className="btn btn-sm btn-primary"
                                            onClick={onButtonClick}>View All Tasks</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                        

                    </div>

                </section>

            </div>
        </div>


    )
}

export default TaskView