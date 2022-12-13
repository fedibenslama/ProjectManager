/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import Plot from 'react-plotly.js';

function MultiClassification() {
    const [isLoading2, setIsloading2] = useState(false);
    const [formData2, setFormData2] = useState("");
    const [result2, setResult2] = useState("");
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
        // let inputData = { ...formData2 };
        // inputData[name] = value;
        setFormData2(value);
    }


    const handlePredictClick = (event) => {
        //const proxyurl = "https://salty-reaches-05509.herokuapp.com/";
        const url = "http://localhost:5000/classify";
        setIsloading2(true);
        fetch(url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(formData2)
            })  //https://salty-reaches-05509.herokuapp.com/http://127.0.0.1:5000/prediction
            .then(response => response.json())
            .then(response => {
                setResult2(response.result2);
                setIsloading2(false);
            });
    }

    const handleCancelClick = (event) => {
        setResult2("");
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
                                    id="formData2"
                                    value={formData2}
                                    className="form-control"
                                    name="formData2"
                                    onChange={handleChange} />

                            </Form.Group>
                        </Form.Row>
                        <Row>
                            <Col>
                                <Button
                                    block
                                    variant="success"
                                    disabled={isLoading2}
                                    onClick={!isLoading2 ? handlePredictClick : null}>
                                    {isLoading2 ? 'Making prediction' : 'Predict'}
                                </Button>
                            </Col>
                            <Col>
                                <Button

                                    block
                                    variant="danger"
                                    disabled={isLoading2}
                                    onClick={handleCancelClick}>
                                    Reset prediction
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    {result2 === "" ? null :
                        (<Row>
                            <Col className="result2-div">
                                <h5 id="result2">{result2}</h5>
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

export default MultiClassification