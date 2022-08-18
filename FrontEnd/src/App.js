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
import Clients from './Componants/Clients/Clients';
import ClientAdd from './Componants/Clients/ClientAdd';
import ClientView from './Componants/Clients/ClientView';
import ClientEdit from './Componants/Clients/ClientEdit';
import Requirements from './Componants/Requirements/Requirements';
import RequirementAdd from './Componants/Requirements/RequirementAdd';
import RequirementView from './Componants/Requirements/RequirementView';
import RequirementEdit from './Componants/Requirements/RequirementEdit';



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
  /////////////////////////////////////////

  const [ClientsInfo, setClientsInfo] = useState([{
    ClientName: '',
    ClientType: '',
    ClientActivitySector: '',
    ClientTelephoneNumber: '',
    ClientEmail: '',
    ClientWebsite: '',
    ClientJoined: '',
  }])

  const [EditClientId, setEditClientId] = useState(null)
  const [EditClientData, setEditClientData] = useState([{
    ClientName: '',
    ClientType: '',
    ClientActivitySector: '',
    ClientTelephoneNumber: '',
    ClientEmail: '',
    ClientWebsite: '',
    ClientJoined: '',
  }])

  ///////////////////////////////////////////////////////////
  const [RequirementsInfo, setRequirementsInfo] = useState([{
    RequirementTitle: '',
    RequirementIdCode: '',
    RequirementDescription: '',
    RequirementStatus: '',
    RequirementCreatedBy: '',
    RequirementAssociatedProject: '',
    RequirementMainRequirement: ''
  }])

  const [EditRequirementId, setEditRequirementId] = useState(null)
  const [EditRequirementData, setEditRequirementData] = useState([{
    RequirementTitle: '',
    RequirementIdCode: '',
    RequirementDescription: '',
    RequirementStatus: '',
    RequirementCreatedBy: '',
    RequirementAssociatedProject: '',
    RequirementMainRequirement: ''
  }])

  return (


    <Router>

      <Routes>

        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route element={<ProtectedRoutes />}>
          <Route path='/EditRequirement' element={<RequirementEdit RequirementsInfo={RequirementsInfo} setRequirementsInfo={setRequirementsInfo}
            EditRequirementId={EditRequirementId} setEditRequirementId={setEditRequirementId} EditRequirementData={EditRequirementData}
            setEditRequirementData={setEditRequirementData} />} />
          <Route path="/ViewProject/:id" element={<ProjectView />} />
          <Route path='/addProject' element={<ProjectAdd ProjectsInfo={ProjectsInfo} setProjectsInfo={setProjectsInfo} />} />
          <Route path='/EditProject' element={<ProjectEdit ProjectsInfo={ProjectsInfo} setProjectsInfo={setProjectsInfo}
            EditProjectId={EditProjectId} setEditProjectId={setEditProjectId} EditProjectData={EditProjectData}
            setEditProjectData={setEditProjectData} />} />
          <Route path='/' element={<Projects ProjectsInfo={ProjectsInfo} setProjectsInfo={setProjectsInfo}
            EditProjectId={EditProjectId} setEditProjectId={setEditProjectId} EditProjectData={EditProjectData}
            setEditProjectData={setEditProjectData} />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/clients' element={<Clients ClientsInfo={ClientsInfo} setClientsInfo={setClientsInfo}
            EditClientId={EditClientId} setEditClientId={setEditClientId} EditClientData={EditClientData}
            setEditClientData={setEditClientData} />} />
          <Route path='/addClient' element={<ClientAdd ClientsInfo={ClientsInfo} setClientsInfo={setClientsInfo} />} />
          <Route path="/ViewClient/:id" element={<ClientView />} />
          <Route path='/EditClient' element={<ClientEdit ClientsInfo={ClientsInfo} setClientsInfo={setClientsInfo}
            EditClientId={EditClientId} setEditClientId={setEditClientId} EditClientData={EditClientData}
            setEditClientData={setEditClientData} />} />
          <Route path='/Requirements' element={<Requirements RequirementsInfo={RequirementsInfo} setRequirementsInfo={setRequirementsInfo}
            EditRequirementId={EditRequirementId} setEditRequirementId={setEditRequirementId} EditRequirementData={EditRequirementData}
            setEditRequirementData={setEditRequirementData} />} />
          <Route path="/ViewRequirement/:id" element={<RequirementView />} />
          <Route path='/addRequirement' element={<RequirementAdd RequirementsInfo={RequirementsInfo} setRequirementsInfo={setRequirementsInfo} />} />

        </Route>


      </Routes>

    </Router >
  );
}

export default App