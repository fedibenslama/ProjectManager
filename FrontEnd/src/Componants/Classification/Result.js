/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Fragment } from "react";

function Result({ ResultInfo, setResultInfo, setEditResultData, setEditResultId }) {
    // eslint-disable-next-line no-unused-vars
    const [ViewResultId, setViewResultId] = useState(null)

    let navigatee = useNavigate()

    useEffect(() => {
        fetch('http://localhost:3001/Result')
            .then(response => {
                return response.json();
            })
            .then(Result => {

                setResultInfo(Result)
            })

    }, [setResultInfo])




    const onAddResultClick = () => {
        navigatee('/addResult')
    }

    const onResultViewClick = (event, ResultInfo) => {
        event.preventDefault();
        setViewResultId(ResultInfo.id)
        navigatee(`/ViewResult/${ResultInfo.id}`)

    }

    const onResultEditClick = (event, ResultInfo) => {
        event.preventDefault();
        setEditResultId(ResultInfo.id)
        navigatee("/EditResult")
        const ResultValue = {
            ResultName: ResultInfo.Resultname,
            ResultId: ResultInfo.Resultid,
            ResultTelephoneNumber: ResultInfo.Resulttelephonenumber,
            ResultEmail: ResultInfo.Resultemail,
            ResultAddress: ResultInfo.Resultaddress,
            ResultAssociatedRoles: ResultInfo.Resultassociatedroles,
            ResultAccumulatedExp: ResultInfo.Resultaccumulatedexp
        }

        setEditResultData(ResultValue)
    }
    const onResultDeleteClick = (ResultId) => {

        const NewResult = [...ResultInfo]
        const index = ResultInfo.findIndex((ResultInfo) => ResultInfo.id === ResultId);
        NewResult.splice(index, 1);
        navigatee("/Result")
        setResultInfo(NewResult)

        fetch('http://localhost:3001/DeleteResult', {
            method: 'put',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                id: ResultId

            })
        })
            .then(response => response.json())
            .catch(console.log)
    }

    return (
        <div>
            <Menu />
            <Navbar />
            <div className="content-wrapper">
                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Result</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a >Home</a></li>
                                    <li className="breadcrumb-item active">Result</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
               {/* ////////////////////////// */}
               
  <div>
  <title />
  <link rel="stylesheet" type="text/css" href="{{ url_for('static', filename='css/styles.css') }}" />
  <header>
    <div className="container">
      <div id="brandname">ML App</div>
      <h2>Spam Detector For SMS Messages</h2>
    </div>
  </header>
  <p style={{color: 'blue', fontSize: 20, textAlign: 'center'}}>
    <b>Results for Comment</b>
  </p>
  <div className="results">
    <h2 style={{color: 'red'}}>{'{'}{'{'} prediction {'}'}{'}'}</h2>
  </div>
</div>


               {/* ////////////////////////// */}

            </div>
        </div>

    )

}

export default Result