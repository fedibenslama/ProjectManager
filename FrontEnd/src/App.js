import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Navbar from "./Layouts/Navbar";
import Footer from "./Layouts/Footer";
import Login from "./Pages/login";
import Menu from "./Layouts/Menu";
import Projects from "./Componants/Projects/Projects";
import ProjectAdd from './Componants/Projects/ProjectAdd';
import { nanoid } from 'nanoid';
import ProjectView from './Componants/Projects/ProjectView';





function App() {



  // ---------------------------HOOKS-------------------------------------
  const [ProjectsInfo, setProjectsInfo] = useState([{
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
  }])
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
  const [EditProjectId, setEditProjectId] = useState(null)
  const [EditProjectData, setEditProjectData] = useState([{
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
  }])
  const [ViewProjectId, setViewProjectId] = useState(null)
  const [ViewProjectData, setViewProjectData] = useState([{
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
  }])

  useEffect(() => {
    fetch('http://localhost:3001/projects')
      .then(response => {
        return response.json();
      })
      .then(projects => {

        setProjectsInfo(projects)
      })

  }, []) // 


  //----------------------Project ADD---------------------------------
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
    // .then(Project => {
    //   if (Project) {
    //     // this.props.loadProject(Project)
    //     console.log(response)
    //   }
    // })

  }
  //----------------------Project View---------------------------------
  const onProjectViewClick = (event, ProjectInfo) => {
    event.preventDefault();
    setViewProjectId(ProjectInfo.id)
    const ProjectValue = {
      Name: ProjectInfo.Name,
      Type: ProjectInfo.Type,
      UsedSolutions: ProjectInfo.UsedSolutions,
      AssociatedServers: ProjectInfo.AssociatedServers,
      AssociatedClient: ProjectInfo.AssociatedClient,
      Status: ProjectInfo.Status,
      ProjectProgress: ProjectInfo.ProjectProgress,
      StartDate: ProjectInfo.StartDate,
      FinishDate: ProjectInfo.FinishDate,
      ProjectDescription: ProjectInfo.ProjectDescription
    }

    setViewProjectData(ProjectValue)
    fetch('http://localhost:3001/ViewProject', {
      method: 'get',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: ViewProjectId,
      
  
      })
    })
      .then(response => response.json())

  }
  
 
//----------------------Project Edit---------------------------------
const onProjectEditClick = (event, ProjectInfo) => {
  event.preventDefault();
  setEditProjectId(ProjectInfo.id)
  const ProjectValue = {
    Name: ProjectInfo.Name,
    Type: ProjectInfo.Type,
    UsedSolutions: ProjectInfo.UsedSolutions,
    AssociatedServers: ProjectInfo.AssociatedServers,
    AssociatedClient: ProjectInfo.AssociatedClient,
    Status: ProjectInfo.Status,
    ProjectProgress: ProjectInfo.ProjectProgress,
    StartDate: ProjectInfo.StartDate,
    FinishDate: ProjectInfo.FinishDate,
    ProjectDescription: ProjectInfo.ProjectDescription
  }

  setEditProjectData(ProjectValue)
}
const onProjectEditChange = (event) => {
  event.preventDefault();
  const fieldName = event.target.getAttribute('name');
  const fieldValue = event.target.value;

  const NewProjectData = { ...EditProjectData };
  NewProjectData[fieldName] = fieldValue;

  setEditProjectData(NewProjectData)
}
const onProjectEditSubmit = (event) => {
  event.preventDefault();
  const editedProject = {
    id: EditProjectId,
    Name: EditProjectData.Name,
    Type: EditProjectData.Type,
    UsedSolutions: EditProjectData.UsedSolutions,
    AssociatedServers: EditProjectData.AssociatedServers,
    AssociatedClient: EditProjectData.AssociatedClient,
    Status: EditProjectData.Status,
    ProjectProgress: EditProjectData.ProjectProgress,
    StartDate: EditProjectData.StartDate,
    FinishDate: EditProjectData.FinishDate,
    ProjectDescription: EditProjectData.ProjectDescription
  }
  const NewProjects = [...ProjectsInfo]
  const index = ProjectsInfo.findIndex((ProjectInfo) => ProjectInfo.id === EditProjectId);
  NewProjects[index] = editedProject;
  setProjectsInfo(NewProjects)
  setEditProjectId(null)

  fetch('http://localhost:3001/EditProject', {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      id: EditProjectId,
      Name: EditProjectData.Name,
      Type: EditProjectData.Type,
      UsedSolutions: EditProjectData.UsedSolutions,
      AssociatedServers: EditProjectData.AssociatedServers,
      AssociatedClient: EditProjectData.AssociatedClient,
      Status: EditProjectData.Status,
      ProjectProgress: EditProjectData.ProjectProgress,
      StartDate: EditProjectData.StartDate,
      FinishDate: EditProjectData.FinishDate,
      ProjectDescription: EditProjectData.ProjectDescription

    })
  })
    .then(response => response.json())

}

  //----------------------Project Cancel---------------------------------

  const onProjectCancelClick = () => {
    setEditProjectId(null)
  }
  //--------------------Project Delete ------------------------
  const onProjectDeleteClick = (projectId) => {
    const NewProjects = [...ProjectsInfo]
    const index = ProjectsInfo.findIndex((ProjectInfo) => ProjectInfo.id === projectId);
    NewProjects.splice(index, 1);

    setProjectsInfo(NewProjects)

    fetch('http://localhost:3001/DeleteProject', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: projectId

      })
    })
      .then(response => response.json())
  }


  return (
    <div className="wrapper">
      {/* <Navbar /> */}
      {/* <Menu/> */}
      {/* <Projects ProjectsInfo={ProjectsInfo} EditProjectId={EditProjectId}
        onProjectEditClick={onProjectEditClick} EditProjectData={EditProjectData}
        onProjectEditChange={onProjectEditChange} onProjectEditSubmit={onProjectEditSubmit}
        onProjectCancelClick={onProjectCancelClick} onProjectDeleteClick={onProjectDeleteClick}
        onProjectViewClick={onProjectViewClick} /> */}
      {/* <ProjectAdd onProjectAddChange={onProjectAddChange} onProjectAddSubmit={onProjectAddSubmit} /> */}
      <ProjectView ProjectsInfo={ProjectsInfo} setProjectsInfo={setProjectsInfo}
      ViewProjectId={ViewProjectId} setViewProjectId={setViewProjectId}/>

      {/* <Footer /> */}
    </div>
  );
}

export default App;