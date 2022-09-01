/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

function MembersList({ MembersInfo, setMembersInfo, setEditMemberData, setEditMemberId }) {
    // eslint-disable-next-line no-unused-vars
    const [ViewMemberId, setViewMemberId] = useState(null)

    let navigatee = useNavigate()

    useEffect(() => {
        fetch('http://localhost:3001/Members')
            .then(response => {
                return response.json();
            })
            .then(Members => {

                setMembersInfo(Members)
            })

    }, [setMembersInfo])



    const onAddMemberClick = () => {
        navigatee('/addMember')
    }

    const onMemberViewClick = (event, MemberInfo) => {
        event.preventDefault();
        setViewMemberId(MemberInfo.id)
        navigatee(`/ViewMember/${MemberInfo.id}`)

    }

    const onMemberEditClick = (event, MemberInfo) => {
        event.preventDefault();
        setEditMemberId(MemberInfo.id)
        navigatee("/EditMember")
        const MemberValue = {
            MemberName: MemberInfo.membername,
            MemberId: MemberInfo.memberid,
            MemberTelephoneNumber: MemberInfo.Membertelephonenumber,
            MemberEmail: MemberInfo.memberemail,
            MemberAddress: MemberInfo.memberaddress,
            MemberAssociatedRoles: MemberInfo.memberassociatedroles,
            MemberAccumulatedExp: MemberInfo.memberaccumulatedexp
        }

        setEditMemberData(MemberValue)
    }
    const onMemberDeleteClick = (MemberId) => {

        const NewMembers = [...MembersInfo]
        const index = MembersInfo.findIndex((MemberInfo) => MemberInfo.id === MemberId);
        NewMembers.splice(index, 1);
        navigatee("/MembersList")
        setMembersInfo(NewMembers)

        fetch('http://localhost:3001/DeleteMember', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: MemberId

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
                                <h1>Members</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Members</li>
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
                                        <h3 className="card-title">List Of Members</h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <div className="dt-buttons btn-group flex-wrap">
                                            <button type="button"
                                                className="btn btn-block btn-outline-dark mb-3 " //mr,ml,mt,mb
                                                onClick={onAddMemberClick}
                                                tabindex="0">Add a Member</button>
                                        </div>
                                        <table id="example2" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>ID</th>
                                                    <th>Telephone Number</th>
                                                    <th>Email</th>
                                                    <th>Address</th>
                                                    <th>Associated Roles</th>
                                                    <th>Accumulated Experience</th>
                                                    <th></th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {MembersInfo.map((MemberInfo, i) => (
                                                    <Fragment>
                                                        <tr>
                                                            <td>{MemberInfo.membername}</td>
                                                            <td>{MemberInfo.memberid} </td>
                                                            <td>{MemberInfo.membertelephonenumber}</td>
                                                            <td>{MemberInfo.memberemail}</td>
                                                            <td>{MemberInfo.memberaddress}</td>
                                                            <td>{MemberInfo.memberassociatedroles}</td>
                                                            <td>{MemberInfo.memberaccumulatedexp}</td>
                                                            <td className="project-state">
                                                                <span className="badge badge-dark">{MemberInfo.funcstatus}</span>
                                                            </td>
                                                            <td className="project-actions text-right btn-group" >
                                                                <button className="btn btn-primary btn-sm mr-1"
                                                                    onClick={(event) => onMemberViewClick(event, MemberInfo)}
                                                                >
                                                                    <i className="fas fa-folder">
                                                                    </i>
                                                                    View
                                                                </button>
                                                                <button className="btn btn-info btn-sm mr-1"
                                                                    onClick={(event) => onMemberEditClick(event, MemberInfo)}
                                                                >
                                                                    <i className="fas fa-pencil-alt">
                                                                    </i>
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    className="btn btn-danger btn-sm mr-1"

                                                                    onClick={() => onMemberDeleteClick(MemberInfo.id)}
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

export default MembersList