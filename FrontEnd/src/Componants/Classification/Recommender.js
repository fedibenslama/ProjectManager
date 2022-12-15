/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import Plot from 'react-plotly.js';

function Recommender() {
    const [isLoading3, setIsloading3] = useState(false);
    const [formData3, setFormData3] = useState("");
    const [Column0, setColumn0] = useState("");
    const [Column0v1, setColumn0v1] = useState("");
    const [Column0v2, setColumn0v2] = useState("");
    const [Column1, setColumn1] = useState("");
    const [Column1v1, setColumn1v1] = useState("");
    const [Column1v2, setColumn1v2] = useState("");

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
        // let inputData = { ...formData3 };
        // inputData[name] = value;
        setFormData3(value);
    }


    const handlePredictClick = (event) => {
        //const proxyurl = "https://salty-reaches-05509.herokuapp.com/";
        const url = "http://localhost:5000/recommend";
        setIsloading3(true);
        fetch(url,
            {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                body: JSON.stringify(formData3)
            })  //https://salty-reaches-05509.herokuapp.com/http://127.0.0.1:5000/prediction
            .then(response => response.json())
            .then(response => {
                setColumn0(response.column_zero);
                setColumn0v1(response.column_zerov1)
                setColumn0v2(response.column_zerov2)
                setColumn1(response.column_one)
                setColumn1v1(response.column_onev1)
                setColumn1v2(response.column_onev2)

                setIsloading3(false);
            });
    }

    const handleCancelClick = (event) => {
        setColumn0(null);
        setColumn0v1(null)
        setColumn0v2(null)
        setColumn1(null)
        setColumn1v1(null)
        setColumn1v2(null)
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
                                    id="formData3"
                                    value={formData3}
                                    className="form-control"
                                    name="formData3"
                                    onChange={handleChange} />

                            </Form.Group>
                        </Form.Row>
                        <Row>
                            <Col>
                                <Button
                                    block
                                    variant="success"
                                    disabled={isLoading3}
                                    onClick={!isLoading3 ? handlePredictClick : null}>
                                    {isLoading3 ? 'Making prediction' : 'Predict'}
                                </Button>
                            </Col>
                            <Col>
                                <Button

                                    block
                                    variant="danger"
                                    disabled={isLoading3}
                                    onClick={handleCancelClick}>
                                    Reset prediction
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                    {Column0 === "" ? null :
                        (<Row>
                            <Col className="result3-div">
                                <table id="example2" className="table table-bordered table-striped">
                                    <thead>
                                        <tr>
                                            <th>Jobs That Use This Skill</th>
                                            <th>Title</th>
                                            <th>Team Member</th>

                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{Column0}</td>
                                            <td>{Column1} </td>
                                        </tr>
                                        <tr>
                                            <td>{Column0v1}</td>
                                            <td>{Column1v1} </td>
                                        </tr>
                                        <tr>
                                            <td>{Column0v2}</td>
                                            <td>{Column1v2} </td>
                                        </tr>
                                    </tbody>

                                </table>


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

export default Recommender