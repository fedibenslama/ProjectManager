/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

function Functionalities({ FunctionalitiesInfo, setFunctionalitiesInfo, setEditFunctionalityData, setEditFunctionalityId }) {
    // eslint-disable-next-line no-unused-vars
    const [ViewFunctionalityId, setViewFunctionalityId] = useState(null)

    let navigatee = useNavigate()

    useEffect(() => {
        fetch('http://localhost:3001/functionalities')
            .then(response => {
                return response.json();
            })
            .then(functionalities => {

                setFunctionalitiesInfo(functionalities)
            })

    }, [setFunctionalitiesInfo])

    //
    // let wait = ms => new Promise(resolve => setTimeout(resolve, ms));
    // useEffect(() => {
    //     const fetchData = async () => {
    //         const response = await fetch('http://localhost:3001/functionalities')
    //         const data = await response.json();
    //         await wait(2000);
    //         setFunctionalitiesInfo(data)
    //     }
    //     fetchData()


    // }, [setFunctionalitiesInfo]) //


    const onAddFunctionalityClick = () => {
        navigatee('/addFunctionality')
    }

    const onFunctionalityViewClick = (event, FunctionalityInfo) => {
        event.preventDefault();
        setViewFunctionalityId(FunctionalityInfo.id)
        navigatee(`/ViewFunctionality/${FunctionalityInfo.id}`)

    }

    const onFunctionalityEditClick = (event, FunctionalityInfo) => {
        event.preventDefault();
        setEditFunctionalityId(FunctionalityInfo.id)
        navigatee("/EditFunctionality")
        const FunctionalityValue = {
            FuncTitle: FunctionalityInfo.functitle,
            FuncIdCode: FunctionalityInfo.funcidcode,
            FuncDescription: FunctionalityInfo.funcdescription,
            FuncStatus: FunctionalityInfo.funcstatus,
            FuncAssociatedReq: FunctionalityInfo.funcassociatedreq,
            FuncAssociatedTasks: FunctionalityInfo.funcassociatedtasks,
            FuncAssociatedMemb: FunctionalityInfo.funcassociatedmemb,
            FuncStartDate: FunctionalityInfo.funcstartdate,
            FuncFinishDate: FunctionalityInfo.funcfinishdate,
            FuncDuration: FunctionalityInfo.funcduration,
        }

        setEditFunctionalityData(FunctionalityValue)
    }
    const onFunctionalityDeleteClick = (FunctionalityId) => {

        const Newfunctionalities = [...FunctionalitiesInfo]
        const index = FunctionalitiesInfo.findIndex((FunctionalityInfo) => FunctionalityInfo.id === FunctionalityId);
        Newfunctionalities.splice(index, 1);
        navigatee("/functionalities")
        setFunctionalitiesInfo(Newfunctionalities)

        fetch('http://localhost:3001/DeleteFunctionality', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: FunctionalityId

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
                                <h1>Functionalities</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Functionalities</li>
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
                                        <h3 className="card-title">List Of Functionalities</h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <div className="dt-buttons btn-group flex-wrap">
                                            <button type="button"
                                                className="btn btn-block btn-outline-dark mb-3 " //mr,ml,mt,mb
                                                onClick={onAddFunctionalityClick}
                                                tabindex="0">Add a Functionality</button>
                                        </div>
                                        <table id="example2" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Title</th>
                                                    <th>ID Code</th>
                                                    {/* <th>Description</th> */}
                                                    <th>Associated Requirements</th>
                                                    <th>Associated Tasks</th>
                                                    <th>Associated Members</th>
                                                    <th>Start Date</th>
                                                    <th>Finish Date</th>
                                                    <th>Duration</th>
                                                    <th>Status</th>
                                                    <th></th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {FunctionalitiesInfo.map((FunctionalityInfo, i) => (
                                                    <Fragment>
                                                        <tr>
                                                            <td>{FunctionalityInfo.functitle}</td>
                                                            <td>{FunctionalityInfo.funcidcode} </td>
                                                            {/* <td>{FunctionalityInfo.funcdescription}</td> */}
                                                            {/* <td>{FunctionalityInfo.funcstatus}</td> */}
                                                            <td>{FunctionalityInfo.funcassociatedreq}</td>
                                                            <td>{FunctionalityInfo.funcassociatedtasks}</td>
                                                            <td>{FunctionalityInfo.funcassociatedmemb}</td>
                                                            <td>{FunctionalityInfo.funcstartdate}</td>
                                                            <td>{FunctionalityInfo.funcfinishdate}</td>
                                                            <td>{FunctionalityInfo.funcduration}</td>
                                                            <td className="project-state">
                                                                <span className="badge badge-dark">{FunctionalityInfo.funcstatus}</span>
                                                            </td>
                                                            <td className="project-actions text-right btn-group" >
                                                                <button className="btn btn-primary btn-sm mr-1"
                                                                    onClick={(event) => onFunctionalityViewClick(event, FunctionalityInfo)}
                                                                >
                                                                    <i className="fas fa-folder">
                                                                    </i>
                                                                    View
                                                                </button>
                                                                <button className="btn btn-info btn-sm mr-1"
                                                                    onClick={(event) => onFunctionalityEditClick(event, FunctionalityInfo)}
                                                                >
                                                                    <i className="fas fa-pencil-alt">
                                                                    </i>
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    className="btn btn-danger btn-sm mr-1"

                                                                    onClick={() => onFunctionalityDeleteClick(FunctionalityInfo.id)}
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
                                                    <th>Main Functionality</th>
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

export default Functionalities