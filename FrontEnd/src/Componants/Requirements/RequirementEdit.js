import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";


function RequirementEdit({ RequirementsInfo, setRequirementsInfo, EditRequirementData, setEditRequirementData, EditRequirementId, setEditRequirementId }) {

    //----------------------Requirement Edit---------------------------------

    let navigate = useNavigate()

    const onCancelClick = () => {
        navigate('/requirements')
    }

    const onRequirementEditChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const NewRequirementData = { ...EditRequirementData };
        NewRequirementData[fieldName] = fieldValue;

        setEditRequirementData(NewRequirementData)
    }
    const onRequirementEditSubmit = (event) => {
        event.preventDefault();

        const editedRequirement = {
            id: EditRequirementId,
            RequirementTitle: EditRequirementData.RequirementTitle,
            RequirementIdCode: EditRequirementData.RequirementIdCode,
            RequirementDescription: EditRequirementData.RequirementDescription,
            RequirementStatus: EditRequirementData.RequirementStatus,
            RequirementCreatedBy: EditRequirementData.RequirementCreatedBy,
            RequirementAssociatedRequirement: EditRequirementData.RequirementAssociatedRequirement,
            RequirementMainRequirement: EditRequirementData.RequirementMainRequirement
        }
        const NewRequirements = [...RequirementsInfo]
        const index = RequirementsInfo.findIndex((RequirementInfo) => RequirementInfo.id === EditRequirementId);
        NewRequirements[index] = editedRequirement;
        setRequirementsInfo(NewRequirements)
        setEditRequirementId(null)

        fetch('http://localhost:3001/EditRequirement', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: EditRequirementId,
                RequirementTitle: EditRequirementData.RequirementTitle,
                RequirementIdCode: EditRequirementData.RequirementIdCode,
                RequirementDescription: EditRequirementData.RequirementDescription,
                RequirementStatus: EditRequirementData.RequirementStatus,
                RequirementCreatedBy: EditRequirementData.RequirementCreatedBy,
                RequirementAssociatedRequirement: EditRequirementData.RequirementAssociatedRequirement,
                RequirementMainRequirement: EditRequirementData.RequirementMainRequirement

            })
        })
            .then(response => response.json())

    }

    /////////////////////////////////////////

    const onRequirementEditSubmitAndClose = (event) => {
        event.preventDefault();
        const editedRequirement = {
            id: EditRequirementId,
            RequirementTitle: EditRequirementData.RequirementTitle,
            RequirementIdCode: EditRequirementData.RequirementIdCode,
            RequirementDescription: EditRequirementData.RequirementDescription,
            RequirementStatus: EditRequirementData.RequirementStatus,
            RequirementCreatedBy: EditRequirementData.RequirementCreatedBy,
            RequirementAssociatedRequirement: EditRequirementData.RequirementAssociatedRequirement,
            RequirementMainRequirement: EditRequirementData.RequirementMainRequirement
        }
        const NewRequirements = [...RequirementsInfo]
        const index = RequirementsInfo.findIndex((RequirementInfo) => RequirementInfo.id === EditRequirementId);
        NewRequirements[index] = editedRequirement;
        setRequirementsInfo(NewRequirements)
        setEditRequirementId(null)

        fetch('http://localhost:3001/EditRequirement', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: EditRequirementId,
                RequirementTitle: EditRequirementData.RequirementTitle,
                RequirementIdCode: EditRequirementData.RequirementIdCode,
                RequirementDescription: EditRequirementData.RequirementDescription,
                RequirementStatus: EditRequirementData.RequirementStatus,
                RequirementCreatedBy: EditRequirementData.RequirementCreatedBy,
                RequirementAssociatedRequirement: EditRequirementData.RequirementAssociatedRequirement,
                RequirementMainRequirement: EditRequirementData.RequirementMainRequirement

            })
        })
            .then(response => response.json())
            .then(edit => {
                navigate('/requirements')
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
                                <h1>Requirement Edit</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/requirements">Home</a></li>
                                    <li className="breadcrumb-item active">Requirement Edit</li>
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
                                        <label htmlFor="RequirementTitle">Title</label>
                                        <input
                                            type="text"
                                            id="RequirementTitle"
                                            name="RequirementTitle"
                                            className="form-control"
                                            onChange={onRequirementEditChange}
                                            value={EditRequirementData.RequirementTitle}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="RequirementIdCode">ID Code</label>
                                        <input
                                            type="text"
                                            id="RequirementIdCode"
                                            className="form-control"
                                            name="RequirementIdCode"
                                            onChange={onRequirementEditChange}
                                            value={EditRequirementData.RequirementIdCode} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="RequirementDescription">Description</label>
                                        <textarea id="RequirementDescription"
                                            className="form-control"
                                            rows={4}
                                            name="RequirementDescription"
                                            onChange={onRequirementEditChange}
                                            value={EditRequirementData.RequirementDescription} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="RequirementStatus">Status</label>
                                        <select
                                            id="RequirementStatus"
                                            className="form-control custom-select"
                                            onChange={onRequirementEditChange}
                                            name="RequirementStatus"
                                            >
                                            
                                            <option selected disabled>{EditRequirementData.RequirementStatus}</option>
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
                        <div className="col-md-6">
                            <div className="card card-secondary">
                                <div className="card-header">
                                    <h3 className="card-title">Properties</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                            <i className="fas fa-minus" />
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="RequirementCreatedBy">Created By</label>
                                        <input
                                            type="text"
                                            id="RequirementCreatedBy"
                                            className="form-control"
                                            name="RequirementCreatedBy"
                                            onChange={onRequirementEditChange}
                                            value={EditRequirementData.RequirementCreatedBy} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="RequirementAssociatedProject">Associated Project</label>
                                        <input
                                            type="text"
                                            id="RequirementAssociatedProject"
                                            className="form-control"
                                            name="RequirementAssociatedProject"
                                            onChange={onRequirementEditChange}
                                            value={EditRequirementData.RequirementAssociatedProject} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="RequirementMainRequirement">Main Requirement</label>
                                        <input type="text"
                                            id="RequirementMainRequirement"
                                            className="form-control"
                                            name="RequirementMainRequirement"
                                            onChange={onRequirementEditChange}
                                            value={EditRequirementData.RequirementMainRequirement} />
                                    </div>
                                    <button type="submit"
                                        defaultValue="Create new Requirement"
                                        className="btn btn-info "
                                        onClick={onRequirementEditSubmit} >
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
                                defaultValue="Create new Requirement"
                                className="btn btn-success float-right"
                                onClick={onRequirementEditSubmitAndClose} >
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

export default RequirementEdit