/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

const Projects = () => {
    return (

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
                            <th >
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                #
                            </td>
                            <td>
                                <a>
                                    Project 1
                                </a>
                                <br />
                                <small>
                                    Created 7/30/2022
                                </small>
                            </td>

                            <td className="Type">
                                <a>
                                    Type
                                </a>
                            </td>
                            <td className="Used Solutions">
                                <a>
                                    Used Solutions
                                </a>
                            </td>
                            <td className="Associated Servers">
                                <a>
                                    Associated Servers
                                </a>
                            </td>
                            <td className="Associated Client">
                                <a>
                                    Associated Client
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
                                <span className="badge badge-success">Success</span>
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
                                <a className="btn btn-danger btn-sm" href="/#">
                                    <i className="fas fa-trash">
                                    </i>
                                    Delete
                                </a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

        </div>



    )
}

export default Projects