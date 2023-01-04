/* eslint-disable jsx-a11y/anchor-is-valid */
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';


function Clientfeedbacks() {
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
            <Navbar />
            <Menu />
            <div className="content-wrapper">

                {/* Content Header (Page header) */}
                <section className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-6">
                                <h1>Client's Feedbacks</h1>
                            </div>
                            <div className="col-sm-6">
                                <ol className="breadcrumb float-sm-right">
                                    <li className="breadcrumb-item"><a href="#">Home</a></li>
                                    <li className="breadcrumb-item active">Client's Feedbacks</li>
                                </ol>
                            </div>
                        </div>
                    </div>{/* /.container-fluid */}
                </section>
                {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">


                                </div>
                                {/* /.card */}
                                <div className="card">

                                    <div className="card-header">
                                        <h3 className="card-title">List Of Client's Feedbacks</h3>
                                    </div>
                                    {/* /.card-header */}
                                    <div className="card-body">
                                        <table id="example2" className="table table-bordered table-striped">
                                            <thead>
                                                <tr>
                                                    <th>Feedback</th>
                                                    <th>Client</th>
                                                    <th>Associated Employee</th>
                                                    <th>Associated Project</th>
                                                </tr>
                                            </thead>
                                            <tbody>

                                                <tr>
                                                    <td>Even though Fedi is a senior associate, he turns in work product that consistently seems like it's come from a first-year associate. He makes careless mistakes and never checks his spelling or grammar. She is hesitant and shy about speaking with clients even though that should be a key part of her role at this level. It frequently takes her hours to complete an assignment that should take 20 minutes or less. Moreover, Fedi never listens to my feedback or takes it seriously so I cannot imagine that his future at this company will last for much longer.</td>
                                                    <td>Daniel Stroman</td>
                                                    <td>Fedi Ben Slama</td>
                                                    <td>Text Classification</td>
                                                </tr>
                                                <tr>
                                                    <td>Mariem is an excellent employee. She performs well in all the responsibilities of her position. She can be counted on to meet expectations. Mariem shows great potential for future advancement</td>
                                                    <td>Billy M. Rodriguez</td>
                                                    <td>Mariem Ahmed</td>
                                                    <td>Spam Detection</td>
                                                </tr>
                                                <tr>
                                                    <td>Isabella is an excellent worker. She is organized, detail-oriented, and efficient. Isabella consistently seeks feedback and takes constructive criticism well. When something does not come easily to her, she perseveres until she is an expert.</td>
                                                    <td>Jacqueline Roy</td>
                                                    <td>Isabella James</td>
                                                    <td>Visualising and forecasting stocks</td>
                                                </tr>
                                                <tr>
                                                    <td>Nada has had a slow start at our project, her output is less than standard.  Nada may benefit from additional training and/or goal setting.  Nada will need to pick up her pace if she would like to continue to progress at the project.  Suggest review in 3 months to see if any improvements have occurred.</td>
                                                    <td>Coastal Collaboratives</td>
                                                    <td>Nada Mohamed</td>
                                                    <td>Project Management Platform</td>
                                                </tr>



                                            </tbody>

                                        </table>
                                    </div>

                                    {/* /.card-body */}
                                </div>
                                {/* /.card */}
                            </div>
                            {/* /.col */}
                        </div>
                        {/* /.row */}
                    </div>
                    {/* /.container-fluid */}
                </section>
                {/* /.content */}

            </div>
            <div>
                <div className="content-wrapper">
                    {/* Content Header (Page header) */}
                    <div>
                        <h1 className="title text-center">Feedbacks Classifier</h1>
                    </div>
                    <div className="content">
                        <Form>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <input
                                        placeholder='Put The Client Feedback Here To Analyze Using Machine Learning '
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
                                        // className="mb-3"
                                        disabled={isLoading}
                                        onClick={!isLoading ? handlePredictClick : null}>
                                        {isLoading ? 'Making prediction' : 'Predict'}
                                    </Button>
                                </Col>
                                <Col>
                                    <Button
                                        // className="mb-3"
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
                    {/* <div className='content'>
                    <h1>Current Fund</h1>
                    <Plot data={plot.data} layout={plot.layout} />
                </div> */}
                    {/* //////////////////// */}
                </div>
            </div>
        </div>





    )
}

export default Clientfeedbacks