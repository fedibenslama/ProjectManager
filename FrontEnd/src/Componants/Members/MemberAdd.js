import React from "react";
import { useState } from "react";
import { nanoid } from 'nanoid';
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

function MemberAdd({ setMembersInfo, MembersInfo }) {
    //////////////////////////////

    const animatedComponents = makeAnimated();
    const options = [
        { value: 'Admin', label: 'Admin' },
        { value: 'Project Manager', label: 'Project Manager' },
        { value: 'Team Member', label: 'Team Member' },
        { value: 'Tester', label: 'Tester' },
        { value: 'Customer Relationship Manager', label: 'Customer Relationship Manager' }
    ]
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
        navigate("/Members")


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
                                        <label>Name</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-user" /></span>
                                            </div>
                                            <input type="text" className="form-control"
                                                name="MemberName"
                                                onChange={onMemberAddChange} />
                                        </div>
                                    </div>



                                    <div className="form-group">
                                        <label>Email</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fa fa-envelope" /></span>
                                            </div>
                                            <input type="text" className="form-control"
                                                name="MemberEmail"
                                                onChange={onMemberAddChange} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Telephone Number</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-phone" /></span>
                                            </div>
                                            <input type="tel" className="form-control"
                                                name="MemberTelephoneNumber"
                                                onChange={onMemberAddChange} />
                                        </div>
                                        {/* /.input group */}
                                    </div>

                                    <div className="form-group">
                                        <label>Address</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-map-marker-alt" /></span>
                                            </div>
                                            <input type="text" className="form-control"
                                                name="MemberAddress"
                                                onChange={onMemberAddChange} />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="MemberAssociatedRoles">Role</label>

                                        <select
                                            id="MemberAssociatedRoles"
                                            className="form-control custom-select "
                                            name="MemberAssociatedRoles"
                                            onChange={onMemberAddChange}
                                        >

                                            <option selected disabled> Select One </option>
                                            <option>Admin</option>
                                            <option>Project Manager</option>
                                            <option>Team Member</option>
                                            <option>Tester</option>
                                            <option>Customer Relationship Manager</option>


                                        </select>
                                    </div>

                                    {/* <div className="form-group">
                                        <label>Associated Roles</label>
                                        <div className="select2-purple"
                                         name="MemberAssociatedRoles"
                                         onChange={onMemberAddChange}
                                        >

                                            <Select
                                            
                                               
                                                closeMenuOnSelect={false}
                                                components={animatedComponents}
                                                options={options}
                                                
                                                isMulti

                                            />
                                        </div>
                                    </div> */}
                                    <div className="form-group">
                                        <label>Accumulated Experience</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-address-card" /></span>
                                            </div>
                                            <input type="text" className="form-control"
                                                name="MemberAccumulatedExp"
                                                onChange={onMemberAddChange} />
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Profile Picture</label>
                                        <div className="input-group">
                                            <div className="input-group-prepend">
                                                <span className="input-group-text"><i className="fas fa-hashtag" /></span>
                                            </div>
                                            <input type="text" className="form-control" placeholder="Put URL here"
                                                name="MemberId"
                                                onChange={onMemberAddChange} />
                                        </div>
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
                                className="btn btn-success float-righ ml-3"
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