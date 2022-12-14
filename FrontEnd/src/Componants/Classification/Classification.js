/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import Plot from 'react-plotly.js';

function Classification() {
    const [isLoading, setIsloading] = useState(false);
    const [formData, setFormData] = useState("");
    const [result, setResult] = useState("");
    ////////// Plot ////////
    const [plot, setPlot] = useState(0);

    useEffect(() => {
        fetch('http://localhost:5000/plot').then(res => res.json()).then(data => { setPlot(data); });
    }, []);
    
    ////////////////////

    const handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        // const name = event.target.name;
        // let inputData = { ...formData };
        // inputData[name] = value;
        setFormData(value);
    }


    const handlePredictClick = (event) => {
        //const proxyurl = "https://salty-reaches-05509.herokuapp.com/";
        const url = "http://localhost:5000/predict";
        setIsloading(true);
        fetch(url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(formData)
            })  //https://salty-reaches-05509.herokuapp.com/http://127.0.0.1:5000/prediction
            .then(response => response.json())
            .then(response => {
                setResult(response.result);
                setIsloading(false);
            });
    }

    const handleCancelClick = (event) => {
        setResult("");
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
                                <h1>Members</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a >Home</a></li>
                                    <li className="breadcrumb-item active">Members</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                <div>
                    <h1 className="title">Feedbacks Classifier</h1>
                </div>
                <div className="content">
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col}>
                                <Form.Label>Client Feedback</Form.Label>
                                <input
                                    placeholder='Put The Client Feedback Here To Analyze '
                                    type="textarea"
                                    id="formData"
                                    value={formData}
                                    className="form-control"
                                    name="formData"
                                    onChange={handleChange} />

                            </Form.Group>
                        </Form.Row>
                        <Row>
                            <Col>
                                <Button
                                    block
                                    variant="success"
                                    disabled={isLoading}
                                    onClick={!isLoading ? handlePredictClick : null}>
                                    {isLoading ? 'Making prediction' : 'Predict'}
                                </Button>
                            </Col>
                            <Col>
                                <Button

                                    block
                                    variant="danger"
                                    disabled={isLoading}
                                    onClick={handleCancelClick}>
                                    Reset prediction
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    {result === "" ? null :
                        (<Row>
                            <Col className="result-div">
                                <h5 id="result">{result}</h5>
                            </Col>
                        </Row>)
                    }
                </div>
                {/* //////////////////// */}
                <div className='content'>
                    <h1>Current Fund</h1>
                    <Plot data={plot.data} layout={plot.layout} />
                </div>
                {/* //////////////////// */}
            </div>
        </div>
    );

}

export default Classification