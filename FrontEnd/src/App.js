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
import Functionalities from './Componants/Functionalities/Functionalities';
import FunctionalityAdd from './Componants/Functionalities/FunctionalityAdd';
import FunctionalityEdit from './Componants/Functionalities/FunctionalityEdit';
import FunctionalityView from './Componants/Functionalities/FunctionalityView';
import Members from './Componants/Members/Members';
import MemberAdd from './Componants/Members/MemberAdd';
import MembersList from './Componants/Members/MembersList';
import MemberEdit from './Componants/Members/MemberEdit';
import MemberView from './Componants/Members/MemberView';
import Tasks from './Componants/Tasks/Tasks';
import TaskAdd from './Componants/Tasks/TaskAdd';
import TaskEdit from './Componants/Tasks/TaskEdit';
import TaskView from './Componants/Tasks/TaskView';



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

  //////////////////////////////////////////////
  const [FunctionalitiesInfo, setFunctionalitiesInfo] = useState([{
    FuncTitle: '',
    FuncIdCode: '',
    FuncDescription: '',
    FuncStatus: '',
    FuncAssociatedReq: '',
    FuncAssociatedTasks: '',
    FuncAssociatedMemb: '',
    FuncStartDate: '',
    FuncFinishDate: '',
    FuncDuration: ''
  }])

  const [EditFunctionalityId, setEditFunctionalityId] = useState(null)
  const [EditFunctionalityData, setEditFunctionalityData] = useState([{
    FuncTitle: '',
    FuncIdCode: '',
    FuncDescription: '',
    FuncStatus: '',
    FuncAssociatedReq: '',
    FuncAssociatedTasks: '',
    FuncAssociatedMemb: '',
    FuncStartDate: '',
    FuncFinishDate: '',
    FuncDuration: ''
  }])

  //////////////////////////////////////////////////////////
  const [MembersInfo, setMembersInfo] = useState([{
    MemberName: '',
    MemberId: '',
    MemberTelephoneNumber: '',
    MemberEmail: '',
    MemberAddress: '',
    MemberAssociatedRoles: '',
    MemberAccumulatedExp: ''
  }])

  const [EditMemberId, setEditMemberId] = useState(null)
  const [EditMemberData, setEditMemberData] = useState([{
    MemberName: '',
    MemberId: '',
    MemberTelephoneNumber: '',
    MemberEmail: '',
    MemberAddress: '',
    MemberAssociatedRoles: '',
    MemberAccumulatedExp: ''
  }])
  //////////////////////////////////////////////////////////
  const [TasksInfo, setTasksInfo] = useState([{
    TaskTitle: '',
    TaskIdCode: '',
    TaskDescription: '',
    TaskMainTask: '',
    TaskSpecification: '',
    TaskNature: '',
    TaskStatus: '',
    TaskPriority: '',
    TaskExpectedDuration: '',
    TaskCompletionTime: '',
    TaskMemberInCharge: ''
  }])

  const [EditTaskId, setEditTaskId] = useState(null)
  const [EditTaskData, setEditTaskData] = useState([{
    TaskTitle: '',
    TaskIdCode: '',
    TaskDescription: '',
    TaskMainTask: '',
    TaskSpecification: '',
    TaskNature: '',
    TaskStatus: '',
    TaskPriority: '',
    TaskExpectedDuration: '',
    TaskCompletionTime: '',
    TaskMembInCharge: ''
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
          <Route path='/addRequirement' element={<RequirementAdd RequirementsInfo={RequirementsInfo}
            setRequirementsInfo={setRequirementsInfo} />} />
          <Route path='/Functionalities' element={<Functionalities FunctionalitiesInfo={FunctionalitiesInfo}
            setFunctionalitiesInfo={setFunctionalitiesInfo}
            EditFunctionalityId={EditFunctionalityId} setEditFunctionalityId={setEditFunctionalityId}
            EditFunctionalityData={EditFunctionalityData}
            setEditFunctionalityData={setEditFunctionalityData} />} />
          <Route path='/addFunctionality' element={<FunctionalityAdd FunctionalitiesInfo={FunctionalitiesInfo}
            setFunctionalitiesInfo={setFunctionalitiesInfo} />} />
          <Route path='/EditFunctionality' element={<FunctionalityEdit FunctionalitiesInfo={FunctionalitiesInfo} setFunctionalitiesInfo={setFunctionalitiesInfo}
            EditFunctionalityId={EditFunctionalityId} setEditFunctionalityId={setEditFunctionalityId}
            EditFunctionalityData={EditFunctionalityData} setEditFunctionalityData={setEditFunctionalityData} />} />
          <Route path="/ViewFunctionality/:id" element={<FunctionalityView />} />
          <Route path='/Members' element={<Members MembersInfo={MembersInfo}
            setMembersInfo={setMembersInfo}
            EditMemberId={EditMemberId} setEditMemberId={setEditMemberId}
            EditMemberData={EditMemberData}
            setEditMemberData={setEditMemberData} />} />
          <Route path='/MembersList' element={<MembersList MembersInfo={MembersInfo}
            setMembersInfo={setMembersInfo}
            EditMemberId={EditMemberId} setEditMemberId={setEditMemberId}
            EditMemberData={EditMemberData}
            setEditMemberData={setEditMemberData} />} />
          <Route path='/addMember' element={<MemberAdd MembersInfo={MembersInfo}
            setMembersInfo={setMembersInfo} />} />
          <Route path='/EditMember' element={<MemberEdit MembersInfo={MembersInfo} setMembersInfo={setMembersInfo}
            EditMemberId={EditMemberId} setEditMemberId={setEditMemberId}
            EditMemberData={EditMemberData} setEditMemberData={setEditMemberData} />} />
          <Route path="/ViewMember/:id" element={<MemberView />} />
          <Route path='/Tasks' element={<Tasks TasksInfo={TasksInfo}
            setTasksInfo={setTasksInfo}
            EditTaskId={EditTaskId} setEditTaskId={setEditTaskId}
            EditTaskData={EditTaskData}
            setEditTaskData={setEditTaskData} />} />
          <Route path='/addTask' element={<TaskAdd TasksInfo={TasksInfo}
            setTasksInfo={setTasksInfo} />} />
          <Route path='/EditTask' element={<TaskEdit TasksInfo={TasksInfo} setTasksInfo={setTasksInfo}
            EditTaskId={EditTaskId} setEditTaskId={setEditTaskId}
            EditTaskData={EditTaskData} setEditTaskData={setEditTaskData} />} />
          <Route path="/ViewTask/:id" element={<TaskView />} />

        </Route>


      </Routes>

    </Router >
  );
}

export default App