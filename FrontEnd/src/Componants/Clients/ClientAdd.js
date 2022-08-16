import React from "react";
import { useState } from "react";
import { nanoid } from 'nanoid';
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";

function ClientAdd({ setClientsInfo, ClientsInfo }) {

    let navigate = useNavigate()

    const [AddClientData, setAddClientData] = useState({
        ClientName: '',
        ClientType: '',
        ClientActivitySector: '',
        ClientTelephoneNumber: '',
        ClientEmail: '',
        ClientWebsite: '',
        ClientJoined: '',
    })
    const onCancelClick = () => {
        navigate("/")
    }
    const onClientAddChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const NewClientData = { ...AddClientData }

        NewClientData[fieldName] = fieldValue;
        setAddClientData(NewClientData);

    }
    const onClientAddSubmit = (event) => {
        event.preventDefault();
        navigate("/clients")
        const newClient = {
            id: nanoid(),
            ClientName: AddClientData.ClientName,
            ClientType: AddClientData.ClientType,
            ClientActivitySector: AddClientData.ClientActivitySector,
            ClientTelephoneNumber: AddClientData.ClientTelephoneNumber,
            ClientEmail: AddClientData.ClientEmail,
            ClientWebsite: AddClientData.ClientWebsite,
            ClientJoined: AddClientData.ClientJoined,
        };
        const NewClients = [...ClientsInfo, newClient];
        setClientsInfo(NewClients)


        fetch('http://localhost:3001/addClient', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                ClientName: AddClientData.ClientName,
                ClientType: AddClientData.ClientType,
                ClientActivitySector: AddClientData.ClientActivitySector,
                ClientTelephoneNumber: AddClientData.ClientTelephoneNumber,
                ClientEmail: AddClientData.ClientEmail,
                ClientWebsite: AddClientData.ClientWebsite,
                ClientJoined: AddClientData.ClientJoined,

            })
        })
            .then(response => response.json())

    }
    /////////////////////REGISTER////////////////////////////
    const [AddUserData, setAddUserData] = useState({
        Name: '',
        Email: '',
        Password: '',
        Role: 'Client'
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
                                <h1>Client Add</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li className="breadcrumb-item active">Add Client</li>
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
                                    <h3 className="card-title">Add Client To Clients List</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                            <i className="fas fa-minus" />
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="inputName">Client Name</label>
                                        <input
                                            type="text"
                                            id="ClientName"
                                            name="ClientName"
                                            className="form-control"
                                            onChange={onClientAddChange}
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="ClientActivitySector">Activity Sector</label>
                                        <textarea id="ClientActivitySector"
                                            className="form-control"
                                            rows={4}
                                            defaultValue={""}
                                            name="ClientActivitySector"
                                            onChange={onClientAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ClientType">Type</label>
                                        <select
                                            id="ClientType"
                                            className="form-control custom-select"
                                            onChange={onClientAddChange}
                                            name="ClientType">
                                            <option selected disabled>Select one</option>
                                            <option>Corporate Client</option>
                                            <option>Physical Client</option>

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ClientEmail">Email</label>
                                        <input
                                            type="email"
                                            id="ClientEmail"
                                            className="form-control"
                                            name="ClientEmail"
                                            onChange={onClientAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ClientTelephoneNumber">Telephone Number</label>
                                        <input
                                            type="number"
                                            id="ClientTelephoneNumber"
                                            className="form-control"
                                            name="ClientTelephoneNumber"
                                            onChange={onClientAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ClientWebsite">Website</label>
                                        <input
                                            type="text"
                                            id="ClientWebsite"
                                            className="form-control"
                                            name="ClientWebsite"
                                            onChange={onClientAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ClientJoined">Joined</label>
                                        <input type="date"
                                            id="ClientJoined"
                                            className="form-control"
                                            name="ClientJoined"
                                            onChange={onClientAddChange} />
                                    </div>


                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                        <div className="col-md-6">
                            <div className="card card-secondary">
                                <div className="card-header">
                                    <h3 className="card-title">Register a New Client</h3>
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
                                    {/* <div className="form-group">
                                <label htmlFor="inputStatus">Role</label>
                                <input
                                    id="Role"
                                    className="form-control custom-select"
                                    name="Role"
                                    onChange={onAddUserChange}>
                                        value=
                                    
                                </input>
                            </div> */}
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
                                onClick={onClientAddSubmit} > Add New Client </button>
                        </div>
                    </div>
                </section>
                {/* /.content */}
            </div>

        </div>

    )
}

export default ClientAdd