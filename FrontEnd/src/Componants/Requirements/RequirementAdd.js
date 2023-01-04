import React from "react";
import { useState } from "react";
import { nanoid } from 'nanoid';
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";

function RequirementAdd({ setRequirementsInfo, RequirementsInfo }) {

    let navigate = useNavigate()

    const [AddRequirementData, setAddRequirementData] = useState({
        RequirementTitle: '',
        RequirementIdCode: '',
        RequirementDescription: '',
        RequirementStatus: '',
        RequirementCreatedBy: '',
        RequirementAssociatedRequirement: '',
        RequirementMainRequirement: ''
    })
    const onCancelClick = () => {
        navigate("/requirements")
    }
    const onRequirementAddChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const NewRequirementData = { ...AddRequirementData }

        NewRequirementData[fieldName] = fieldValue;
        setAddRequirementData(NewRequirementData);

    }
    const onRequirementAddSubmit = (event) => {
        event.preventDefault();
        const newRequirement = {
            id: nanoid(),
            RequirementTitle: AddRequirementData.RequirementTitle,
            RequirementIdCode: AddRequirementData.RequirementIdCode,
            RequirementDescription: AddRequirementData.RequirementDescription,
            RequirementStatus: AddRequirementData.RequirementStatus,
            RequirementCreatedBy: AddRequirementData.RequirementCreatedBy,
            RequirementAssociatedRequirement: AddRequirementData.RequirementAssociatedRequirement,
            RequirementMainRequirement: AddRequirementData.RequirementMainRequirement

        };
        const NewRequirements = [...RequirementsInfo, newRequirement];
        setRequirementsInfo(NewRequirements)


        fetch('http://localhost:3001/addRequirement', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                RequirementTitle: AddRequirementData.RequirementTitle,
                RequirementIdCode: AddRequirementData.RequirementIdCode,
                RequirementDescription: AddRequirementData.RequirementDescription,
                RequirementStatus: AddRequirementData.RequirementStatus,
                RequirementCreatedBy: AddRequirementData.RequirementCreatedBy,
                RequirementAssociatedProject: AddRequirementData.RequirementAssociatedProject,
                RequirementMainRequirement: AddRequirementData.RequirementMainRequirement

            })
        })
            .then(response => response.json())
        navigate("/requirements")

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
                                <h1>Requirement Add</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li className="breadcrumb-item active">Requirement Add</li>
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
                                            onChange={onRequirementAddChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="RequirementIdCode">ID Code</label>
                                        <input
                                            type="text"
                                            id="RequirementIdCode"
                                            className="form-control"
                                            name="RequirementIdCode"
                                            onChange={onRequirementAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="RequirementDescription">Requirement Description</label>
                                        <textarea id="RequirementDescription"
                                            className="form-control"
                                            rows={4}
                                            defaultValue={""}
                                            name="RequirementDescription"
                                            onChange={onRequirementAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="RequirementStatus">Status</label>
                                        <select
                                            id="RequirementStatus"
                                            className="form-control custom-select"
                                            onChange={onRequirementAddChange}
                                            name="RequirementStatus">
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
                                            onChange={onRequirementAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="RequirementAssociatedProject">Associated Project</label>
                                        <input type="text"
                                            id="RequirementAssociatedProject"
                                            className="form-control"
                                            name="RequirementAssociatedProject"
                                            onChange={onRequirementAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="RequirementMainRequirement">Main Requirement</label>
                                        <input type="text"
                                            id="RequirementMainRequirement"
                                            className="form-control"
                                            name="RequirementMainRequirement"
                                            onChange={onRequirementAddChange} />
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
                                className="btn btn-success float-right mr-3"
                                onClick={onRequirementAddSubmit} > Add New Requirement </button>
                        </div>
                    </div>
                </section>
                {/* /.content */}
            </div>

        </div>

    )
}

export default RequirementAdd