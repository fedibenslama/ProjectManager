/* eslint-disable jsx-a11y/anchor-is-valid */
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
  const onViewAllFunctionalitiesClick = () => {
    Navigate('/functionalities')
  }
  const onAddAFunctionalityClick = () => {
    Navigate('/addFunctionality')
  }
  const onViewAllMembersClick = () => {
    Navigate('/members')
  }
  const onViewAllMembersTableClick = () => {
    Navigate('/MembersList')
  }
  const onAddAMemberClick = () => {
    Navigate('/addMember')
  }
  const onViewAllTasksClick = () => {
    Navigate('/tasks')
  }
  const onAddATaskClick = () => {
    Navigate('/addTask')
  }
  const onCalendarClick = () => {
    Navigate('/Calendar')
    window.location.reload(false);
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
          <img src={`https://as2.ftcdn.net/v2/jpg/02/07/61/59/1000_F_207615915_ZJ5pYUiNQvnmfMus0utZh9le8xj5DpJd.jpg?300x300`} alt="ProjectManager Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light">Project Manager</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src={`https://cdn-icons-png.flaticon.com/512/3135/3135715.png?200x200`} className="img-circle elevation-2" alt="User" />
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
             
              <li className="nav-item menu-close ">
                
                <a className="nav-link">
                  <i className="nav-icon fas fa-users" />
                  <p>
                    Members
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <button onClick={onViewAllMembersClick} className="nav-link btn btn-link text-left">
                      <i className="far fa-circle nav-icon" />
                      <p>Members List</p>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button onClick={onViewAllMembersTableClick} className="nav-link btn btn-link text-left">
                      <i className="far fa-circle nav-icon" />
                      <p>Members Table</p>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button onClick={onAddAMemberClick} className="nav-link btn btn-link text-left">
                      <i className="far fa-circle nav-icon" />
                      <p>Add New Member</p>
                    </button>
                  </li>
                </ul>
              </li>

{/* // Projects // */}
<li className="nav-item menu-close ">
                
                <a className="nav-link">
                  <i className="nav-icon fas fa-sitemap" />
                  <p>
                    Projects
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <button onClick={onViewAllProjectsClick} className="nav-link btn btn-link text-left">
                      <i className="far fas fa-list nav-icon" />
                      <p>Projects List</p>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button onClick={onAddAProjectClick} className="nav-link btn btn-link text-left">
                      <i className="far fas fa-plus nav-icon" />
                      <p>Add New Project</p>
                    </button>
                  </li>
                </ul>
              </li>
{/* //Clients// */}
<li className="nav-item menu-close ">
                
                <a className="nav-link">
                  <i className="nav-icon fas fa-address-card" />
                  <p>
                    Clients
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <button onClick={onViewAllClientsClick} className="nav-link btn btn-link text-left">
                      <i className="far fas fa-list nav-icon" />
                      <p>Clients List</p>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button onClick={onAddAClientClick} className="nav-link btn btn-link text-left">
                      <i className="far fas fa-plus  nav-icon" />
                      <p>Add New Client</p>
                    </button>
                  </li>
                </ul>
              </li>
{/* //Clients// */}
{/* //Requirement// */}
<li className="nav-item menu-close ">
                
                <a className="nav-link">
                  <i className="nav-icon fas fa-business-time" />
                  <p>
                  Requirements
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <button onClick={onViewAllRequirementsClick} className="nav-link btn btn-link text-left">
                      <i className="far fas fa-list nav-icon" />
                      <p>Requirements List</p>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button onClick={onAddARequirementClick} className="nav-link btn btn-link text-left">
                      <i className="far fas fa-plus  nav-icon" />
                      <p>Add New Requirement</p>
                    </button>
                  </li>
                </ul>
              </li>
{/* //Requirement// */}
{/* //Functionalities// */}
<li className="nav-item menu-close ">
                
                <a className="nav-link">
                  <i className="nav-icon fas fa-project-diagram" />
                  <p>
                  Functionalities
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <button onClick={onViewAllFunctionalitiesClick} className="nav-link btn btn-link text-left">
                      <i className="far fas fa-list nav-icon" />
                      <p>Functionalities List</p>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button onClick={onAddAFunctionalityClick} className="nav-link btn btn-link text-left">
                      <i className="far fas fa-plus  nav-icon" />
                      <p>Add New Functionality</p>
                    </button>
                  </li>
                </ul>
              </li>
{/* //Functionalities// */}
{/* //Tasks// */}
<li className="nav-item menu-close ">
                
                <a className="nav-link">
                  <i className="nav-icon fas fa-tasks" />
                  <p>
                  Tasks
                    <i className="right fas fa-angle-left" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <button onClick={onViewAllTasksClick} className="nav-link btn btn-link text-left">
                      <i className="far fas fa-list nav-icon" />
                      <p>Tasks List</p>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button onClick={onAddATaskClick} className="nav-link btn btn-link text-left">
                      <i className="far fas fa-plus  nav-icon" />
                      <p>Add a New Task</p>
                    </button>
                  </li>
                </ul>
              </li>
              <li class="nav-item">
            <button onClick={onCalendarClick} className="nav-link btn btn-link text-left">
              <i className="nav-icon far fas fa-calendar-alt"></i>
              <p>
                Calendar
              </p>
            </button>
          </li>
{/* //Tasks// */}

{/*             
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
              </li> */}

              {/* <li className="nav-header"><h4>Clients</h4></li>
              <li className="nav-item">
                <button onClick={onViewAllClientsClick} className="nav-link btn btn-link text-left ">
                  <i className="nav-icon fas fa-list" />
                  <b>
                    Clients List
                  </b>
                </button>
              </li>
              <li className="nav-item">
                <button onClick={onAddAClientClick} className="nav-link btn btn-link text-left">
                  <i className="nav-icon fas fa-plus " />
                  <b>
                    Add a New Client
                  </b>
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
              <li className="nav-header"><h4>Functionalities</h4></li>
              <li className="nav-item">
                <button onClick={onViewAllFunctionalitiesClick} className="nav-link btn btn-link text-left ">
                  <i className="nav-icon fas fa-list" />
                  <b>
                    Functionalities List
                  </b>
                </button>
              </li>
              <li className="nav-item">
                <button onClick={onAddAFunctionalityClick} className="nav-link btn btn-link text-left">
                  <i className="nav-icon fas fa-plus" />
                  <b>
                    Add a New Functionality
                  </b>
                </button>
              </li>
              <li className="nav-header"><h4>Tasks</h4></li>
              <li className="nav-item">
                <button onClick={onViewAllTasksClick} className="nav-link btn btn-link text-left ">
                  <i className="nav-icon fas fa-list" />
                  <b>
                    Tasks List
                  </b>
                </button>
              </li>
              <li className="nav-item">
                <button onClick={onAddATaskClick} className="nav-link btn btn-link text-left">
                  <i className="nav-icon fas fa-plus" />
                  <b>
                    Add a New Task
                  </b>
                </button>
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