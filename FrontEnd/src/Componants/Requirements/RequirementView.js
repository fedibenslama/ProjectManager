import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../../Layouts/Menu";
import Navbar from "../../Layouts/Navbar";

function RequirementView() {

    let navigate = useNavigate()
    const onButtonClick = () => {
        navigate('/requirements')
    }
    const [ViewRequirementData, setViewRequirementData] = useState([{
        RequirementTitle: '',
        RequirementIdCode: '',
        RequirementDescription: '',
        RequirementStatus: '',
        RequirementCreatedBy: '',
        RequirementAssociatedProject: '',
        RequirementMainRequirement: ''
    }])
    let { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3001/ViewRequirement/${id}`)
            .then(response => {
                return response.json();
            })
            .then(Requirement => {

                setViewRequirementData(Requirement)

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
                                <h1>Requirements Details</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li className="breadcrumb-item active">Requirement Detail</li>
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
                            <h3 className="card-title">Requirement General</h3>
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
                                                    <span className="info-box-text text-center text-muted">ID Code</span>
                                                    <span
                                                        className="info-box-number text-center text-muted mb-0"

                                                    >{ViewRequirementData.requirementidcode}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <div className="info-box bg-light">
                                                <div className="info-box-content">
                                                    <span className="info-box-text text-center text-muted">Description</span>
                                                    <span
                                                        className="info-box-number text-center text-muted mb-0"

                                                    >{ViewRequirementData.requirementdescription}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <div className="info-box bg-light">
                                                <div className="info-box-content">
                                                    <span className="info-box-text text-center text-muted">Status</span>
                                                    <span className="info-box-number text-center text-muted mb-0">
                                                        {ViewRequirementData.requirementstatus}</span>
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
                                            <span className="info-box-text text-center text-muted">Title</span>
                                            <span className="info-box-number text-center text-muted mb-0">
                                                {ViewRequirementData.requirementtitle}</span>
                                        </div>

                                    </div>


                                </div>
                                <div>
                                </div>
                            </div>
                            <div style={{marginLeft: '375px' , marginTop: 50}}>


                                <div className="col-md-6">
                                    <div className="card">
                                        <div className="card-header">
                                            <b> <h4 className="text-center " >Requirement Properties</h4> </b>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            {/* we are adding the accordion ID so Bootstrap's collapse plugin detects it */}
                                            <div id="accordion">
                                                <div className="card card-primary">
                                                    <div className="card-header">
                                                        <h4 className="card-title w-100">
                                                            <a className="d-block w-100" data-toggle="collapse" href="#collapseOne">
                                                                Created By
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                                        <div className="card-body">
                                                            {ViewRequirementData.requirementcreatedby}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card card-danger">
                                                    <div className="card-header">
                                                        <h4 className="card-title w-100">
                                                            <a className="d-block w-100" data-toggle="collapse" href="#collapseTwo">
                                                                Associated Project
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                                        <div className="card-body">
                                                            {ViewRequirementData.requirementassociatedproject}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card card-success">
                                                    <div className="card-header">
                                                        <h4 className="card-title w-100">
                                                            <a className="d-block w-100" data-toggle="collapse" href="#collapseThree">
                                                                Main Requirement
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" data-parent="#accordion">
                                                        <div className="card-body">
                                                            {ViewRequirementData.requirementmainrequirement}
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>


                                        </div>

                                    </div>

                                </div>
                              
                            </div>
                           
                        </div>
                       
                    </div>
                    <div className=" mt-5 mb-3 text-center mr-4">
                                    <button className="btn btn-sm btn-dark"
                                        onClick={onButtonClick}>View All Requirements</button>
                                </div>



                </section>

            </div>
        </div>


    )
}
export default RequirementView