/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Fragment } from "react";

const Projects = ({ ProjectsInfo, EditProjectId, onProjectEditClick, onProjectEditChange, EditProjectData, onProjectEditSubmit, onProjectCancelClick, onProjectDeleteClick }) => {
    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Projects</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Home</a></li>
                                <li className="breadcrumb-item active">Projects</li>
                            </ol>
                        </div>
                    </div>
                </div>{/* /.container-fluid */}
            </section>


            <div className="card">
                <div className="card-header">
                    <h3 className="card-title">Projects</h3>
                    <div className="card-tools">
                        <button type="button" className="btn btn-tool" data-card-widget="collapse" title="Collapse">
                            <i className="fas fa-minus" />
                        </button>
                        <button type="button" className="btn btn-tool" data-card-widget="remove" title="Remove">
                            <i className="fas fa-times" />
                        </button>
                    </div>
                </div>
                <div className="card-body p-0">
                    <table className="table table-striped projects">
                        <thead>
                            <tr>
                                <th style={{ width: '1%' }}>
                                    #
                                </th>
                                <th >
                                    Project Name
                                </th>
                                <th >
                                    Type
                                </th>
                                <th className="text-center">
                                    Used Solutions
                                </th>
                                <th className="text-center">
                                    Associated Servers
                                </th>
                                <th  >
                                    Associated Client
                                </th>
                                <th  >
                                    Project Progress
                                </th>
                                <th className="text-center">
                                    Status
                                </th>
                                <th Style={{ width: '20%' }}>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {ProjectsInfo.map((ProjectInfo, i) => (
                                <Fragment>
                                    <tr>
                                        <td>
                                            #
                                        </td>
                                        <td>
                                            <a>
                                                {ProjectInfo.name}
                                            </a>
                                            <br />
                                            <small>
                                                Created 7/30/2022
                                            </small>
                                        </td>

                                        <td className="Type">
                                            <a>
                                                {ProjectInfo.type}
                                            </a>
                                        </td>
                                        <td className="Used Solutions">
                                            <a>
                                                {ProjectInfo.usedsolutions}
                                            </a>
                                        </td>
                                        <td className="Associated Servers">
                                            <a>
                                                {ProjectInfo.associatedservers}
                                            </a>
                                        </td>
                                        <td className="Associated Client">
                                            <a>
                                                {ProjectInfo.associatedclient}
                                            </a>
                                        </td>
                                        <td className="project_progress">
                                            <div className="progress progress-sm">
                                                <div className="progress-bar bg-green" role="progressbar" aria-valuenow={57} aria-valuemin={0} aria-valuemax={100} style={{ width: '57%' }}>
                                                </div>
                                            </div>
                                            <small>
                                                57% Complete
                                            </small>
                                        </td>
                                        <td className="project-state">
                                            <span className="badge badge-success">{ProjectInfo.status}</span>
                                        </td>
                                        <td className="project-actions text-right">
                                            <a className="btn btn-primary btn-sm" href="/#">
                                                <i className="fas fa-folder">
                                                </i>
                                                View
                                            </a>
                                            <a className="btn btn-info btn-sm" href="/#">
                                                <i className="fas fa-pencil-alt">
                                                </i>
                                                Edit
                                            </a>
                                            <a
                                                className="btn btn-danger btn-sm"
                                                href="/#"
                                                onClick={() => onProjectDeleteClick(ProjectInfo.id)}>
                                                <i className="fas fa-trash">
                                                </i>
                                                Delete
                                            </a>
                                        </td>
                                    </tr>
                                </Fragment>
                            ))}
                        </tbody>
                    </table>
                </div>
                <div>
                    <footer className="main-footer">
                        <div className="float-right d-none d-sm-block">
                            <b>Version</b> 3.2.0
                        </div>
                        <strong>Copyright © 2014-2021 <a href="https://adminlte.io">AdminLTE.io</a>.</strong> All rights reserved.
                    </footer>

                    <aside className="control-sidebar control-sidebar-dark">

                    </aside>

                </div>
            </div>
        </div>





    )
}

export default Projects