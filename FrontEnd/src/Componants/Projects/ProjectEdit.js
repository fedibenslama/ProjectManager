import React from "react";
import { useNavigate } from "react-router-dom";


function ProjectEdit({ProjectsInfo,setProjectsInfo,EditProjectData,setEditProjectData,EditProjectId,setEditProjectId}) {
 
    //----------------------Project Edit---------------------------------
   
    let navigate = useNavigate()

    const onCancelClick =() =>{
        navigate('/projects')
    }

    const onProjectEditChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const NewProjectData = { ...EditProjectData };
        NewProjectData[fieldName] = fieldValue;

        setEditProjectData(NewProjectData)
    }
    const onProjectEditSubmit = (event) => {
        event.preventDefault();
        const editedProject = {
            id: EditProjectId,
            Name: EditProjectData.Name,
            Type: EditProjectData.Type,
            UsedSolutions: EditProjectData.UsedSolutions,
            AssociatedServers: EditProjectData.AssociatedServers,
            AssociatedClient: EditProjectData.AssociatedClient,
            Status: EditProjectData.Status,
            ProjectProgress: EditProjectData.ProjectProgress,
            StartDate: EditProjectData.StartDate,
            FinishDate: EditProjectData.FinishDate,
            ProjectDescription: EditProjectData.ProjectDescription
        }
        const NewProjects = [...ProjectsInfo]
        const index = ProjectsInfo.findIndex((ProjectInfo) => ProjectInfo.id === EditProjectId);
        NewProjects[index] = editedProject;
        setProjectsInfo(NewProjects)
        setEditProjectId(null)

        fetch('http://localhost:3001/EditProject', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: EditProjectId,
                Name: EditProjectData.Name,
                Type: EditProjectData.Type,
                UsedSolutions: EditProjectData.UsedSolutions,
                AssociatedServers: EditProjectData.AssociatedServers,
                AssociatedClient: EditProjectData.AssociatedClient,
                Status: EditProjectData.Status,
                ProjectProgress: EditProjectData.ProjectProgress,
                StartDate: EditProjectData.StartDate,
                FinishDate: EditProjectData.FinishDate,
                ProjectDescription: EditProjectData.ProjectDescription

            })
        })
            .then(response => response.json())

    }

    return (

        <div>
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Project Edit</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li className="breadcrumb-item active">Project Edit</li>
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
                                        <label htmlFor="inputName">Project Name</label>
                                        <input
                                            type="text"
                                            id="Name"
                                            name="Name"
                                            className="form-control"
                                            onChange={onProjectEditChange}
                                            value={EditProjectData.Name}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="Type">Type</label>
                                        <input
                                            type="text"
                                            id="Type"
                                            className="form-control"
                                            name="Type"
                                            onChange={onProjectEditChange}
                                            value={EditProjectData.Type} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ProjectDescription">Project Description</label>
                                        <textarea id="ProjectDescription"
                                            className="form-control"
                                            rows={4}
                                            defaultValue={""}
                                            name="ProjectDescription"
                                            onChange={onProjectEditChange}
                                            value={EditProjectData.ProjectDescription} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputStatus">Status</label>
                                        <select
                                            id="Status"
                                            className="form-control custom-select"
                                            onChange={onProjectEditChange}
                                            name="Status"
                                            value={EditProjectData.Status}>
                                                
                                            <option selected disabled>Select one</option>
                                            <option>On Hold</option>
                                            <option>Canceled</option>
                                            <option>Success</option>

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="AssociatedClient">Associated Client</label>
                                        <input
                                            type="text"
                                            id="AssociatedClient"
                                            className="form-control"
                                            name="AssociatedClient"
                                            onChange={onProjectEditChange}
                                            value={EditProjectData.AssociatedClient} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="AssociatedServers">Associated Servers</label>
                                        <input type="text"
                                            id="AssociatedServers"
                                            className="form-control"
                                            name="AssociatedServers"
                                            onChange={onProjectEditChange}
                                            value={EditProjectData.AssociatedServers} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="UsedSolutions">Used Solutions</label>
                                        <input type="text"
                                            id="UsedSolutions"
                                            className="form-control"
                                            name="UsedSolutions"
                                            onChange={onProjectEditChange}
                                            value={EditProjectData.UsedSolutions} />
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
                                        <label htmlFor="ProjectProgress">Project Progress</label>
                                        <input type="number" min={0} max={100}
                                            id="ProjectProgress"
                                            className="form-control"
                                            name="ProjectProgress"
                                            onChange={onProjectEditChange}
                                            value={EditProjectData.ProjectProgress} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="StartDate">Start Date</label>
                                        <input type="date"
                                            id="StartDate"
                                            className="form-control"
                                            name="StartDate"
                                            onChange={onProjectEditChange}
                                            value={EditProjectData.StartDate} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="FinishDate">Finish Date</label>
                                        <input type="date"
                                            id="FinishDate"
                                            className="form-control"
                                            name="FinishDate"
                                            onChange={onProjectEditChange}
                                            value={EditProjectData.FinishDate} />
                                    </div>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-secondary" onClick={onCancelClick}>Cancel</button>
                            <input type="submit"
                                defaultValue="Create new Project"
                                className="btn btn-success float-right"
                                onClick={onProjectEditSubmit} />
                        </div>
                    </div>
                </section>
                {/* /.content */}
            </div>

        </div>


    )
}

export default ProjectEdit