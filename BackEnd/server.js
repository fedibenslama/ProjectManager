const express = require("express");
const cors = require('cors');
const app = express();
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');
const { response } = require("express");
const morgan = require("morgan")


const register = require('./controllers/Authentification/register')
const signin = require('./controllers/Authentification/signin')
const projects = require('./controllers/Projects/projects')
const ViewProject = require('./controllers/Projects/viewproject')
const addProject = require('./controllers/Projects/addproject')
const EditProject = require('./controllers/Projects/editproject')
const DeleteProject = require('./controllers/Projects/deleteproject')
const profile = require('./controllers/Profile/profile')
const auth = require('./controllers/Authentification/authorization');
const clients = require('./controllers/Clients/clients')
const addClient = require('./controllers/Clients/addclient')
const ViewClient = require('./controllers/Clients/viewclient')
const DeleteClient = require('./controllers/Clients/deleteclient')
const EditClient = require('./controllers/Clients/editclient')
const requirements = require('./controllers/Requirements/requirements')
const ViewRequirement = require('./controllers/Requirements/viewrequirement')
const addRequirement = require('./controllers/Requirements/addrequirement')
const EditRequirement = require('./controllers/Requirements/editrequirement')
const DeleteRequirement = require('./controllers/Requirements/deleterequirement')
const addFunctionality = require('./controllers/Functionalities/addfunctionality')
const DeleteFunctionality = require('./controllers/Functionalities/deletefunctionality')
const EditFunctionality = require('./controllers/Functionalities/editfunctionality')
const functionalities = require('./controllers/Functionalities/functionalities')
const ViewFunctionality = require('./controllers/Functionalities/viewfunctionality')
const addMember = require('./controllers/Members/addmember')
const DeleteMember = require('./controllers/Members/deletemember')
const EditMember = require('./controllers/Members/editmember')
const members = require('./controllers/Members/members')
const ViewMember = require('./controllers/Members/viewmember')
const addTask = require('./controllers/Tasks/addtask')
const DeleteTask = require('./controllers/Tasks/deletetask')
const EditTask = require('./controllers/Tasks/edittask')
const tasks = require('./controllers/Tasks/tasks')
const ViewTask = require('./controllers/Tasks/viewtask')

db = knex({
    client: 'pg',
    connection: process.env.POSTGRES_URI
});



app.use(morgan('combined'));
app.use(cors());
app.use(express.json());





app.post('/signin', signin.signinAuthentication(db, bcrypt))
app.post('/register', (req, res) => { register.handleRegister(req, res, db, bcrypt) })
app.get('/profile/:id', (req, res) => { profile.handleProfileGet(req, res, db)})
app.post('/profile/:id', (req, res) => { profile.handleProfileUpdate(req, res, db)})
app.get('/projects', (req, res) => { projects.handleProjects(req, res, db) })
app.get('/ViewProject/:id', (req, res) => { ViewProject.handleViewProject(req, res, db) })
app.post('/addProject', (req, res) => { addProject.handleAddProject(req, res, db) })
app.put('/EditProject', (req, res) => { EditProject.handleEditProject(req, res, db) })
app.put('/DeleteProject', (req, res) => { DeleteProject.handleDeleteProject(req, res, db) })
app.get('/clients', (req, res) => { clients.handleClients(req, res, db) })
app.post('/addClient', (req, res) => { addClient.handleAddClient(req, res, db) })
app.get('/ViewClient/:id', (req, res) => { ViewClient.handleViewClient(req, res, db) })
app.put('/DeleteClient', (req, res) => { DeleteClient.handleDeleteClient(req, res, db) })
app.put('/EditClient', (req, res) => { EditClient.handleEditClient(req, res, db) })
app.get('/requirements', (req, res) => { requirements.handleRequirements(req, res, db) })
app.get('/ViewRequirement/:id', (req, res) => { ViewRequirement.handleViewRequirement(req, res, db) })
app.post('/addRequirement', (req, res) => { addRequirement.handleAddRequirement(req, res, db) })
app.put('/EditRequirement', (req, res) => { EditRequirement.handleEditRequirement(req, res, db) })
app.put('/DeleteRequirement', (req, res) => { DeleteRequirement.handleDeleteRequirement(req, res, db) })
app.post('/addFunctionality', (req, res) => { addFunctionality.handleAddFunctionality(req, res, db) })
app.put('/DeleteFunctionality', (req, res) => { DeleteFunctionality.handleDeleteFunctionality(req, res, db) })
app.put('/EditFunctionality', (req, res) => { EditFunctionality.handleEditFunctionality(req, res, db) })
app.get('/functionalities', (req, res) => { functionalities.handleFunctionalities(req, res, db) })
app.get('/ViewFunctionality/:id', (req, res) => { ViewFunctionality.handleViewFunctionality(req, res, db) })

app.post('/addMember', (req, res) => { addMember.handleAddMember(req, res, db) })
app.put('/DeleteMember', (req, res) => { DeleteMember.handleDeleteMember(req, res, db) })
app.put('/EditMember', (req, res) => { EditMember.handleEditMember(req, res, db) })
app.get('/members', (req, res) => { members.handleMembers(req, res, db) })
app.get('/ViewMember/:id', (req, res) => { ViewMember.handleViewMember(req, res, db) })

app.post('/addTask', (req, res) => { addTask.handleAddTask(req, res, db) })
app.put('/DeleteTask', (req, res) => { DeleteTask.handleDeleteTask(req, res, db) })
app.put('/EditTask', (req, res) => { EditTask.handleEditTask(req, res, db) })
app.get('/tasks', (req, res) => { tasks.handleTasks(req, res, db) })
app.get('/ViewTask/:id', (req, res) => { ViewTask.handleViewTask(req, res, db) })


app.listen(3001, () => {
    console.log('App Is Running On Port 3001')
})