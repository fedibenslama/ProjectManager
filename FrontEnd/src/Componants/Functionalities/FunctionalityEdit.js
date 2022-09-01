import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";


function FunctionalityEdit({ FunctionalitiesInfo, setFunctionalitiesInfo, EditFunctionalityData, setEditFunctionalityData, EditFunctionalityId, setEditFunctionalityId }) {

    //----------------------Functionality Edit---------------------------------

    let navigate = useNavigate()

    const onCancelClick = () => {
        navigate('/Functionalities')
    }

    const onFunctionalityEditChange = (event) => {
        event.preventDefault();
        const fieldName = event.target.getAttribute('name');
        const fieldValue = event.target.value;

        const NewFunctionalityData = { ...EditFunctionalityData };
        NewFunctionalityData[fieldName] = fieldValue;

        setEditFunctionalityData(NewFunctionalityData)
    }
    const onFunctionalityEditSubmit = (event) => {
        event.preventDefault();

        const editedFunctionality = {
            id: EditFunctionalityId,
            FuncTitle: EditFunctionalityData.FuncTitle,
            FuncIdCode: EditFunctionalityData.FuncIdCode,
            FuncDescription: EditFunctionalityData.FuncDescription,
            FuncStatus: EditFunctionalityData.FuncStatus,
            FuncAssociatedReq: EditFunctionalityData.FuncAssociatedReq,
            FuncAssociatedTasks: EditFunctionalityData.FuncAssociatedTasks,
            FuncAssociatedMemb: EditFunctionalityData.FuncAssociatedMemb,
            FuncStartDate: EditFunctionalityData.FuncStartDate,
            FuncFinishDate: EditFunctionalityData.FuncFinishDate,
            FuncDuration: EditFunctionalityData.FuncDuration,
        }
        const NewFunctionalities = [...FunctionalitiesInfo]
        const index = FunctionalitiesInfo.findIndex((FunctionalityInfo) => FunctionalityInfo.id === EditFunctionalityId);
        NewFunctionalities[index] = editedFunctionality;
        setFunctionalitiesInfo(NewFunctionalities)
        setEditFunctionalityId(null)

        fetch('http://localhost:3001/EditFunctionality', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: EditFunctionalityId,
                FuncTitle: EditFunctionalityData.FuncTitle,
                FuncIdCode: EditFunctionalityData.FuncIdCode,
                FuncDescription: EditFunctionalityData.FuncDescription,
                FuncStatus: EditFunctionalityData.FuncStatus,
                FuncAssociatedReq: EditFunctionalityData.FuncAssociatedReq,
                FuncAssociatedTasks: EditFunctionalityData.FuncAssociatedTasks,
                FuncAssociatedMemb: EditFunctionalityData.FuncAssociatedMemb,
                FuncStartDate: EditFunctionalityData.FuncStartDate,
                FuncFinishDate: EditFunctionalityData.FuncFinishDate,
                FuncDuration: EditFunctionalityData.FuncDuration,

            })
        })
            .then(response => response.json())

    }

    /////////////////////////////////////////

    const onFunctionalityEditSubmitAndClose = (event) => {
        event.preventDefault();
        const editedFunctionality = {
            id: EditFunctionalityId,
            FuncTitle: EditFunctionalityData.FuncTitle,
            FuncIdCode: EditFunctionalityData.FuncIdCode,
            FuncDescription: EditFunctionalityData.FuncDescription,
            FuncStatus: EditFunctionalityData.FuncStatus,
            FuncAssociatedReq: EditFunctionalityData.FuncAssociatedReq,
            FuncAssociatedTasks: EditFunctionalityData.FuncAssociatedTasks,
            FuncAssociatedMemb: EditFunctionalityData.FuncAssociatedMemb,
            FuncStartDate: EditFunctionalityData.FuncStartDate,
            FuncFinishDate: EditFunctionalityData.FuncFinishDate,
            FuncDuration: EditFunctionalityData.FuncDuration,
        }
        const NewFunctionalities = [...FunctionalitiesInfo]
        const index = FunctionalitiesInfo.findIndex((FunctionalityInfo) => FunctionalityInfo.id === EditFunctionalityId);
        NewFunctionalities[index] = editedFunctionality;
        setFunctionalitiesInfo(NewFunctionalities)
        setEditFunctionalityId(null)

        fetch('http://localhost:3001/EditFunctionality', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: EditFunctionalityId,
                FuncTitle: EditFunctionalityData.FuncTitle,
                FuncIdCode: EditFunctionalityData.FuncIdCode,
                FuncDescription: EditFunctionalityData.FuncDescription,
                FuncStatus: EditFunctionalityData.FuncStatus,
                FuncAssociatedReq: EditFunctionalityData.FuncAssociatedReq,
                FuncAssociatedTasks: EditFunctionalityData.FuncAssociatedTasks,
                FuncAssociatedMemb: EditFunctionalityData.FuncAssociatedMemb,
                FuncStartDate: EditFunctionalityData.FuncStartDate,
                FuncFinishDate: EditFunctionalityData.FuncFinishDate,
                FuncDuration: EditFunctionalityData.FuncDuration,

            })
        })
            .then(response => response.json())
            .then(edit => {
                navigate('/Functionalities')
            })




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
                                <h1>Functionality Edit</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="/Functionalities">Home</a></li>
                                    <li className="breadcrumb-item active">Functionality Edit</li>
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
                                            onChange={onFunctionalityEditChange}
                                            value={EditFunctionalityData.FuncTitle}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="FuncIdCode">ID Code</label>
                                        <input
                                            type="text"
                                            id="FuncIdCode"
                                            className="form-control"
                                            name="FuncIdCode"
                                            onChange={onFunctionalityEditChange}
                                            value={EditFunctionalityData.FuncIdCode} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="FuncDescription">Description</label>
                                        <textarea id="FuncDescription"
                                            className="form-control"
                                            rows={4}
                                            name="FuncDescription"
                                            onChange={onFunctionalityEditChange}
                                            value={EditFunctionalityData.FuncDescription} />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="FuncStatus">Status</label>
                                        <select
                                            id="FuncStatus"
                                            className="form-control custom-select"
                                            onChange={onFunctionalityEditChange}
                                            name="FuncStatus"
                                        >

                                            <option selected disabled> {EditFunctionalityData.FuncStatus}</option>
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
                                            onChange={onFunctionalityEditChange}
                                            value={EditFunctionalityData.FuncAssociatedReq} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="FuncAssociatedTasks">Associated Task(s)</label>
                                        <input type="text"
                                            id="FuncAssociatedTasks"
                                            className="form-control"
                                            name="FuncAssociatedTasks"
                                            onChange={onFunctionalityEditChange}
                                            value={EditFunctionalityData.FuncAssociatedTasks} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="FuncAssociatedMemb">Associated Member(s)</label>
                                        <input type="text"
                                            id="FuncAssociatedMemb"
                                            className="form-control"
                                            name="FuncAssociatedMemb"
                                            onChange={onFunctionalityEditChange}
                                            value={EditFunctionalityData.FuncAssociatedMemb} />
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
                                            onChange={onFunctionalityEditChange}
                                            value={EditFunctionalityData.FuncDuration} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="FuncStartDate">Start Date</label>
                                        <input type="date"
                                            id="FuncStartDate"
                                            className="form-control"
                                            name="FuncStartDate"
                                            onChange={onFunctionalityEditChange}
                                            value={EditFunctionalityData.FuncStartDate} />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="FuncFinishDate">Finish Date</label>
                                        <input type="date"
                                            id="FuncFinishDate"
                                            className="form-control"
                                            name="FuncFinishDate"
                                            onChange={onFunctionalityEditChange}
                                            value={EditFunctionalityData.FuncFinishDate} />
                                    </div>
                                    <button type="submit"
                                        defaultValue="Create new Functionality"
                                        className="btn btn-info "
                                        onClick={onFunctionalityEditSubmit} >
                                        Save And Continue
                                    </button>
                                </div>

                                {/* /.card-body */}
                            </div>
                            {/* /.card */}
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <button className="btn btn-secondary" onClick={onCancelClick}>Cancel</button>

                            <button type="submit"
                                defaultValue="Create new Functionality"
                                className="btn btn-success float-right"
                                onClick={onFunctionalityEditSubmitAndClose} >
                                Save And Go Back

                            </button>

                        </div>
                    </div>
                </section>
                {/* /.content */}
            </div>

        </div>


    )
}

export default FunctionalityEdit