import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";


function ClientEdit({ ClientsInfo, setClientsInfo, EditClientData, setEditClientData, EditClientId, setEditClientId }) {

    //----------------------Client Edit---------------------------------

    let navigate = useNavigate()

    const onCancelClick = () => {
        navigate('/clients')
    }

    const onClientEditChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const NewClientData = { ...EditClientData };
        NewClientData[fieldName] = fieldValue;

        setEditClientData(NewClientData)
    }
    const onClientEditSubmit = (event) => {
        event.preventDefault();

        const editedClient = {
            id: EditClientId,
            ClientName: EditClientData.ClientName,
            ClientType: EditClientData.ClientType,
            ClientClientActivitySector: EditClientData.ClientClientActivitySector,
            ClientTelephoneNumber: EditClientData.ClientTelephoneNumber,
            ClientEmail: EditClientData.ClientEmail,
            ClientClientWebsite: EditClientData.ClientClientWebsite,
            ClientJoined: EditClientData.ClientJoined,
        }
        const NewClients = [...ClientsInfo]
        const index = ClientsInfo.findIndex((ClientInfo) => ClientInfo.id === EditClientId);
        NewClients[index] = editedClient;
        setClientsInfo(NewClients)
        setEditClientId(null)

        fetch('http://localhost:3001/EditClient', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: EditClientId,
                ClientName: EditClientData.ClientName,
                ClientType: EditClientData.ClientType,
                ClientClientActivitySector: EditClientData.ClientClientActivitySector,
                ClientTelephoneNumber: EditClientData.ClientTelephoneNumber,
                ClientEmail: EditClientData.ClientEmail,
                ClientClientWebsite: EditClientData.ClientClientWebsite,
                ClientJoined: EditClientData.ClientJoined,

            })
        })
            .then(response => response.json())

    }

    /////////////////////////////////////////

    const onClientEditSubmitAndClose = (event) => {
        event.preventDefault();
        const editedClient = {
            id: EditClientId,
            ClientName: EditClientData.ClientName,
            ClientType: EditClientData.ClientType,
            ClientClientActivitySector: EditClientData.ClientClientActivitySector,
            ClientTelephoneNumber: EditClientData.ClientTelephoneNumber,
            ClientEmail: EditClientData.ClientEmail,
            ClientClientWebsite: EditClientData.ClientClientWebsite,
            ClientJoined: EditClientData.ClientJoined,
        }
        const NewClients = [...ClientsInfo]
        const index = ClientsInfo.findIndex((ClientInfo) => ClientInfo.id === EditClientId);
        NewClients[index] = editedClient;
        setClientsInfo(NewClients)
        setEditClientId(null)

        fetch('http://localhost:3001/EditClient', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: EditClientId,
                ClientName: EditClientData.ClientName,
                ClientType: EditClientData.ClientType,
                ClientClientActivitySector: EditClientData.ClientClientActivitySector,
                ClientTelephoneNumber: EditClientData.ClientTelephoneNumber,
                ClientEmail: EditClientData.ClientEmail,
                ClientClientWebsite: EditClientData.ClientClientWebsite,
                ClientJoined: EditClientData.ClientJoined,

            })
        })
            .then(response => response.json())
            .then(edit => {
                navigate('/clients')
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
                                <h1>Client Edit</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/clients">Home</a></li>
                                    <li className="breadcrumb-item active">Client Edit</li>
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
                                        <label htmlFor="ClientName">Client Name</label>
                                        <input
                                            type="text"
                                            id="ClientName"
                                            name="ClientName"
                                            className="form-control"
                                            onChange={onClientEditChange}
                                            value={EditClientData.ClientName}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ClientType">Type</label>
                                        <input
                                            type="text"
                                            id="ClientType"
                                            className="form-control"
                                            name="ClientType"
                                            onChange={onClientEditChange}
                                            value={EditClientData.ClientType} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ClientActivitySector">Activity Sector</label>
                                        <textarea id="ClientActivitySector"
                                            className="form-control"
                                            rows={4}
                                            name="ClientActivitySector"
                                            onChange={onClientEditChange}
                                            value={EditClientData.ClientActivitySector} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="ClientJoined">Joined</label>
                                        <input type="date"
                                            id="ClientJoined"
                                            className="form-control"
                                            name="ClientJoined"
                                            onChange={onClientEditChange}
                                            value={EditClientData.ClientJoined} />
                                    </div>

                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                        <div className="col-md-6">
                            <div className="card card-secondary">
                                <div className="card-header">
                                    <h3 className="card-title">Coordination</h3>
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                            <i className="fas fa-minus" />
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="form-group">
                                        <label htmlFor="ClientEmail">Email</label>
                                        <input
                                            type="email"
                                            id="ClientEmail"
                                            className="form-control"
                                            name="ClientEmail"
                                            onChange={onClientEditChange}
                                            value={EditClientData.ClientEmail} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ClientTelephoneNumber">Telephone Number</label>
                                        <input
                                            type="text"
                                            id="ClientTelephoneNumber"
                                            className="form-control"
                                            name="ClientTelephoneNumber"
                                            onChange={onClientEditChange}
                                            value={EditClientData.ClientTelephoneNumber} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="ClientWebsite">Website</label>
                                        <input type="text"
                                            id="ClientWebsite"
                                            className="form-control"
                                            name="ClientWebsite"
                                            onChange={onClientEditChange}
                                            value={EditClientData.ClientWebsite} />
                                    </div>
                                    <button type="submit"
                                        defaultValue="Create new Client"
                                        className="btn btn-info "
                                        onClick={onClientEditSubmit} >
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
                                defaultValue="Create new Client"
                                className="btn btn-success float-right"
                                onClick={onClientEditSubmitAndClose} >
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

export default ClientEdit