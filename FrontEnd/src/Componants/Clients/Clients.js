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
                    <div className="row mb-2">
                        <div className="col-md-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">Clients</h3>
                                    
                                    <div className="card-tools">
                                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                            <i className="fas fa-minus" />
                                        </button>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="dt-buttons btn-group flex-wrap">
                                        <button type="button"
                                        className="btn btn-block btn-outline-warning "
                                        onClick={onAddClientClick}
                                        tabindex="0">Add a Client</button>
                                    </div>
                                    <table className="table table-striped clients">
                                        <thead>
                                            <tr>
                                                <th style={{ width: '1%' }}>
                                                    #
                                                </th>
                                                <th style={{ width: '8%' }} className="text-center" >
                                                    Client Name
                                                </th>
                                                <th style={{ width: '8%' }} className="text-center">
                                                    Type
                                                </th>
                                                <th style={{ width: '8%' }} className="text-center">
                                                    Activity Sector
                                                </th>
                                                <th style={{ width: '8%' }} className="text-center">
                                                    Telephone Number
                                                </th>
                                                <th style={{ width: '8%' }} className="text-center" >
                                                    Email
                                                </th>
                                                <th style={{ width: '8%' }} className="text-center" >
                                                    Website
                                                </th>
                                                <th style={{ width: '8%' }} className="text-center">
                                                    Joined
                                                </th>
                                                
                                                <th style={{ width: '20%' }}>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {ClientsInfo.map((ClientInfo, i) => (
                                                <Fragment>
                                                    <tr>
                                                        <td>
                                                            #
                                                        </td>
                                                        <td style={{ width: '8%' }}>
                                                            <a>
                                                                {ClientInfo.clientname}
                                                            </a>
                                                            <br />

                                                        </td>

                                                        <td style={{ width: '8%' }} className="Type">
                                                            <a>
                                                                {ClientInfo.type}
                                                            </a>
                                                        </td>
                                                        <td style={{ width: '8%' }} className="Activity Sector">
                                                            <a>
                                                                {ClientInfo.activitysector}
                                                            </a>
                                                        </td>
                                                        <td style={{ width: '8%' }} className="Telephone Number">
                                                            <a>
                                                                {ClientInfo.telephonenumber}
                                                            </a>
                                                        </td>
                                                        <td className="Email text-center" style={{ width: '8%' }}>
                                                            <a>
                                                                {ClientInfo.email}
                                                            </a>
                                                        </td>
                                                       
                                                        <td style={{ width: '8%' }} className="Website">
                                                            <a>
                                                                {ClientInfo.website}
                                                            </a>

                                                        </td>
                                                        <td style={{ width: '8%' }} className="Joined">
                                                            <a>
                                                                {ClientInfo.joined}
                                                            </a>
                                                        </td>
                                                        
                                                        <td className="Client-actions text-right">
                                                            <a className="btn btn-primary btn-sm mr-1"
                                                                onClick={(event) => onClientViewClick(event, ClientInfo)}
                                                            >
                                                                <i className="fas fa-folder">
                                                                </i>
                                                                View
                                                            </a>
                                                            <a className="btn btn-info btn-sm mr-1"
                                                                onClick={(event) => onClientEditClick(event, ClientInfo)}>
                                                                <i className="fas fa-pencil-alt">
                                                                </i>
                                                                Edit
                                                            </a>
                                                            <a
                                                                className="btn btn-danger btn-sm mr-1"

                                                                onClick={() => onClientDeleteClick(ClientInfo.id)}
                                                            >
                                                                <i className="fas fa-trash">
                                                                </i>
                                                                Delete
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </Fragment>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>


        </div >
        {/* <Footer /> */}
    </div>
    )
}

export default Clients