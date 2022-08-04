import React from 'react'
import { useNavigate } from 'react-router-dom'

function Navbar() {

  const Navigate = useNavigate()

  const onProjectsClick = () => {
    Navigate('/projects')
  }
  const onSignOutClient = () => {
    Navigate('/login')
  }

  return (
    <div>
      {/* Navbar */}
      <nav className="main-header navbar navbar-expand navbar-primary navbar-dark">
        {/* Left navbar links */}
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" data-widget="pushmenu" href="/#" role="button"><i className="fas fa-bars" /></a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="index3.html" className="nav-link">Home</a>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <button onClick={onProjectsClick} className="nav-link btn btn-link">Projects</button>
          </li>
          <li className="nav-item d-none d-sm-inline-block">
            <a href="/#" className="nav-link">Contact</a>
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
              <img src="../../dist/img/user2-160x160.jpg" className="user-image img-circle elevation-2" alt="User" />
              <span className="d-none d-md-inline">Fedi Ben Slama</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
              {/* User image */}
              <li className="user-header bg-primary">
                <img src="../../dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
                <p>
                  Fedi Ben Slama
                  <small>Web Developer</small>
                </p>
              </li>
              {/* Menu Body */}

              {/* Menu Footer*/}
              <li className="user-footer">
                <button className="btn btn-default btn-flat btn btn-link">Profile</button>
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