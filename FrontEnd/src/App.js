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
 

  // useEffect(() => {
  //   const token = window.sessionStorage.getItem('token');
  //   if (token) {
  //     fetch('http://localhost:3001/signin', {
  //       method: 'post',
  //       headers: {
  //         'Content-Type': 'application/json',
  //         'Authorization': token
  //       }
  //     })
  //       .then(response => response.json())
  //       .then(data => {
  //         if (data && data.id) {
  //           fetch(`http://localhost:3001/profile/${data.id}`, {
  //             method: 'GET',
  //             headers: {
  //               'Content-Type': 'application/json',
  //               'Authorization': token
  //             }
  //           })
  //             .then(response => response.json())
  //             .then(user => {
  //               if (user && user.email) {
  //                 console.log(user)

  //               }
  //             })
  //         }
  //       })

  //   }
  // }, [])


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
          <Route path='/profile/:id' element={<Profile />} />
        </Route>


      </Routes>

    </Router >
  );
}

export default App