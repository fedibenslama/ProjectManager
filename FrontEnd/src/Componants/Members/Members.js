/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

function Members({ MembersInfo, setMembersInfo, setEditMemberData, setEditMemberId }) {
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
            MemberTelephoneNumber: MemberInfo.membertelephonenumber,
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
        navigatee("/Members")
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
            <Menu />
            <Navbar />
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
                                    <li className="breadcrumb-item"><a >Home</a></li>
                                    <li className="breadcrumb-item active">Members</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    {/* Default box */}
                    <div className="card card-solid">
                        <div className="card-body pb-0">
                            <div className="dt-buttons btn-group flex-wrap">
                                <button type="button"
                                    className="btn btn-block btn-outline-dark mb-3 " //mr,ml,mt,mb
                                    onClick={onAddMemberClick}
                                    tabindex="0">Add a Member</button>
                            </div>
                            <div className="row">
                                {MembersInfo.map((MemberInfo, i) => (
                                    <Fragment>

                                        <div className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">

                                            <div className="card bg-light d-flex flex-fill">

                                                <div className="card-header text-muted border-bottom-0">
                                                    {MemberInfo.memberemail}

                                                </div>

                                                <div className="card-body pt-0">

                                                    <div className="row">
                                                        <div className="col-7">
                                                            <h2 className="lead"><b>{MemberInfo.membername}</b></h2>
                                                            <p className="text-muted text-sm"><b>Roles: </b> {MemberInfo.memberassociatedroles} </p>

                                                            <ul className="ml-4 mb-0 fa-ul text-muted">
                                                                <li className="small">
                                                                    <span className="fa-li">
                                                                        <i className="fas fa-lg fa-building" /></span> Address: {MemberInfo.memberaddress} </li>
                                                                <li className="small">
                                                                    <span className="fa-li">
                                                                        <i className="fas fa-lg fa-phone" />
                                                                    </span> Phone #: {MemberInfo.membertelephonenumber}</li>
                                                            </ul>
                                                        </div>
                                                        <div className="col-5 text-center">
                                                            <img src={MemberInfo.memberid} alt="user-avatar" className="img-circle img-fluid" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-footer">

                                                    <div className="btn-group">

                                                        <button onClick={(event) => onMemberViewClick(event, MemberInfo)}
                                                         className="btn btn-sm btn-primary">
                                                            <i className="fas fa-user" /> View Member
                                                        </button>
                                                        <button  onClick={(event) => onMemberEditClick(event, MemberInfo)} 
                                                        className="btn btn-sm btn-info ml-1">
                                                            <i className="fas fa-edit" /> Edit Member
                                                        </button>
                                                        <button onClick={() => onMemberDeleteClick(MemberInfo.id)} 
                                                        className="btn btn-sm btn-danger ml-1"
                                                        >
                                                            <i className="fas fa-trash" />
                                                        </button>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Fragment>

                                ))}

                            </div>
                        </div>


                    </div>

                </section>

            </div>
        </div>

    )

}

export default Members