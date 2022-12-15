/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
// import Footer from "../../Layouts/Footer";
function Projects({ ProjectsInfo, setProjectsInfo, setEditProjectData, setEditProjectId }) {

   

    // eslint-disable-next-line no-unused-vars
    const [ViewProjectId, setViewProjectId] = useState(null)

    let navigatee = useNavigate()

    useEffect(() => {
        fetch('http://localhost:3001/projects')
            .then(response => {
                return response.json();
            })
            .then(projects => {

                setProjectsInfo(projects)
            })

    }, [setProjectsInfo]) //


    const onAddProjectClick = () => {
        navigatee('/addProject')
    }

    const onProjectViewClick = (event, ProjectInfo) => {
        event.preventDefault();
        setViewProjectId(ProjectInfo.id)
        navigatee(`/ViewProject/${ProjectInfo.id}`)

    }
    const onKanbanViewClick = (event, ProjectInfo) => {
        event.preventDefault();
        setViewProjectId(ProjectInfo.id)
        navigatee(`/kanban/${ProjectInfo.id}`)
        window.location.reload(false);

    }

    const onProjectEditClick = (event, ProjectInfo) => {
        event.preventDefault();
        setEditProjectId(ProjectInfo.id)
        navigatee("/EditProject")
        const ProjectValue = {
            Name: ProjectInfo.name,
            Type: ProjectInfo.type,
            UsedSolutions: ProjectInfo.usedsolutions,
            AssociatedServers: ProjectInfo.associatedservers,
            AssociatedClient: ProjectInfo.associatedclient,
            Status: ProjectInfo.Status,
            ProjectProgress: ProjectInfo.projectprogress,
            StartDate: ProjectInfo.startdate,
            FinishDate: ProjectInfo.finishdate,
            ProjectDescription: ProjectInfo.projectdescription
        }

        setEditProjectData(ProjectValue)
    }
    const onProjectDeleteClick = (projectId) => {

        const NewProjects = [...ProjectsInfo]
        const index = ProjectsInfo.findIndex((ProjectInfo) => ProjectInfo.id === projectId);
        NewProjects.splice(index, 1);
        navigatee("/")
        setProjectsInfo(NewProjects)

        fetch('http://localhost:3001/DeleteProject', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: projectId

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
                                <h1>Projects</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Projects</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">


                                </div>
                                {/* /.card */}
                                <div className="card">

                                    <div className="card-header">
                                        <h3 className="card-title">List Of Projects</h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <div className="dt-buttons btn-group flex-wrap">
                                            <button type="button"
                                                className="btn btn-block btn-outline-dark mb-3 " //mr,ml,mt,mb
                                                onClick={onAddProjectClick}
                                                tabindex="0">Add a New Project</button>
                                        </div>
                                        <table id="example2" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Project Name</th>
                                                    <th>Type</th>
                                                    <th>Used Solutions</th>
                                                    <th>Associated Servers</th>
                                                    <th>Associated Client</th>
                                                    <th>Project Progress</th>
                                                    <th>Start Date</th>
                                                    <th>Finish Date</th>
                                                    <th>Status</th>
                                                    <th></th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ProjectsInfo.map((ProjectInfo, i) => (
                                                    <Fragment>
                                                        <tr>
                                                            <td>{ProjectInfo.name}</td>
                                                            <td>{ProjectInfo.type} </td>
                                                            <td>{ProjectInfo.usedsolutions}</td>
                                                            <td>{ProjectInfo.associatedservers}</td>
                                                            <td>{ProjectInfo.associatedclient}</td>
                                                            <td className="project_progress text-center">
                                                                <div className="progress progress-sm">
                                                                    <div className="progress-bar bg-green" role="progressbar"
                                                                        aria-valuenow={ProjectInfo.projectprogress}
                                                                        aria-valuemin={0} aria-valuemax={100}
                                                                        style={{ width: `${ProjectInfo.projectprogress}%` }}>
                                                                    </div>
                                                                </div>
                                                                <small>
                                                                    {`${ProjectInfo.projectprogress}% Complete`}
                                                                </small>
                                                            </td>
                                                            <td>{ProjectInfo.startdate}</td>
                                                            <td>{ProjectInfo.finishdate}</td>
                                                            <td className="project-state">
                                                                <span className="badge badge-info">{ProjectInfo.status}</span>
                                                            </td>
                                                            <td className="project-actions text-right btn-group" >
                                                                <button className="btn btn-primary btn-sm mr-1"
                                                                    onClick={(event) => onProjectViewClick(event, ProjectInfo)}
                                                                >
                                                                    <i className="fas fa-folder">
                                                                    </i>
                                                                    View
                                                                </button>
                                                                <button className="btn btn-info btn-sm mr-1"
                                                                    onClick={(event) => onProjectEditClick(event, ProjectInfo)}
                                                                >
                                                                    <i className="fas fa-pencil-alt">
                                                                    </i>
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    className="btn btn-danger btn-sm mr-1"

                                                                    onClick={() => onProjectDeleteClick(ProjectInfo.id)}
                                                                >
                                                                    <i className="fas fa-trash">
                                                                    </i>
                                                                    Delete
                                                                </button>
                                                                <button
                                                                    className="btn btn-dark btn-sm mr-1"

                                                                    onClick={(event) => onKanbanViewClick(event, ProjectInfo)}
                                                                >
                                                                    <i className="fas fa-clipboard">
                                                                    </i>
                                                                    Kanban
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

export default Projects