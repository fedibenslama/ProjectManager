import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../../Layouts/Menu";
import Navbar from "../../Layouts/Navbar";

function ProjectView() {

    let navigate = useNavigate()
    const onButtonClick = () => {
        navigate('/')
    }
    const [ViewProjectData, setViewProjectData] = useState([{
        Name: '',
        Type: '',
        UsedSolutions: '',
        AssociatedServers: '',
        AssociatedClient: '',
        Status: '',
        ProjectProgress: '',
        StartDate: '',
        FinishDate: '',
        ProjectDescription: ''
    }])
    let { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3001/ViewProject/${id}`)
            .then(response => {
                return response.json();
            })
            .then(project => {

                setViewProjectData(project)

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
                                <h1>Projects Details</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li className="breadcrumb-item active">Project Detail</li>
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
                            <h3 className="card-title">Project Details</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>
                                <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                                    <i className="fas fa-times" />
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
                                                    <span className="info-box-text text-center text-muted">Project Progress</span>
                                                    <div className="progress progress-sm">
                                                        <div className="progress-bar bg-blue" role="progressbar"
                                                            aria-valuenow={ViewProjectData.projectprogress}
                                                            aria-valuemin={0} aria-valuemax={100}
                                                            style={{ width: `${ViewProjectData.projectprogress}%` }}>
                                                        </div>

                                                    </div>
                                                    <small>
                                                        {`${ViewProjectData.projectprogress}% Complete`}
                                                    </small>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <div className="info-box bg-light">
                                                <div className="info-box-content">
                                                    <span className="info-box-text text-center text-muted">Start Date</span>
                                                    <span
                                                        className="info-box-number text-center text-muted mb-0"

                                                    >{ViewProjectData.startdate}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <div className="info-box bg-light">
                                                <div className="info-box-content">
                                                    <span className="info-box-text text-center text-muted">Finish Date</span>
                                                    <span className="info-box-number text-center text-muted mb-0">
                                                        {ViewProjectData.finishdate}</span>
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
                                                        <h3 className="card-title " >{ViewProjectData.name}</h3>
                                                    </div>
                                                    {/* /.card-header */}
                                                    <div className="card-body">
                                                        {/* we are adding the accordion ID so Bootstrap's collapse plugin detects it */}
                                                        <div id="accordion">
                                                            <div className="card card-primary">
                                                                <div className="card-header">
                                                                    <h4 className="card-title w-100">
                                                                        <a className="d-block w-100" data-toggle="collapse" href="#collapseOne">
                                                                            Used Solutions
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                                <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                                                    <div className="card-body">
                                                                        {ViewProjectData.usedsolutions}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card card-danger">
                                                                <div className="card-header">
                                                                    <h4 className="card-title w-100">
                                                                        <a className="d-block w-100" data-toggle="collapse" href="#collapseTwo">
                                                                            Associated Servers
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                                <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                                                    <div className="card-body">
                                                                        {ViewProjectData.associatedservers}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card card-success">
                                                                <div className="card-header">
                                                                    <h4 className="card-title w-100">
                                                                        <a className="d-block w-100" data-toggle="collapse" href="#collapseThree">
                                                                            Associated Client
                                                                        </a>
                                                                    </h4>
                                                                </div>
                                                                <div id="collapseThree" className="collapse" data-parent="#accordion">
                                                                    <div className="card-body">
                                                                        {ViewProjectData.associatedclient}
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
                                    <div>
                                        <h3 className="text-primary"><i className="fas fa-paint-brush " /> {ViewProjectData.name}</h3></div>

                                    <div className="card">
                                        <div className="card-header">
                                            <h3 className="card-title">
                                                <i className="fas fa-text-width" />
                                                Project Description
                                            </h3>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            <blockquote>
                                                <p>{ViewProjectData.projectdescription}</p>
                                                <small>Type: <cite>{ViewProjectData.type}</cite></small>
                                            </blockquote>
                                        </div>
                                        {/* /.card-body */}
                                    </div>


                                    <br />
                                    <div className="text-muted">
                                        <p className="text-lg">Status
                                            <b className="d-block">{ViewProjectData.status}</b>
                                        </p>
                                        <p className="text-lg">Type
                                            <b className="d-block">{ViewProjectData.type}</b>
                                        </p>
                                    </div>

                                    <div className="text-center mt-5 mb-3">
                                        <button className="btn btn-sm btn-primary"
                                            onClick={onButtonClick}>View All Projects</button>
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

export default ProjectView