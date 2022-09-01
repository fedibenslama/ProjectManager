import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../../Layouts/Menu";
import Navbar from "../../Layouts/Navbar";

function FunctionalityView() {

    let navigate = useNavigate()
    const onButtonClick = () => {
        navigate('/Functionalities')
    }
    const [ViewFunctionalityData, setViewFunctionalityData] = useState([{
        FuncTitle: '',
        FuncIdCode: '',
        FuncDescription: '',
        FuncStatus: '',
        FuncAssociatedReq: '',
        FuncAssociatedTasks: '',
        FuncAssociatedMemb: '',
        FuncStartDate: '',
        FuncFinishDate: '',
        FuncDuration: ''
    }])
    let { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3001/ViewFunctionality/${id}`)
            .then(response => {
                return response.json();
            })
            .then(Functionality => {

                setViewFunctionalityData(Functionality)

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
                                <h1>Functionalities Details</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li className="breadcrumb-item active">Functionality Detail</li>
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
                            <h3 className="card-title">Functionality General</h3>
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

                                                    >{ViewFunctionalityData.funcidcode}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <div className="info-box bg-light">
                                                <div className="info-box-content">
                                                    <span className="info-box-text text-center text-muted">Description</span>
                                                    <span
                                                        className="info-box-number text-center text-muted mb-0"

                                                    >{ViewFunctionalityData.funcdescription}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-4">
                                            <div className="info-box bg-light">
                                                <div className="info-box-content">
                                                    <span className="info-box-text text-center text-muted">Status</span>
                                                    <span className="info-box-number text-center text-muted mb-0">
                                                        {ViewFunctionalityData.funcstatus}</span>
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
                                                {ViewFunctionalityData.functitle}</span>
                                        </div>

                                    </div>


                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className="info-box bg-light">
                                        <div className="info-box-content">
                                            <span className="info-box-text text-center text-muted">Associated Requirement(s)</span>
                                            <span className="info-box-number text-center text-muted mb-0">
                                                {ViewFunctionalityData.funcassociatedreq}</span>
                                        </div>

                                    </div>


                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className="info-box bg-light">
                                        <div className="info-box-content">
                                            <span className="info-box-text text-center text-muted">Associated Task(s)</span>
                                            <span className="info-box-number text-center text-muted mb-0">
                                                {ViewFunctionalityData.funcassociatedtasks}</span>
                                        </div>

                                    </div>


                                </div>
                                <div className="col-12 col-sm-4">
                                    <div className="info-box bg-light">
                                        <div className="info-box-content">
                                            <span className="info-box-text text-center text-muted">Associated Member(s)</span>
                                            <span className="info-box-number text-center text-muted mb-0">
                                                {ViewFunctionalityData.funcassociatedmemb}</span>
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
                                            <b> <h4 className="text-center " >Functionality Progress</h4> </b>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            {/* we are adding the accordion ID so Bootstrap's collapse plugin detects it */}
                                            <div id="accordion">
                                                <div className="card card-primary">
                                                    <div className="card-header">
                                                        <h4 className="card-title w-100">
                                                            <a className="d-block w-100" data-toggle="collapse" href="#collapseOne">
                                                                Start Date
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseOne" className="collapse show" data-parent="#accordion">
                                                        <div className="card-body">
                                                            {ViewFunctionalityData.funcstartdate}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card card-danger">
                                                    <div className="card-header">
                                                        <h4 className="card-title w-100">
                                                            <a className="d-block w-100" data-toggle="collapse" href="#collapseTwo">
                                                                Finish Date
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseTwo" className="collapse" data-parent="#accordion">
                                                        <div className="card-body">
                                                            {ViewFunctionalityData.funcfinishdate}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card card-success">
                                                    <div className="card-header">
                                                        <h4 className="card-title w-100">
                                                            <a className="d-block w-100" data-toggle="collapse" href="#collapseThree">
                                                                Duration
                                                            </a>
                                                        </h4>
                                                    </div>
                                                    <div id="collapseThree" className="collapse" data-parent="#accordion">
                                                        <div className="card-body">
                                                            {ViewFunctionalityData.funcduration}
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
                                        onClick={onButtonClick}>View All Functionalities</button>
                                </div>



                </section>

            </div>
        </div>


    )
}
export default FunctionalityView