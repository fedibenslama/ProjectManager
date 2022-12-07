import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";

function Classification() {
    const [isLoading, setIsloading] = useState(false);
    const [formData, setFormData] = useState("");
    const [result, setResult] = useState("");


    const handleChange = (event) => {
        event.preventDefault();
        const value = event.target.value;
        const name = event.target.name;
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
        <Container>

            <div>
                <h1 className="title">Feedbacks Classifier</h1>
            </div>
            <div className="content">
                <Form>
                    <Form.Row>
                        <Form.Group as={Col}>
                            <Form.Label>Client Feedback</Form.Label>
                            {/* <Form.Control
                                as="text"
                                value={formData}
                                name="formData"
                                onChange={handleChange}>
                                {formData}
                            </Form.Control> */}
                            <input
                                type="text"
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
                        <Col className="result-container">
                            <h5 id="result">{result}</h5>
                        </Col>
                    </Row>)
                }
            </div>
        </Container>
    );

}

export default Classification