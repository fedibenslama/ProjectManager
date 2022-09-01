import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";


function MemberEdit({ MembersInfo, setMembersInfo, EditMemberData, setEditMemberData, EditMemberId, setEditMemberId }) {

    //----------------------Member Edit---------------------------------

    let navigate = useNavigate()

    const onCancelClick = () => {
        navigate('/Members')
    }

    const onMemberEditChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const NewMemberData = { ...EditMemberData };
        NewMemberData[fieldName] = fieldValue;

        setEditMemberData(NewMemberData)
    }
    const onMemberEditSubmit = (event) => {
        event.preventDefault();

        const editedMember = {
            id: EditMemberId,
            MemberName: EditMemberData.MemberName,
            MemberId: EditMemberData.MemberId,
            MemberTelephoneNumber: EditMemberData.MemberTelephoneNumber,
            MemberEmail: EditMemberData.MemberEmail,
            MemberAddress: EditMemberData.MemberAddress,
            MemberAssociatedRoles: EditMemberData.MemberAssociatedRoles,
        }
        const NewMembers = [...MembersInfo]
        const index = MembersInfo.findIndex((MemberInfo) => MemberInfo.id === EditMemberId);
        NewMembers[index] = editedMember;
        setMembersInfo(NewMembers)
        setEditMemberId(null)

        fetch('http://localhost:3001/EditMember', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: EditMemberId,
                MemberName: EditMemberData.MemberName,
                MemberId: EditMemberData.MemberId,
                MemberTelephoneNumber: EditMemberData.MemberTelephoneNumber,
                MemberEmail: EditMemberData.MemberEmail,
                MemberAddress: EditMemberData.MemberAddress,
                MemberAssociatedRoles: EditMemberData.MemberAssociatedRoles,

            })
        })
            .then(response => response.json())

    }

    /////////////////////////////////////////

    const onMemberEditSubmitAndClose = (event) => {
        event.preventDefault();
        const editedMember = {
            id: EditMemberId,
            MemberName: EditMemberData.MemberName,
            MemberId: EditMemberData.MemberId,
            MemberTelephoneNumber: EditMemberData.MemberTelephoneNumber,
            MemberEmail: EditMemberData.MemberEmail,
            MemberAddress: EditMemberData.MemberAddress,
            MemberAssociatedRoles: EditMemberData.MemberAssociatedRoles,
        }
        const NewMembers = [...MembersInfo]
        const index = MembersInfo.findIndex((MemberInfo) => MemberInfo.id === EditMemberId);
        NewMembers[index] = editedMember;
        setMembersInfo(NewMembers)
        setEditMemberId(null)

        fetch('http://localhost:3001/EditMember', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: EditMemberId,
                MemberName: EditMemberData.MemberName,
                MemberId: EditMemberData.MemberId,
                MemberTelephoneNumber: EditMemberData.MemberTelephoneNumber,
                MemberEmail: EditMemberData.MemberEmail,
                MemberAddress: EditMemberData.MemberAddress,
                MemberAssociatedRoles: EditMemberData.MemberAssociatedRoles,

            })
        })
            .then(response => response.json())
            .then(edit => {
                navigate('/Members')
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
                                <h1>Member Edit</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/Members">Home</a></li>
                                    <li className="breadcrumb-item active">Member Edit</li>
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
                                        <label htmlFor="MemberName">Name</label>
                                        <input
                                            type="text"
                                            id="MemberName"
                                            name="MemberName"
                                            className="form-control"
                                            onChange={onMemberEditChange}
                                            value={EditMemberData.MemberName}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="MemberId">ID</label>
                                        <input
                                            type="text"
                                            id="MemberId"
                                            className="form-control"
                                            name="MemberId"
                                            onChange={onMemberEditChange}
                                            value={EditMemberData.MemberId} />
                                    </div>
                                  
                                    <div className="form-group">
                                        <label htmlFor="MemberTelephoneNumber">Telephone Number</label>
                                        <input
                                            type="text"
                                            id="MemberTelephoneNumber"
                                            className="form-control"
                                            name="MemberTelephoneNumber"
                                            onChange={onMemberEditChange}
                                            value={EditMemberData.MemberTelephoneNumber} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="MemberEmail">Email</label>
                                        <input type="text"
                                            id="MemberEmail"
                                            className="form-control"
                                            name="MemberEmail"
                                            onChange={onMemberEditChange}
                                            value={EditMemberData.MemberEmail} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="MemberAddress">Address</label>
                                        <input type="text"
                                            id="MemberAddress"
                                            className="form-control"
                                            name="MemberAddress"
                                            onChange={onMemberEditChange}
                                            value={EditMemberData.MemberAddress} />
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
                                        <label htmlFor="MemberAssociatedRoles">Associated Roles</label>

                                        <select
                                            id="MemberAssociatedRoles"
                                            className="form-control custom-select"
                                            name="MemberAssociatedRoles"
                                            onChange={onMemberEditChange} >

                                            <option selected disabled> {EditMemberData.MemberAssociatedRoles} </option>
                                            <option>Admin</option>
                                            <option>Project Manager</option>
                                            <option>Team Member</option>
                                            <option>Tester</option>
                                            <option>Customer Relationship Manager</option>


                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="MemberAccumulatedExp">Accumulated Experience</label>
                                        <input type="text"
                                            id="MemberAccumulatedExp"
                                            className="form-control"
                                            name="MemberAccumulatedExp"
                                            onChange={onMemberEditChange}
                                            value={EditMemberData.MemberAccumulatedExp} />
                                    </div>
                                    
                                    <button type="submit"
                                        defaultValue="Create new Member"
                                        className="btn btn-info "
                                        onClick={onMemberEditSubmit} >
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
                                defaultValue="Create new Member"
                                className="btn btn-success float-right"
                                onClick={onMemberEditSubmitAndClose} >
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

export default MemberEdit