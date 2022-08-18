/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

function Requirements({ RequirementsInfo, setRequirementsInfo, setEditRequirementData, setEditRequirementId }) {
    // eslint-disable-next-line no-unused-vars
    const [ViewRequirementId, setViewRequirementId] = useState(null)

    let navigatee = useNavigate()

    useEffect(() => {
        fetch('http://localhost:3001/requirements')
            .then(response => {
                return response.json();
            })
            .then(requirements => {

                setRequirementsInfo(requirements)
            })

    }, [setRequirementsInfo]) 

    //
    // let wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('http://localhost:3001/requirements')
    //         const data = await response.json();
    //         await wait(2000);
    //         setRequirementsInfo(data)
    //     }
    //     fetchData()
      

    // }, [setRequirementsInfo]) //


    const onAddRequirementClick = () => {
        navigatee('/addRequirement')
    }

    const onRequirementViewClick = (event, RequirementInfo) => {
        event.preventDefault();
        setViewRequirementId(RequirementInfo.id)
        navigatee(`/ViewRequirement/${RequirementInfo.id}`)

    }

    const onRequirementEditClick = (event, RequirementInfo) => {
        event.preventDefault();
        setEditRequirementId(RequirementInfo.id)
        navigatee("/EditRequirement")
        const RequirementValue = {
            RequirementTitle: RequirementInfo.requirementtitle,
            RequirementIdCode: RequirementInfo.requirementidcode,
            RequirementDescription: RequirementInfo.requirementdescription,
            RequirementStatus: RequirementInfo.requirementstatus,
            RequirementCreatedBy: RequirementInfo.requirementcreatedby,
            RequirementAssociatedProject: RequirementInfo.requirementassociatedproject,
            RequirementMainRequirement: RequirementInfo.requirementmainrequirement
        }

        setEditRequirementData(RequirementValue)
    }
    const onRequirementDeleteClick = (requirementId) => {

        const Newrequirements = [...RequirementsInfo]
        const index = RequirementsInfo.findIndex((RequirementInfo) => RequirementInfo.id === requirementId);
        Newrequirements.splice(index, 1);
        navigatee("/requirements")
        setRequirementsInfo(Newrequirements)

        fetch('http://localhost:3001/DeleteRequirement', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: requirementId

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
                                <h1>Requirements</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Requirements</li>
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
                                        <h3 className="card-title">List Of Requirements</h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                    <div className="dt-buttons btn-group flex-wrap">
                                            <button type="button"
                                            className="btn btn-block btn-outline-danger mb-3 " //mr,ml,mt,mb
                                            onClick={onAddRequirementClick}
                                            tabindex="0">Add a Requirement</button>
                                        </div>
                                        <table id="example2" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>ID Code</th>
                                                    {/* <th>Description</th> */}
                                                    <th>Status</th>
                                                    <th>Created By</th>
                                                    <th>Associated Project</th>
                                                    <th>Main Requirement</th>
                                                    <th></th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {RequirementsInfo.map((RequirementInfo, i) => (
                                                    <Fragment>
                                                        <tr>
                                                            <td>{RequirementInfo.requirementtitle}</td>
                                                            <td>{RequirementInfo.requirementidcode} </td>
                                                            {/* <td>{RequirementInfo.requirementdescription}</td> */}
                                                            <td>{RequirementInfo.requirementstatus}</td>
                                                            <td>{RequirementInfo.requirementcreatedby}</td>
                                                            <td>{RequirementInfo.requirementassociatedproject}</td>
                                                            <td>{RequirementInfo.requirementmainrequirement}</td>
                                                            <td className="project-actions text-right " >
                                                                <button className="btn btn-primary btn-sm mr-1"
                                                                    onClick={(event) => onRequirementViewClick(event, RequirementInfo)}
                                                                >
                                                                    <i className="fas fa-folder">
                                                                    </i>
                                                                    View
                                                                </button>
                                                                <button className="btn btn-info btn-sm mr-1"
                                                                    onClick={(event) => onRequirementEditClick(event, RequirementInfo)}
                                                                >
                                                                    <i className="fas fa-pencil-alt">
                                                                    </i>
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    className="btn btn-danger btn-sm mr-1"

                                                                    onClick={() => onRequirementDeleteClick(RequirementInfo.id)}
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
                                            {/* <tfoot>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>ID</th>
                                                    <th>Description</th>
                                                    <th>Status</th>
                                                    <th>Created By</th>
                                                    <th>Associated Project</th>
                                                    <th>Main Requirement</th>
                                                    <th></th>
                                                </tr>
                                            </tfoot> */}
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

export default Requirements