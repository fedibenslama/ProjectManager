import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from './Componants/Authentification/Register';
import Login from './Componants/Authentification/Login';
import Projects from "./Componants/Projects/Projects";
import ProjectAdd from './Componants/Projects/ProjectAdd';
import ProjectEdit from './Componants/Projects/ProjectEdit';
import ProjectView from './Componants/Projects/ProjectView';
import Profile from './Componants/Profile/Profile';
import ProtectedRoutes from './ProtectedRoutes';








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
 


  return (


    <Router>

      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<ProtectedRoutes/>}>
          <Route path="/"/>
          <Route path="/ViewProject/:id" element={<ProjectView />} />
          <Route path='/addProject' element={ <ProjectAdd ProjectsInfo={ProjectsInfo} setProjectsInfo={setProjectsInfo} />} />
          <Route path='/EditProject' element={<ProjectEdit ProjectsInfo={ProjectsInfo} setProjectsInfo={setProjectsInfo}
            EditProjectId={EditProjectId} setEditProjectId={setEditProjectId} EditProjectData={EditProjectData}
            setEditProjectData={setEditProjectData} />} />
          <Route path='/projects' element={<Projects ProjectsInfo={ProjectsInfo} setProjectsInfo={setProjectsInfo}
            EditProjectId={EditProjectId} setEditProjectId={setEditProjectId} EditProjectData={EditProjectData}
            setEditProjectData={setEditProjectData} />} />
          <Route path='/profile' element={<Profile />} />
        </Route>


      </Routes>

    </Router >
  );
}

export default App