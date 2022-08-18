import { React, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Menu() {


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
                  console.log(user)
                  setUser(user)

                }
              })
          }
        })

    }
  }, [])

  const Navigate = useNavigate()
  const onViewAllProjectsClick = () => {
    Navigate('/')
  }
  const onAddAProjectClick = () => {
    Navigate('/addProject')
  }
  const onViewAllClientsClick = () => {
    Navigate('/clients')
  }
  const onAddAClientClick = () => {
    Navigate('/addClient')
  }
  const onViewAllRequirementsClick = () => {
    Navigate('/requirements')
  }
  const onAddARequirementClick = () => {
    Navigate('/addRequirement')
  }

  return (

    <div className="wrapper">
      {/* Preloader */}
      {/* <div className="preloader flex-column justify-content-center align-items-center">
        <img className="animation__shake" src="dist/img/AdminLTELogo.png" alt="AdminLTELogo" height={60} width={60} />
      </div> */}

      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="brand-link">
          <img src={`https://robohash.org/${4}?200x200`} alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light">Project Manager</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src={`https://robohash.org/${5}?200x200`} className="img-circle elevation-2" alt="User" />
            </div>
            <div className="info">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a className="d-block">{User.name}</a>

            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input className="form-control form-control-sidebar" type="search" placeholder="Search" aria-label="Search" />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
              {/* Add icons to the links using the .nav-icon class
             with font-awesome or any other icon font library */}
              {/* <li className="nav-item menu-open">
                <a className="nav-link active">
                  <i className="nav-icon fas fa-tachometer-alt" />
                  <p>
                    Dashboard
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="./index.html" className="nav-link active">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v1</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./index2.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="./index3.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Dashboard v3</p>
                    </a>
                  </li>
                </ul>
              </li> */}


              {/* <li className="nav-item menu-open">
                <button className="nav-link btn btn-link text-left">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Projects
                    <i className="fas fa-angle-left right" />
                  </p>
                </button>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <button onClick={onViewAllProjectsClick} className="nav-link btn btn-link text-left ">
                      <i className="far fa-circle nav-icon" />
                      <p>View Projects</p>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button onClick={onAddAProjectClick} className="nav-link btn btn-link text-left">
                      <i className="far fa-circle nav-icon" />
                      <p>Add a New Project</p>
                    </button>
                  </li>
                </ul>
              </li> */}
              <li className="nav-header"><h4>Projects</h4></li>
              <li className="nav-item">
                <button onClick={onViewAllProjectsClick} className="nav-link btn btn-link text-left ">
                  <i className="nav-icon fas fa-list" />
                  <b>
                    Projects List
                  </b>
                </button>
              </li>
              <li className="nav-item">
                <button onClick={onAddAProjectClick} className="nav-link btn btn-link text-left">
                  <i className="nav-icon fas fa-plus" />
                  <b>
                    Add a New Project
                  </b>
                </button>
              </li>

              <li className="nav-header"><h4>Clients</h4></li>
              <li className="nav-item">
                <button onClick={onViewAllClientsClick} className="nav-link btn btn-link text-left ">
                  <i className="nav-icon fas fa-columns" />
                  <b>
                    Clients List
                  </b>
                </button>
              </li>
              <li className="nav-item">
                <button onClick={onAddAClientClick} className="nav-link btn btn-link text-left">
                  <i className="nav-icon fas fa-book" />
                  <b>
                    Add a New Client
                  </b>
                  <li className="nav-item " >
                    <div>
                    <button className="nav-link btn btn-link text-left">
                      <i className="nav-icon fas fa-plus" />
                      <p>
                      Corporate Client
                      </p>
                    </button>
                    <button className="nav-link btn btn-link text-left">
                      <i className="nav-icon fas fa-plus" />
                      <p>
                      Physical Client
                      </p>
                    </button>
                    </div>
                  </li>
                </button>

              </li>
              <li className="nav-header"><h4>Requirements</h4></li>
              <li className="nav-item">
                <button onClick={onViewAllRequirementsClick} className="nav-link btn btn-link text-left ">
                  <i className="nav-icon fas fa-list" />
                  <b>
                    Requirements List
                  </b>
                </button>
              </li>
              <li className="nav-item">
                <button onClick={onAddARequirementClick} className="nav-link btn btn-link text-left">
                  <i className="nav-icon fas fa-plus" />
                  <b>
                    Add a New Requirement
                  </b>
                </button>
              </li>


              {/* 
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <i className="nav-icon far fa-plus-square" />
                  <p>
                    Extras
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Login &amp; Register v1
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/examples/login.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Login v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/register.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Register v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/forgot-password.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Forgot Password v1</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/recover-password.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Recover Password v1</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Login &amp; Register v2
                        <i className="fas fa-angle-left right" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="pages/examples/login-v2.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Login v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/register-v2.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Register v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/forgot-password-v2.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Forgot Password v2</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="pages/examples/recover-password-v2.html" className="nav-link">
                          <i className="far fa-circle nav-icon" />
                          <p>Recover Password v2</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/lockscreen.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Lockscreen</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/legacy-user-menu.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Legacy User Menu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/language-menu.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Language Menu</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/404.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Error 404</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/500.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Error 500</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/pace.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Pace</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/blank.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Blank Page</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="starter.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Starter Page</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <i className="nav-icon fas fa-search" />
                  <p>
                    Search
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/search/simple.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Simple Search</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/search/enhanced.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Enhanced</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-header">MISCELLANEOUS</li>
              <li className="nav-item">
                <a href="iframe.html" className="nav-link">
                  <i className="nav-icon fas fa-ellipsis-h" />
                  <p>Tabbed IFrame Plugin</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="https://adminlte.io/docs/3.1/" className="nav-link">
                  <i className="nav-icon fas fa-file" />
                  <p>Documentation</p>
                </a>
              </li>
              <li className="nav-header">MULTI LEVEL EXAMPLE</li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Level 1</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <i className="nav-icon fas fa-circle" />
                  <p>
                    Level 1
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>
                        Level 2
                        <i className="right fas fa-angle-left" />
                      </p>
                    </a>
                    <ul className="nav nav-treeview">
                      <li className="nav-item">
                        <a href="/#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </a>
                      </li>
                      <li className="nav-item">
                        <a href="/#" className="nav-link">
                          <i className="far fa-dot-circle nav-icon" />
                          <p>Level 3</p>
                        </a>
                      </li>
                    </ul>
                  </li>
                  <li className="nav-item">
                    <a href="/#" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Level 2</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <i className="fas fa-circle nav-icon" />
                  <p>Level 1</p>
                </a>
              </li>
              <li className="nav-header">LABELS</li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <i className="nav-icon far fa-circle text-danger" />
                  <p className="text">Important</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <i className="nav-icon far fa-circle text-warning" />
                  <p>Warning</p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <i className="nav-icon far fa-circle text-info" />
                  <p>Informational</p>
                </a>
              </li> */}
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>

      {/* /.content-wrapper */}

      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
      {/* /.control-sidebar */}
    </div>


  )
}

export default Menu