import React from 'react'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom'

function Navbar() {
  //to get blue , replace dark with primary

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

  
  const Navigate = useNavigate()

  const onProjectsClick = () => {
    Navigate('/')
  }
  const onMembersClick = () => {
    Navigate('/Members')
  }
  const onDashboardClick = () => {
    Navigate('/dashboard')
    window.location.reload(false);
  }
  const onSignOutClient = () => {
    Navigate('/login')
    window.sessionStorage.removeItem('token');
  }
  const onProfileClick=()=>{
    Navigate("/profile")
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-dark navbar-dark">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="/#" role="button"><i className="fas fa-bars" /></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <button onClick={onDashboardClick} className="nav-link btn btn-link">Dashboard</button>
          </li>
         
          <li className="nav-item d-none d-sm-inline-block">
            <button onClick={onProjectsClick}  className="nav-link btn btn-link">Projects</button>
          </li>
        </ul>
        {/* Right navbar links */}
        <ul className="navbar-nav ml-auto">
          {/* Navbar Search */}
          <li className="nav-item">
            <a className="nav-link" data-widget="navbar-search" href="/#" role="button">
              <i className="fas fa-search" />
            </a>
            <div className="navbar-search-block">
              <form className="form-inline">
                <div className="input-group input-group-sm">
                  <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                  <div className="input-group-append">
                    <button className="btn btn-navbar" type="submit">
                      <i className="fas fa-search" />
                    </button>
                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                      <i className="fas fa-times" />
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </li>

          {/* -----------------Profile----------------------- */}
          <li className="nav-item dropdown user-menu">
            <a href="/#" className="nav-link dropdown-toggle" data-toggle="dropdown">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="user-image img-circle elevation-2" alt="User" />
              <span className="d-none d-md-inline">{User.name}</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              {/* User image */}
              <li className="user-header bg-dark">
                <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" className="img-circle elevation-2" alt="User" />
                <p>
                {User.name}
                  <small>{User.role}</small>
                </p>
              </li>
              {/* Menu Body */}

              {/* Menu Footer*/}
              <li className="user-footer">
                <button onClick={onProfileClick} className="btn btn-default btn-flat btn btn-link">Profile</button>
                <button className="btn btn-default btn-flat float-right btn btn-link"
                  onClick={onSignOutClient}>Sign out</button>
              </li>
            </ul>
          </li>

          {/* //------------------------------------------ */}
          <li className="nav-item">
            <a className="nav-link" data-widget="fullscreen" href="/#" role="button">
              <i className="fas fa-expand-arrows-alt" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-widget="control-sidebar" data-controlsidebar-slide="true" href="/#" role="button">
              <i className="fas fa-th-large" />
            </a>
          </li>

        </ul>
      </nav>
      {/* /.navbar */}

    </div>
  )
}
export default Navbar