import React from "react";
import { useState } from "react";
import { nanoid } from 'nanoid';
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";

function FunctionalityAdd({ setFunctionalitiesInfo, FunctionalitiesInfo }) {

    let navigate = useNavigate()

    const [AddFunctionalityData, setAddFunctionalityData] = useState({
        FuncTitle: '',
        FuncIdCode: '',
        FuncDescription: '',
        FuncStatus: '',
        FuncAssociatedReq: '',
        FuncAssociatedTasks: '',
        FuncAssociatedMemb: '',
        FuncStartDate: '',
        FuncFinishDate: '',
        FuncDuration: ''
    })
    const onCancelClick = () => {
        navigate("/Functionalities")
    }
    const onFunctionalityAddChange = (event) => {
        event.preventDefault();

        const fieldName = event.target.getAttribute("name");
        const fieldValue = event.target.value;

        const NewFunctionalityData = { ...AddFunctionalityData }

        NewFunctionalityData[fieldName] = fieldValue;
        setAddFunctionalityData(NewFunctionalityData);

    }
    const onFunctionalityAddSubmit = (event) => {
        event.preventDefault();
        navigate("/Functionalities")
        const newFunctionality = {
            id: nanoid(),
            FuncTitle: AddFunctionalityData.FuncTitle,
            FuncIdCode: AddFunctionalityData.FuncIdCode,
            FuncDescription: AddFunctionalityData.FuncDescription,
            FuncStatus: AddFunctionalityData.FuncStatus,
            FuncAssociatedReq: AddFunctionalityData.FuncAssociatedReq,
            FuncAssociatedTasks: AddFunctionalityData.FuncAssociatedTasks,
            FuncAssociatedMemb: AddFunctionalityData.FuncAssociatedMemb,
            FuncStartDate: AddFunctionalityData.FuncStartDate,
            FuncFinishDate: AddFunctionalityData.FuncFinishDate,
            FuncDuration: AddFunctionalityData.FuncDuration,

        };
        const NewFunctionalities = [...FunctionalitiesInfo, newFunctionality];
        setFunctionalitiesInfo(NewFunctionalities)


        fetch('http://localhost:3001/addFunctionality', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                FuncTitle: AddFunctionalityData.FuncTitle,
                FuncIdCode: AddFunctionalityData.FuncIdCode,
                FuncDescription: AddFunctionalityData.FuncDescription,
                FuncStatus: AddFunctionalityData.FuncStatus,
                FuncAssociatedReq: AddFunctionalityData.FuncAssociatedReq,
                FuncAssociatedTasks: AddFunctionalityData.FuncAssociatedTasks,
                FuncAssociatedMemb: AddFunctionalityData.FuncAssociatedMemb,
                FuncStartDate: AddFunctionalityData.FuncStartDate,
                FuncFinishDate: AddFunctionalityData.FuncFinishDate,
                FuncDuration: AddFunctionalityData.FuncDuration,

            })
        })
            .then(response => response.json())

    }
    return (
        <div>
            <Navbar />
            <Menu />
            {/* Content Wrapper. Contains page content */}
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Functionality Add</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/#">Home</a></li>
                                    <li className="breadcrumb-item active">Functionality Add</li>
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
                                        <label htmlFor="FuncTitle">Title</label>
                                        <input
                                            type="text"
                                            id="FuncTitle"
                                            name="FuncTitle"
                                            className="form-control"
                                            onChange={onFunctionalityAddChange}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="FuncIdCode">ID Code</label>
                                        <input
                                            type="FuncIdCode"
                                            id="FuncIdCode"
                                            className="form-control"
                                            name="FuncIdCode"
                                            onChange={onFunctionalityAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="FuncDescription">Description</label>
                                        <textarea id="FuncDescription"
                                            className="form-control"
                                            rows={4}
                                            defaultValue={""}
                                            name="FuncDescription"
                                            onChange={onFunctionalityAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="FuncStatus">Status</label>
                                        <select
                                            id="FuncStatus"
                                            className="form-control custom-select"
                                            onChange={onFunctionalityAddChange}
                                            name="FuncStatus">
                                            <option selected disabled>Select one</option>
                                            <option>On Hold</option>
                                            <option>Canceled</option>
                                            <option>Success</option>

                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="FuncAssociatedReq">Associated Requirement(s)</label>
                                        <input
                                            type="text"
                                            id="FuncAssociatedReq"
                                            className="form-control"
                                            name="FuncAssociatedReq"
                                            onChange={onFunctionalityAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="FuncAssociatedTasks">Associated Task(s)</label>
                                        <input type="text"
                                            id="FuncAssociatedTasks"
                                            className="form-control"
                                            name="FuncAssociatedTasks"
                                            onChange={onFunctionalityAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="FuncAssociatedMemb">Associated Member(s)</label>
                                        <input type="text"
                                            id="FuncAssociatedMemb"
                                            className="form-control"
                                            name="FuncAssociatedMemb"
                                            onChange={onFunctionalityAddChange} />
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
                                        <label htmlFor="FuncDuration">Duration</label>
                                        <input type="text"
                                            id="FuncDuration"
                                            className="form-control"
                                            name="FuncDuration"
                                            onChange={onFunctionalityAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="FuncStartDate">Start Date</label>
                                        <input type="date"
                                            id="FuncStartDate"
                                            className="form-control"
                                            name="FuncStartDate"
                                            onChange={onFunctionalityAddChange} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="FuncFinishDate">Finish Date</label>
                                        <input type="date"
                                            id="FuncFinishDate"
                                            className="form-control"
                                            name="FuncFinishDate"
                                            onChange={onFunctionalityAddChange} />
                                    </div>
                                </div>
                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button onClick={onCancelClick} className="btn btn-secondary">Cancel</button>

                            <button type="submit"
                                className="btn btn-danger float-right mr-3"
                                onClick={onFunctionalityAddSubmit} > Add New Functionality </button>
                        </div>
                    </div>
                </section>
                {/* /.content */}
            </div>

        </div>

    )
}

export default FunctionalityAdd