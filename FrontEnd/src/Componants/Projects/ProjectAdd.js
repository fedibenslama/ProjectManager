/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useState, useEffect } from "react";
import { nanoid } from 'nanoid';
import { useNavigate } from "react-router-dom";
import Navbar from "../../Layouts/Navbar";
import Menu from "../../Layouts/Menu";
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import Plot from 'react-plotly.js';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

function ProjectAdd({ setProjectsInfo, ProjectsInfo }) {


  ///////MULTI CLASS////////////////
  const [isLoading2, setIsloading2] = useState(false);
  const [formData2, setFormData2] = useState("");
  const [result2, setResult2] = useState("");


  const handleBChange = (event) => {
    event.preventDefault();
    const value = event.target.value;
    // const name = event.target.name;
    // let inputData = { ...formData2 };
    // inputData[name] = value;
    setFormData2(value);
  }


  const handleBPredictClick = (event) => {
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

  const handleBCancelClick = (event) => {
    setResult2("");
  }

  //////////////////////////////

  const animatedComponents = makeAnimated();
  const options = [
    { value: 'Fedi Ben Slama', label: 'Fedi Ben Slama' },
    { value: 'Marie', label: 'Marie' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  /////////////Recommender/////////////////
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
  //////////////////////////////

  let navigate = useNavigate()

  const [AddProjectData, setAddProjectData] = useState({
    Name: '',
    Type: '',
    UsedSolutions: '',
    AssociatedServers: '',
    AssociatedClient: '',
    Status: '',
    ProjectProgress: '',
    StartDate: '',
    FinishDate: '',
    ProjectDescription: ''
  })
  const onCancelClick = () => {
    navigate("/")
  }
  const onProjectAddChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const NewProjectData = { ...AddProjectData }

    NewProjectData[fieldName] = fieldValue;
    setAddProjectData(NewProjectData);

  }
  const onProjectAddSubmit = (event) => {
    event.preventDefault();


    const newProject = {
      id: nanoid(),
      Name: AddProjectData.Name,
      Type: AddProjectData.Type,
      UsedSolutions: AddProjectData.UsedSolutions,
      AssociatedServers: AddProjectData.AssociatedServers,
      AssociatedClient: AddProjectData.AssociatedClient,
      Status: AddProjectData.Status,
      ProjectProgress: AddProjectData.ProjectProgress,
      StartDate: AddProjectData.StartDate,
      FinishDate: AddProjectData.FinishDate,
      ProjectDescription: AddProjectData.ProjectDescription

    };
    const NewProjects = [...ProjectsInfo, newProject];
    setProjectsInfo(NewProjects)


    fetch('http://localhost:3001/addProject', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        Name: AddProjectData.Name,
        Type: AddProjectData.Type,
        UsedSolutions: AddProjectData.UsedSolutions,
        AssociatedServers: AddProjectData.AssociatedServers,
        AssociatedClient: AddProjectData.AssociatedClient,
        Status: AddProjectData.Status,
        ProjectProgress: AddProjectData.ProjectProgress,
        StartDate: AddProjectData.StartDate,
        FinishDate: AddProjectData.FinishDate,
        ProjectDescription: AddProjectData.ProjectDescription

      })
    })
      .then(response => response.json())
    navigate("/")
    window.location.reload(false);
    // .then(Project => {
    //   if (Project) {
    //     // this.props.loadProject(Project)
    //     console.log(response)
    //   }
    // })

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
                <h1>Project Add</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item"><a href="/#">Home</a></li>
                  <li className="breadcrumb-item active">Project Add</li>
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
                    <label htmlFor="inputName">Project Name</label>
                    <input
                      type="text"
                      id="Name"
                      name="Name"
                      className="form-control"
                      onChange={onProjectAddChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="Type">Type</label>
                    <input
                      type="text"
                      id="Type"
                      className="form-control"
                      name="Type"
                      onChange={onProjectAddChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="ProjectDescription">Project Description</label>
                    <textarea id="ProjectDescription"
                      className="form-control"
                      rows={4}
                      defaultValue={""}
                      name="ProjectDescription"
                      onChange={onProjectAddChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="inputStatus">Status</label>
                    <select
                      id="Status"
                      className="form-control custom-select"
                      onChange={onProjectAddChange}
                      name="Status">
                      <option selected disabled>Select one</option>
                      <option>On Hold</option>
                      <option>Canceled</option>
                      <option>Success</option>

                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="AssociatedClient">Associated Client</label>
                    <input
                      type="text"
                      id="AssociatedClient"
                      className="form-control"
                      name="AssociatedClient"
                      onChange={onProjectAddChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="AssociatedServers">Associated Servers</label>
                    <input type="text"
                      id="AssociatedServers"
                      className="form-control"
                      name="AssociatedServers"
                      onChange={onProjectAddChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="UsedSolutions">Used Solutions</label>
                    <input type="text"
                      id="UsedSolutions"
                      className="form-control"
                      name="UsedSolutions"
                      onChange={onProjectAddChange} />
                  </div>
                  <div className="form-group">
                    <label>Associated Members</label>
                    <div className="select2-purple">
                      <Select
                        closeMenuOnSelect={false}
                        components={animatedComponents}
                        options={options}
                        isMulti

                      />
                    </div>
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
                    <label htmlFor="ProjectProgress">Project Progress</label>

                    {/* <label htmlFor="customRange1">Custom range</label>
                      <input type="range" className="form-control-range" id="customRange1"
                      onChange={onProjectAddChange} />
                    </div> */}

                    <input type="number" min={0} max={100}
                      id="ProjectProgress"
                      className="form-control"
                      name="ProjectProgress"
                      onChange={onProjectAddChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="StartDate">Start Date</label>
                    <input type="date"
                      id="StartDate"
                      className="form-control"
                      name="StartDate"
                      onChange={onProjectAddChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="FinishDate">Finish Date</label>
                    <input type="date"
                      id="FinishDate"
                      className="form-control"
                      name="FinishDate"
                      onChange={onProjectAddChange} />
                  </div>
                </div>
                {/* /.card-body */}
              </div>
              {/* /.card */}
              

                <div className="card  card-secondary">
                  <div>
                    <h4 className="title text-center">SKills Classifier</h4>
                  </div>
                  <div className="content">
                    <Form>
                      <Form.Row>
                        <Form.Group as={Col}>
                          <input
                            placeholder='Puth The Skills That You Want To Be Classified Here '
                            type="textarea"
                            id="formData2"
                            value={formData2}
                            className="form-control"
                            name="formData2"
                            onChange={handleBChange} />

                        </Form.Group>
                      </Form.Row>
                      <Row>
                        <Col>
                          <Button
                            block
                            variant="primary"
                            disabled={isLoading2}
                            onClick={!isLoading2 ? handleBPredictClick : null}>
                            {isLoading2 ? 'Making Classification' : 'Classify'}
                          </Button>
                        </Col>
                        <Col>
                          <Button

                            block
                            variant="danger"
                            disabled={isLoading2}
                            onClick={handleBCancelClick}>
                            Reset Classification
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
                </div>

              
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <button onClick={onCancelClick} className="btn btn-secondary">Cancel</button>
              <button type="submit"
                className="btn btn-success float-right mr-3"
                onClick={onProjectAddSubmit} > Add New Project </button>
            </div>
          </div>

        </section>
        {/* /.content */}
        <div>

        </div>
      </div>
      <div className="content-wrapper">
        {/* Content Header (Page header) */}
        <div>
          <h1 className="title text-center">Recommender Engine</h1>
        </div>
        <div className="content">
          <Form>
            <Form.Row>
              <Form.Group as={Col}>
                {/* <Form.Label>Client Feedback</Form.Label> */}
                <input
                  placeholder='Put The Skills You Need To Get Recommendations  '
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
                  {isLoading3 ? 'Getting Recommendations' : 'Recommend'}
                </Button>
              </Col>
              <Col>
                <Button

                  block
                  variant="danger"
                  disabled={isLoading3}
                  onClick={handleCancelClick}>
                  Reset Recommendations
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
                      <td>Fedi Ben Slama </td>
                    </tr>
                    <tr>
                      <td>{Column0v1}</td>
                      <td>{Column1v1} </td>
                      <td>Nada</td>
                    </tr>
                    <tr>
                      <td>{Column0v2}</td>
                      <td>{Column1v2} </td>
                      <td>Marie</td>
                    </tr>
                  </tbody>

                </table>


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

  )
}

export default ProjectAdd