import React from "react";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

function Profile() {

  const [User, setUser] = useState({
    id: '',
    name: '',
    email: '',
    role: ''
  })



  useEffect(() => {
    const token = window.sessionStorage.getItem('token');
    if (token) {
      fetch('http://localhost:3001/signin', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': token
        }
      })
        .then(response => response.json())
        .then(data => {
          if (data && data.id) {
            fetch(`http://localhost:3001/profile/${data.id}`, {
              method: 'GET',
              headers: {
                'Content-Type': 'application/json',
                'Authorization': token
              }
            })
              .then(response => response.json())
              .then(user => {
                if (user && user.email) {

                  setUser(user)

                }
              })
          }
        })

    }
  }, [])

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
                      <img className="profile-user-img img-fluid img-circle" src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="User profile" />
                    </div>
                    <h3 className="profile-username text-center">{User.name}</h3>
                    <h5 className="text-muted text-center">{User.role}</h5>

                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
                {/* About Me Box */}
                <div className="card card-primary">
                  <div className="card-header">
                    <h3 className="card-title">About {User.name}</h3>
                  </div>
                  {/* /.card-header */}
                  <div className="card-body">
                   
                    <strong><i className="fas fa-map-marker-alt mr-1" /> Location</strong>
                    <p className="text-muted">Tunis, Tunisia</p>
                    <hr />
                    <strong><i className="fas fa-phone mr-1" /> Telephone Number</strong>


                    <p className="text-muted">
                      <span>96161053</span>
                    </p>
                    <hr />
                   
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>
              <div className="col-md-9">
                <div className="card">
                  <div className="card-header p-2">
                    <ul className="nav nav-pills">
                      <li className="nav-item"><a className="nav-link active" href="#activity" data-toggle="tab">Contact Information</a></li>
                    </ul>
                  </div>{/* /.card-header */}
                  <div className="card-body">
                    <div className="tab-content">
                      <div className="active tab-pane" id="Contact Information">
                        <strong><i className="fas fas fa-sitemap" /> Associated Projects</strong>
                        <p className="text-muted">
                        Text Classification
                        </p>
                        <hr />
                        <strong><i className="fas fas fa-briefcase" /> Role</strong>
                    <p className="text-muted">Admin</p>
                        <hr />
                        <strong><i className="fas fa-pencil-alt" /> Skills</strong>
                        <ul className="list-unstyled text-muted">
                          <li>Javascript</li>
                          <li>Python </li>
                          <li>Tableau  </li>
                          <li>Microsoft PowerPoint </li>
                        </ul>
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