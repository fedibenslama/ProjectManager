import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Navbar from "./Layouts/Navbar";
// import Footer from "./Layouts/Footer";
// import Login from "./Pages/login";
// import Menu from "./Layouts/Menu";
import Projects from "./Componants/Projects/Projects";
import ProjectAdd from './Componants/Projects/ProjectAdd';
import ProjectEdit from './Componants/Projects/ProjectEdit';
import ProjectView from './Componants/Projects/ProjectView';





function App() {

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

  // ---------------------------HOOKS-------------------------------------
   


  //----------------------Project ADD---------------------------------

  //----------------------Project View---------------------------------
  // const onProjectViewClick = (event, ProjectInfo) => {
  //   event.preventDefault();
  //   setViewProjectId(ProjectInfo.id)
  //   const ProjectValue = {
  //     Name: ProjectInfo.Name,
  //     Type: ProjectInfo.Type,
  //     UsedSolutions: ProjectInfo.UsedSolutions,
  //     AssociatedServers: ProjectInfo.AssociatedServers,
  //     AssociatedClient: ProjectInfo.AssociatedClient,
  //     Status: ProjectInfo.Status,
  //     ProjectProgress: ProjectInfo.ProjectProgress,
  //     StartDate: ProjectInfo.StartDate,
  //     FinishDate: ProjectInfo.FinishDate,
  //     ProjectDescription: ProjectInfo.ProjectDescription
  //   }

  //   setViewProjectData(ProjectValue)
  //   fetch('http://localhost:3001/ViewProject', {
  //     method: 'get',
  //     headers: { 'Content-Type': 'application/json' },
  //     body: JSON.stringify({
  //       id: ViewProjectId,


  //     })
  //   })
  //     .then(response => response.json())

  // }


  

  //----------------------Project Cancel---------------------------------

  // const onProjectCancelClick = () => {
  //   setEditProjectId(null)
  // }
  //--------------------Project Delete ------------------------
 

  return (
    // <div className="wrapper">
    //   {/* <Navbar /> */}
    //   {/* <Menu/> */}
    //   {/* <Projects ProjectsInfo={ProjectsInfo} EditProjectId={EditProjectId}
    //     onProjectEditClick={onProjectEditClick} EditProjectData={EditProjectData}
    //     onProjectEditChange={onProjectEditChange} onProjectEditSubmit={onProjectEditSubmit}
    //     onProjectCancelClick={onProjectCancelClick} onProjectDeleteClick={onProjectDeleteClick}
    //     onProjectViewClick={onProjectViewClick} /> */}
    //   {/* <ProjectAdd onProjectAddChange={onProjectAddChange} onProjectAddSubmit={onProjectAddSubmit} /> */}
    //   <ProjectView ProjectsInfo={ProjectsInfo} setProjectsInfo={setProjectsInfo}
    //   ViewProjectId={ViewProjectId} setViewProjectId={setViewProjectId}/>

    //   {/* <Footer /> */}
    // </div>
    <Router>
      <Routes>
        <Route path="/ViewProject/:id" element={<ProjectView />} />
        <Route path='/addProject' element={<ProjectAdd ProjectsInfo={ProjectsInfo} setProjectsInfo={setProjectsInfo} />} />
        <Route path='/EditProject' element={<ProjectEdit ProjectsInfo={ProjectsInfo} setProjectsInfo={setProjectsInfo}/>}/>
        <Route path='/projects' element={<Projects ProjectsInfo={ProjectsInfo} setProjectsInfo={setProjectsInfo}/>} />
      </Routes>
    </Router >
  );
}

export default App;