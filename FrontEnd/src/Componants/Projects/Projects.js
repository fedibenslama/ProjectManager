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
                                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li className="breadcrumb-item active">Projects</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                <section className="content">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-md-12">
                                <div className="card">
                                    <div className="card-header">
                                        <h3 className="card-title">Projects</h3>
                                        
                                        <div className="card-tools">
                                            <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                                <i className="fas fa-minus" />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="card-body">
                                        <div className="dt-buttons btn-group flex-wrap">
                                            <button type="button"
                                            className="btn btn-block btn-outline-info "
                                            onClick={onAddProjectClick}
                                            tabindex="0">Add a New Project</button>
                                        </div>
                                        <table className="table table-striped projects margin-top: 50px">
                                            <thead>
                                                <tr>
                                                    <th style={{ width: '1%' }}>
                                                        #
                                                    </th>
                                                    <th style={{ width: '8%' }} className="text-center" >
                                                        Project Name
                                                    </th>
                                                    <th style={{ width: '8%' }} className="text-center">
                                                        Type
                                                    </th>
                                                    <th style={{ width: '8%' }} className="text-center">
                                                        Used Solutions
                                                    </th>
                                                    <th style={{ width: '8%' }} className="text-center">
                                                        Associated Servers
                                                    </th>
                                                    <th style={{ width: '8%' }} className="text-center" >
                                                        Associated Client
                                                    </th>
                                                    <th style={{ width: '8%' }} className="text-center" >
                                                        Project Progress
                                                    </th>
                                                    <th style={{ width: '8%' }} className="text-center">
                                                        Start Date
                                                    </th>
                                                    <th style={{ width: '8%' }} className="text-center">
                                                        Finish Date
                                                    </th>
                                                    <th style={{ width: '8%' }} className="text-center">
                                                        Status
                                                    </th>
                                                    <th style={{ width: '20%' }}>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ProjectsInfo.map((ProjectInfo, i) => (
                                                    <Fragment>
                                                        <tr>
                                                            <td>
                                                                #
                                                            </td>
                                                            <td style={{ width: '8%' }}>
                                                                <a>
                                                                    {ProjectInfo.name}
                                                                </a>
                                                                <br />

                                                            </td>

                                                            <td style={{ width: '8%' }} className="Type">
                                                                <a>
                                                                    {ProjectInfo.type}
                                                                </a>
                                                            </td>
                                                            <td style={{ width: '8%' }} className="Used Solutions">
                                                                <a>
                                                                    {ProjectInfo.usedsolutions}
                                                                </a>
                                                            </td>
                                                            <td style={{ width: '8%' }} className="Associated Servers">
                                                                <a>
                                                                    {ProjectInfo.associatedservers}
                                                                </a>
                                                            </td>
                                                            <td className="Associated Client text-center" style={{ width: '8%' }}>
                                                                <a>
                                                                    {ProjectInfo.associatedclient}
                                                                </a>
                                                            </td>
                                                            <td style={{ width: '8%' }} className="project_progress text-center">
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
                                                            <td style={{ width: '8%' }} className="Start Date">
                                                                <a>
                                                                    {ProjectInfo.startdate}
                                                                </a>

                                                            </td>
                                                            <td style={{ width: '8%' }} className="Finish Date">
                                                                <a>
                                                                    {ProjectInfo.finishdate}
                                                                </a>
                                                            </td>
                                                            <td style={{ width: '8%' }} className="project-state">
                                                                <span className="badge badge-info">{ProjectInfo.status}</span>
                                                            </td>
                                                            <td className="project-actions text-right">
                                                                <a className="btn btn-primary btn-sm mr-1"
                                                                    onClick={(event) => onProjectViewClick(event, ProjectInfo)}
                                                                >
                                                                    <i className="fas fa-folder">
                                                                    </i>
                                                                    View
                                                                </a>
                                                                <a className="btn btn-info btn-sm mr-1"
                                                                    onClick={(event) => onProjectEditClick(event, ProjectInfo)}>
                                                                    <i className="fas fa-pencil-alt">
                                                                    </i>
                                                                    Edit
                                                                </a>
                                                                <a
                                                                    className="btn btn-danger btn-sm mr-1"

                                                                    onClick={() => onProjectDeleteClick(ProjectInfo.id)}
                                                                >
                                                                    <i className="fas fa-trash">
                                                                    </i>
                                                                    Delete
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </Fragment>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>


            </div >
            {/* <Footer /> */}
        </div>





    )
}

export default Projects