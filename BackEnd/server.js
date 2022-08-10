const express = require("express");
const cors = require('cors');
const app = express();
const knex = require('knex');
const bcrypt = require('bcrypt-nodejs');
const { response } = require("express");
const morgan = require("morgan")

const register = require('./controllers/register')
const signin = require('./controllers/signin')
const projects = require('./controllers/projects')
const ViewProject = require('./controllers/viewproject')
const addProject = require('./controllers/addproject')
const EditProject = require('./controllers/editproject')
const DeleteProject = require('./controllers/deleteproject')
const profile = require('./controllers/profile')
const auth = require('./controllers/authorization');


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




app.listen(3001, () => {
    console.log('App Is Running On Port 3001')
})