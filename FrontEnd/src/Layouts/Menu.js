import {React,useState,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'

function Menu () {


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
    Navigate('/projects')
  }
  const onAddAProjectClick = () => {
    Navigate('/addProject')
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
          <img src="dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
          <span className="brand-text font-weight-light">Project Manager</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img src="dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User" />
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
           

              <li className="nav-item menu-open">
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
                  {/* <li className="nav-item">
                    <a href="pages/tables/jsgrid.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>jsGrid</p>
                    </a>
                  </li> */}
                </ul>
              </li>
              <li className="nav-item menu-open">
                <button className="nav-link btn btn-link text-left">
                  <i className="nav-icon fas fa-table" />
                  <p>
                    Members
                    <i className="fas fa-angle-left right" />
                  </p>
                </button>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <button onClick={onViewAllProjectsClick} className="nav-link btn btn-link text-left ">
                      <i className="far fa-circle nav-icon" />
                      <p>View Members</p>
                    </button>
                  </li>
                  <li className="nav-item">
                    <button onClick={onAddAProjectClick} className="nav-link btn btn-link text-left">
                      <i className="far fa-circle nav-icon" />
                      <p>Add a New Member</p>
                    </button>
                  </li>
                  {/* <li className="nav-item">
                    <a href="pages/tables/jsgrid.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>jsGrid</p>
                    </a>
                  </li> */}
                </ul>
              </li>
              {/* <li className="nav-header">EXAMPLES</li>
              <li className="nav-item">
                <a href="pages/calendar.html" className="nav-link">
                  <i className="nav-icon far fa-calendar-alt" />
                  <p>
                    Calendar
                    <span className="badge badge-info right">2</span>
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/gallery.html" className="nav-link">
                  <i className="nav-icon far fa-image" />
                  <p>
                    Gallery
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="pages/kanban.html" className="nav-link">
                  <i className="nav-icon fas fa-columns" />
                  <p>
                    Kanban Board
                  </p>
                </a>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <i className="nav-icon far fa-envelope" />
                  <p>
                    Mailbox
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/mailbox/mailbox.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Inbox</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/compose.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Compose</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/mailbox/read-mail.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Read</p>
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a href="/#" className="nav-link">
                  <i className="nav-icon fas fa-book" />
                  <p>
                    Pages
                    <i className="fas fa-angle-left right" />
                  </p>
                </a>
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="pages/examples/invoice.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Invoice</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/profile.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Profile</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/e-commerce.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>E-commerce</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/projects.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Projects</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/project-add.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Project Add</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/project-edit.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Project Edit</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/project-detail.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Project Detail</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/contacts.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Contacts</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/faq.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>FAQ</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="pages/examples/contact-us.html" className="nav-link">
                      <i className="far fa-circle nav-icon" />
                      <p>Contact us</p>
                    </a>
                  </li>
                </ul>
              </li>
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