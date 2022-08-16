import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../../Layouts/Menu";
import Navbar from "../../Layouts/Navbar";

function ClientView() {

    let navigate = useNavigate()
    const onButtonClick = () => {
        navigate('/clients')
    }
    const [ViewClientData, setViewClientData] = useState([{
        ClientName: '',
        ClientType: '',
        ClientActivitySector: '',
        ClientTelephoneNumber: '',
        ClientEmail: '',
        ClientWebsite: '',
        ClientJoined: '',
    }])
    let { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3001/ViewClient/${id}`)
            .then(response => {
                return response.json();
            })
            .then(Client => {

                setViewClientData(Client)

            })

    }, [id]) //



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
                                <h1>Clients Details</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li className="breadcrumb-item active">Client Detail</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}

                <section className="content">
                    {/* Default box */}

                    <div className="card">

                        <div className="card-header">
                            <h3 className="card-title">Client Details</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>

                            </div>
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <div className="col-12 col-md-12 col-lg-8 order-2 order-md-1">
                                    <div className="row">
                                        <div className="col-12 col-sm-4">
                                            <div className="info-box bg-light">
                                                <div className="info-box-content">
                                                    <span className="info-box-text text-center text-muted">Client Name</span>
                                                    <span
                                                        className="info-box-number text-center text-muted mb-0"

                                                    >{ViewClientData.clientname}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <div className="info-box bg-light">
                                                <div className="info-box-content">
                                                    <span className="info-box-text text-center text-muted">Type</span>
                                                    <span
                                                        className="info-box-number text-center text-muted mb-0"

                                                    >{ViewClientData.type}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <div className="info-box bg-light">
                                                <div className="info-box-content">
                                                    <span className="info-box-text text-center text-muted">Activity Sector</span>
                                                    <span className="info-box-number text-center text-muted mb-0">
                                                        {ViewClientData.activitysector}</span>
                                                </div>

                                            </div>


                                        </div>
                                        <div>
                                        </div>

                                    </div>


                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className="info-box bg-light">
                                        <div className="info-box-content">
                                            <span className="info-box-text text-center text-muted">Joined</span>
                                            <span className="info-box-number text-center text-muted mb-0">
                                                {ViewClientData.joined}</span>
                                        </div>

                                    </div>


                                </div>
                                <div>
                                </div>
                            </div>
                            <div>
                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <b className="card-title " >Client Coordination</b>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            {/* we are adding the accordion ID so Bootstrap's collapse plugin detects it */}
                                            <div id="accordion">
                                                <div className="card card-primary">
                                                    <div className="card-header">
                                                        <h4 className="card-title w-100">
                                                            <a className="d-block w-100" data-toggle="collapse" href="#collapseOne">
                                                                Email
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                                        <div className="card-body">
                                                            {ViewClientData.email}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card card-danger">
                                                    <div className="card-header">
                                                        <h4 className="card-title w-100">
                                                            <a className="d-block w-100" data-toggle="collapse" href="#collapseTwo">
                                                                Telephone Number
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                                        <div className="card-body">
                                                            {ViewClientData.telephonenumber}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card card-success">
                                                    <div className="card-header">
                                                        <h4 className="card-title w-100">
                                                            <a className="d-block w-100" data-toggle="collapse" href="#collapseThree">
                                                                Website
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" data-parent="#accordion">
                                                        <div className="card-body">
                                                            {ViewClientData.website}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                        </div>

                                    </div>

                                </div>
                              
                            </div>
                            <div className="text-center mt-5 mb-3">
                                    <button className="btn btn-sm btn-primary"
                                        onClick={onButtonClick}>View All Clients</button>
                                </div>
                        </div>

                    </div>




                </section>

            </div>
        </div>


    )
}
export default ClientView