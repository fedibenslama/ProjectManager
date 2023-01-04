import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Menu from "../../Layouts/Menu";
import Navbar from "../../Layouts/Navbar";

function MemberView() {

    let navigate = useNavigate()
    const onButtonClick = () => {
        navigate('/Members')
    }
    const [ViewMemberData, setViewMemberData] = useState([{
        MemberName: '',
        MemberId: '',
        MemberTelephoneNumber: '',
        MemberEmail: '',
        MemberAddress: '',
        MemberAssociatedRoles: '',
        MemberAccumulatedExp: ''
    }])
    let { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3001/ViewMember/${id}`)
            .then(response => {
                return response.json();
            })
            .then(Member => {

                setViewMemberData(Member)

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
                                <h1>Members Details</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li className="breadcrumb-item active">Member Detail</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}

                <section className="content">
                    {/* Default box */}
                    <div>

                    </div>

                    <div className="card">

                        <div className="card-header">
                            <h3 className="card-title">Member General</h3>
                            <div className="card-tools">
                                <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                                    <i className="fas fa-minus" />
                                </button>

                            </div>
                        </div>

                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-3">
                                    {/* Profile Image */}
                                    <div className="card card-primary card-outline">
                                        <div className="card-body box-profile">
                                            <div className="text-center">
                                                <img src={ViewMemberData.memberid} alt="user-avatar" className="profile-user-img img-circle img-fluid"  />
                                            </div>
                                            <h3 className="profile-username text-center">{ViewMemberData.membername}</h3>
                                            <h5 className="text-muted text-center">{ViewMemberData.memberassociatedroles}</h5>

                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                    {/* About Me Box */}
                                    <div className="card card-primary">
                                        <div className="card-header">
                                            <h3 className="card-title">About {ViewMemberData.membername}</h3>
                                        </div>
                                        {/* /.card-header */}
                                        <div className="card-body">
                                            <strong><i className="fas fa-code mr-1" />ID</strong>
                                            <p className="text-muted">
                                                {ViewMemberData.memberid}
                                            </p>
                                            <hr />
                                            <strong><i className="fas fa-map-marker-alt mr-1" /> Address</strong>
                                            <p className="text-muted">{ViewMemberData.memberaddress}</p>
                                            <hr />
                                            <strong><i className="fas fa-map-marker-alt mr-1" /> Telephone Number</strong>
                                            <p className="text-muted">{ViewMemberData.membertelephonenumber}</p>


                                        </div>
                                        {/* /.card-body */}
                                    </div>
                                    {/* /.card */}
                                </div>

                                <div className="col-3 col-sm-3">
                                    <div className="info-box bg-light">
                                        <div className="info-box-content">
                                            <span className="info-box-text text-center text-muted">Associated Role(s)</span>
                                            <span className="info-box-number text-center text-muted mb-0">
                                                {ViewMemberData.memberassociatedroles}</span>
                                        </div>

                                    </div>


                                </div>
                                <div className="col-3 col-sm-3">
                                    <div className="info-box bg-light">
                                        <div className="info-box-content">
                                            <span className="info-box-text text-center text-muted">Accumulated Experience</span>
                                            <span className="info-box-number text-center text-muted mb-0">
                                                {ViewMemberData.memberaccumulatedexp}</span>
                                        </div>

                                    </div>


                                </div>
                                <div className="col-3 col-sm-3">
                                    <div className="info-box bg-light">
                                        <div className="info-box-content">
                                            <span className="info-box-text text-center text-muted">Email</span>
                                            <span className="info-box-number text-center text-muted mb-0">
                                                {ViewMemberData.memberemail}</span>
                                        </div>

                                    </div>


                                </div>


                                <div>

                                </div>
                            </div>


                        </div>

                    </div>
                    <div className=" mt-5 mb-3 text-center mr-4">
                        <button className="btn btn-sm btn-dark"
                            onClick={onButtonClick}>View All Members</button>
                    </div>



                </section>

            </div>
        </div>


    )

}
export default MemberView