import React from "react";
import { useState } from "react";
import { nanoid } from 'nanoid';
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";

function MemberAdd({ setMembersInfo, MembersInfo }) {

    let navigate = useNavigate()

    const [AddMemberData, setAddMemberData] = useState({
        MemberName: '',
        MemberId: '',
        MemberTelephoneNumber: '',
        MemberEmail: '',
        MemberAddress: '',
        MemberAssociatedRoles: '',
        MemberAccumulatedExp: ''
    })
    const onCancelClick = () => {
        navigate("/")
    }
    const onMemberAddChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const NewMemberData = { ...AddMemberData }

        NewMemberData[fieldName] = fieldValue;
        setAddMemberData(NewMemberData);

    }
    const onMemberAddSubmit = (event) => {
        event.preventDefault();
        navigate("/Members")
        const newMember = {
            id: nanoid(),
            MemberName: AddMemberData.MemberName,
            MemberId: AddMemberData.MemberId,
            MemberTelephoneNumber: AddMemberData.MemberTelephoneNumber,
            MemberEmail: AddMemberData.MemberEmail,
            MemberAddress: AddMemberData.MemberAddress,
            MemberAssociatedRoles: AddMemberData.MemberAssociatedRoles,
            MemberAccumulatedExp: AddMemberData.MemberAccumulatedExp
        };
        const NewMembers = [...MembersInfo, newMember];
        setMembersInfo(NewMembers)


        fetch('http://localhost:3001/addMember', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                MemberName: AddMemberData.MemberName,
                MemberId: AddMemberData.MemberId,
                MemberTelephoneNumber: AddMemberData.MemberTelephoneNumber,
                MemberEmail: AddMemberData.MemberEmail,
                MemberAddress: AddMemberData.MemberAddress,
                MemberAssociatedRoles: AddMemberData.MemberAssociatedRoles,
                MemberAccumulatedExp: AddMemberData.MemberAccumulatedExp

            })
        })
            .then(response => response.json())

    }
    /////////////////////REGISTER////////////////////////////
    const [AddUserData, setAddUserData] = useState({
        Name: '',
        Email: '',
        Password: '',
        Role: ''
    })

    const onAddUserChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const NewAddUserData = { ...AddUserData }
        NewAddUserData[fieldName] = fieldValue;
        setAddUserData(NewAddUserData);
    }
    const onAddUserSubmit = (event) => {
        event.preventDefault()   //to prevent data from showing in query
        fetch('http://localhost:3001/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: AddUserData.Email,
                password: AddUserData.Password,
                name: AddUserData.Name,
                role: AddUserData.Role
            })
        })
            .then(response => response.json())
            .catch(console.log)

    }
    //////////////////////////////////////////////////////
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
                                <h1>Member Add</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li className="breadcrumb-item active">Add Member</li>
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
                                    <h3 className="card-title">Add Member To Members List</h3>
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
                                            onChange={onMemberAddChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="MemberId">ID</label>
                                        <input id="MemberId"
                                            className="form-control"
                                            rows={4}
                                            defaultValue={""}
                                            name="MemberId"
                                            onChange={onMemberAddChange} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="MemberEmail">Email</label>
                                        <input
                                            type="email"
                                            id="MemberEmail"
                                            className="form-control"
                                            name="MemberEmail"
                                            onChange={onMemberAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="MemberTelephoneNumber">Telephone Number</label>
                                        <input
                                            type="tel"
                                            id="MemberTelephoneNumber"
                                            className="form-control"
                                            name="MemberTelephoneNumber"
                                            onChange={onMemberAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="MemberAddress">Address</label>
                                        <input
                                            type="text"
                                            id="MemberAddress"
                                            className="form-control"
                                            name="MemberAddress"
                                            onChange={onMemberAddChange} />
                                    </div>
                                    {/* <div className="form-group">
                                        <label htmlFor="MemberAssociatedRoles">Associated Roles</label>
                                        <input
                                            type="text"
                                            id="MemberAssociatedRoles"
                                            className="form-control"
                                            name="MemberAssociatedRoles"
                                            onChange={onMemberAddChange} />
                                    </div> */}
                                    <div className="form-group">
                                        <label htmlFor="MemberAssociatedRoles">Associated Roles</label>

                                        <select
                                            id="MemberAssociatedRoles"
                                            className="form-control custom-select"
                                            name="MemberAssociatedRoles"
                                            onChange={onMemberAddChange} >

                                            <option selected disabled> Select One </option>
                                            <option>Admin</option>
                                            <option>Project Manager</option>
                                            <option>Team Member</option>
                                            <option>Tester</option>
                                            <option>Customer Relationship Manager</option>


                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="MemberAccumulatedExp">Accumulated Experience</label>
                                        <input
                                            type="type"
                                            id="MemberAccumulatedExp"
                                            className="form-control"
                                            name="MemberAccumulatedExp"
                                            onChange={onMemberAddChange} />
                                    </div>


                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                        <div className="col-md-6">
                            <div className="card card-secondary">
                                <div className="card-header">
                                    <h3 className="card-title">Register a New Member</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                            <i className="fas fa-minus" />
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="input-group mb-3">
                                        <input type="text"
                                            className="form-control"
                                            placeholder="Registration Name"
                                            name="Name"
                                            onChange={onAddUserChange} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-user" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="email"
                                            className="form-control"
                                            placeholder="Registration Email"
                                            name="Email"
                                            onChange={onAddUserChange} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-envelope" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="input-group mb-3">
                                        <input type="password"
                                            className="form-control"
                                            placeholder="Registration Password"
                                            name="Password"
                                            onChange={onAddUserChange} />
                                        <div className="input-group-append">
                                            <div className="input-group-text">
                                                <span className="fas fa-lock" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="inputStatus">Main Role</label>
                                        <select
                                            id="Role"
                                            className="form-control custom-select"
                                            name="Role"
                                            onChange={onAddUserChange}>
                                            <option selected disabled>Select one</option>
                                            <option>Admin</option>
                                            <option>Project Manager</option>
                                            <option>Team Member</option>
                                            <option>Tester</option>
                                            <option>Customer Relationship Manager</option>


                                        </select>
                                    </div>

                                    <div className="row">
                                        <div className="col-4">
                                            <button type="submit"
                                                className="btn btn-primary btn-block text-center"
                                                onClick={onAddUserSubmit}>Register</button>
                                        </div>
                                        {/* /.col */}
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
                                className="btn btn-success float-right"
                                onClick={onMemberAddSubmit} > Add New Member </button>
                        </div>
                    </div>
                </section>
                {/* /.content */}
            </div>

        </div>

    )
}

export default MemberAdd