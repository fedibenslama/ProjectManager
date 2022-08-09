import React from "react";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";

function Profile({User}) {
 const [ViewProfileData, setViewProfileData] = useState([{
        Name: '',
        Email: '',
        Role: '',
        
    }])
    let { id } = useParams()
    useEffect(() => {
        fetch(`http://localhost:3001/profile/${id}`)
            .then(response => {
                return response.json();
            })
            .then(profile => {

                setViewProfileData(profile)

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
                <h1>Profile</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/#">Home</a></li>
                  <li className="breadcrumb-item active">User Profile</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3">
                {/* Profile Image */}
                <div className="card card-primary card-outline">
                  <div className="card-body box-profile">
                    <div className="text-center">
                      <img className="profile-user-img img-fluid img-circle" src="../../dist/img/user4-128x128.jpg" alt="User profile" />
                    </div>
                    <h3 className="profile-username text-center">{ViewProfileData.name}</h3>
                    <h5 className="text-muted text-center">{ViewProfileData.role}</h5>

                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
                {/* About Me Box */}
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">About Me</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                    <strong><i className="fas fa-book mr-1" /> Education</strong>
                    <p className="text-muted">
                      B.S. in Computer Science from the University of Tennessee at Knoxville
                    </p>
                    <hr />
                    <strong><i className="fas fa-map-marker-alt mr-1" /> Location</strong>
                    <p className="text-muted">Malibu, California</p>
                    <hr />
                    <strong><i className="fas fa-pencil-alt mr-1" /> Skills</strong>
                    <p className="text-muted">
                      <span className="tag tag-danger">UI Design</span>
                      <span className="tag tag-success">Coding</span>
                      <span className="tag tag-info">Javascript</span>
                      <span className="tag tag-warning">PHP</span>
                      <span className="tag tag-primary">Node.js</span>
                    </p>
                    <hr />
                    <strong><i className="far fa-file-alt mr-1" /> Notes</strong>
                    <p className="text-muted">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum enim neque.</p>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              {/* /.col */}
              <div className="col-md-9">
                <div className="card">
                  <div className="card-header p-2">
                    <ul className="nav nav-pills">
                      <li className="nav-item"><a className="nav-link active" href="#activity" data-toggle="tab">Contact Information</a></li>
                      <li className="nav-item"><a className="nav-link" href="#timeline" data-toggle="tab">Associated Roles</a></li>
                      <li className="nav-item"><a className="nav-link" href="#settings" data-toggle="tab">Settings</a></li>
                    </ul>
                  </div>{/* /.card-header */}
                  <div className="card-body">
                    <div className="tab-content">
                      <div className="active tab-pane" id="Contact Information">

                      </div>
                      {/* /.tab-pane */}
                      <div className="tab-pane" id="Asoociated Roles">

                      </div>

                    </div>

                  </div>
                </div>

              </div>

            </div>

          </div>
        </section>

      </div>

    </div>

  )
}

export default Profile