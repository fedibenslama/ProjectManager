import React from "react";

const ProjectAdd = ({ onProjectAddChange, onProjectAddSubmit }) => {
  return (
    <div>
      {/* Content Wrapper. Contains page content */}
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>Project Add</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/#">Home</a></li>
                  <li className="breadcrumb-item active">Project Add</li>
                </ol>
              </div>
            </div>
          </div>{/* /.container-fluid */}
        </section>
        {/* Main content */}
        <section className="content">
          <div className="row">
            <div className="col-md-6">
              <div className="card card-primary">
                <div className="card-header">
                  <h3 className="card-title">General</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                      <i className="fas fa-minus" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="inputName">Project Name</label>
                    <input
                      type="text"
                      id="Name"
                      name="Name"
                      className="form-control"
                      onChange={onProjectAddChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Type">Type</label>
                    <input
                      type="text"
                      id="Type"
                      className="form-control"
                      name="Type"
                      onChange={onProjectAddChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ProjectDescription">Project Description</label>
                    <textarea id="ProjectDescription" 
                    className="form-control" 
                    rows={4} 
                    defaultValue={""} 
                    name="ProjectDescription"
                    onChange={onProjectAddChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputStatus">Status</label>
                    <select
                      id="Status"
                      className="form-control custom-select"
                      onChange={onProjectAddChange}
                      name="Status">
                      <option selected disabled>Select one</option>
                      <option>On Hold</option>
                      <option>Canceled</option>
                      <option>Success</option>

                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="AssociatedClient">Associated Client</label>
                    <input
                      type="text"
                      id="AssociatedClient"
                      className="form-control"
                      name="AssociatedClient"
                      onChange={onProjectAddChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="AssociatedServers">Associated Servers</label>
                    <input type="text"
                      id="AssociatedServers"
                      className="form-control"
                      name="AssociatedServers"
                      onChange={onProjectAddChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="UsedSolutions">Used Solutions</label>
                    <input type="text"
                      id="UsedSolutions"
                      className="form-control"
                      name="UsedSolutions"
                      onChange={onProjectAddChange} />
                  </div>
                  
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
            <div className="col-md-6">
              <div className="card card-secondary">
                <div className="card-header">
                  <h3 className="card-title">Progress</h3>
                  <div className="card-tools">
                    <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                      <i className="fas fa-minus" />
                    </button>
                  </div>
                </div>
                <div className="card-body">
                  <div className="form-group">
                    <label htmlFor="ProjectProgress">Project Progress</label>
                    <input type="number" min={0} max={100}
                      id="ProjectProgress"
                      className="form-control"
                      name="ProjectProgress"
                      onChange={onProjectAddChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="StartDate">Start Date</label>
                    <input type="date"
                      id="StartDate"
                      className="form-control"
                      name="StartDate"
                      onChange={onProjectAddChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="FinishDate">Finish Date</label>
                    <input type="date" 
                    id="FinishDate" 
                    className="form-control"
                    name="FinishDate"
                      onChange={onProjectAddChange} />
                  </div>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <a href="/#" className="btn btn-secondary">Cancel</a>
              <input type="submit"
                defaultValue="Create new Project"
                className="btn btn-success float-right"
                onClick={onProjectAddSubmit} />
            </div>
          </div>
        </section>
        {/* /.content */}
      </div>
      {/* /.content-wrapper */}
      <footer className="main-footer">
        <div className="float-right d-none d-sm-block">
          <b>Version</b> 3.2.0
        </div>
        <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
      </footer>
      {/* Control Sidebar */}
      <aside className="control-sidebar control-sidebar-dark">
        {/* Control sidebar content goes here */}
      </aside>
      {/* /.control-sidebar */}
      {/* ./wrapper */}
    </div>

  )
}

export default ProjectAdd