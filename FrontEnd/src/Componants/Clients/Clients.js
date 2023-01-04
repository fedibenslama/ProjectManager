/* eslint-disable jsx-a11y/anchor-is-valid */
import {React,Fragment,useEffect, useState } from "react";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import { useNavigate } from "react-router-dom";

function Clients ({ ClientsInfo, setClientsInfo, setEditClientData, setEditClientId }) {

 // eslint-disable-next-line no-unused-vars
 const [ViewClientId, setViewClientId] = useState(null)

 let navigatee = useNavigate()

 useEffect(() => {
     fetch('http://localhost:3001/clients')
         .then(response => {
             return response.json();
         })
         .then(clients => {

             setClientsInfo(clients)
         })

 }, [setClientsInfo]) //


 const onAddClientClick = () => {
     navigatee('/addClient')
 }

 const onClientViewClick = (event, ClientInfo) => {
     event.preventDefault();
     setViewClientId(ClientInfo.id)
     navigatee(`/ViewClient/${ClientInfo.id}`)

 }

 const onClientEditClick = (event, ClientInfo) => {
     event.preventDefault();
     setEditClientId(ClientInfo.id)
     navigatee("/EditClient")
     const ClientValue = {
         ClientName: ClientInfo.clientname,
         ClientType: ClientInfo.type,
         ClientActivitySector: ClientInfo.activitysector,
         ClientTelephoneNumber: ClientInfo.telephonenumber,
         ClientEmail: ClientInfo.email,
         ClientWebsite: ClientInfo.website,
         ClientJoined: ClientInfo.joined,
     }

     setEditClientData(ClientValue)
 }
 const onClientDeleteClick = (clientId) => {

     const Newclients = [...ClientsInfo]
     const index = ClientsInfo.findIndex((ClientInfo) => ClientInfo.id === clientId);
     Newclients.splice(index, 1);
     navigatee("/clients")
     setClientsInfo(Newclients)

     fetch('http://localhost:3001/DeleteClient', {
         method: 'put',
         headers: { 'Content-Type': 'application/json' },
         body: JSON.stringify({
             id: clientId

         })
     })
         .then(response => response.json())
         .catch(console.log)
 }

    return(
        <div>
        <Navbar />
        <Menu />
        <div className="content-wrapper">

            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Clients</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/clients">Home</a></li>
                                <li className="breadcrumb-item active">Clients</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>
            <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-13">
                                <div className="card">


                                </div>
                                {/* /.card */}
                                <div className="card">

                                    <div className="card-header">
                                        <h3 className="card-title">List Of Clients</h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <div className="dt-buttons btn-group flex-wrap">
                                            <button type="button"
                                                className="btn btn-block btn-outline-dark mb-3 " //mr,ml,mt,mb
                                                onClick={onAddClientClick}
                                                tabindex="0">Add a Client</button>
                                        </div>
                                        <table id="example2" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Client Name</th>
                                                    <th>Type</th>
                                                    <th>Activity Sector</th>
                                                    <th>Telephone Number</th>
                                                    <th>Email</th>
                                                    <th>Website</th>
                                                    <th>Joined</th>
                                                    <th></th>


                                                </tr>
                                            </thead>
                                            <tbody>
                                                {ClientsInfo.map((ClientInfo, i) => (
                                                    <Fragment>
                                                        <tr>
                                                            <td>{ClientInfo.clientname}</td>
                                                            <td>{ClientInfo.type} </td>
                                                            <td>{ClientInfo.activitysector}</td>
                                                            <td>{ClientInfo.telephonenumber}</td>
                                                            <td>{ClientInfo.email}</td>
                                                            <td>{ClientInfo.website}</td>
                                                            <td>{ClientInfo.joined}</td>
                                                            <td className="project-actions text-left btn-group " >
                                                                <button className="btn btn-primary btn-sm mr-1"
                                                                    onClick={(event) => onClientViewClick(event, ClientInfo)}
                                                                >
                                                                    <i className="fas fa-folder">
                                                                    </i>
                                                                    View
                                                                </button>
                                                                <button className="btn btn-info btn-sm ml-1"
                                                                    onClick={(event) => onClientEditClick(event, ClientInfo)}
                                                                >
                                                                    <i className="fas fa-pencil-alt">
                                                                    </i>
                                                                    Edit
                                                                </button>
                                                                <button
                                                                    className="btn btn-danger btn-sm ml-1"

                                                                    onClick={() => onClientDeleteClick(ClientInfo.id)}
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


        </div >
        {/* <Footer /> */}
    </div>
    )
}

export default Clients