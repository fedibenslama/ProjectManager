const express = require("express");
const cors = require('cors');
const app = express();
const knex = require('knex');
const { response } = require("express");

db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        port: 5432,
        user: 'postgres',
        password: 'test',
        database: 'ProjectManagement',

    }
});



app.use(cors());
app.use(express.json());



// -------------Get All Projects-------------------
app.get('/projects', (req, res) => {
    db.select('*').from('projects').then(projects => {
        res.json(projects);
    })

})

// -------------Get one Project-------------------
app.get('/ViewProject/:id', (req, res) => {
    
        const { id } = req.params;
        
        db.select('*').from('projects').where({ id: id })
            .then(response => {
                if (response.length) {            //To Check if project exists , we can change 'response' to 'project' for clarity
                    res.json(response[0]);
                } else { res.status(400).json('Project Not Found') }
    
            })
            .catch(err => res.status(400).json('Project Not Found'))
})

// -------------Add one Project-------------------
app.post('/addProject', (req, res) => {
    const { Name, Type, UsedSolutions, AssociatedServers, AssociatedClient, Status, ProjectProgress, StartDate, FinishDate, ProjectDescription } = req.body; //to avoid repeating req.body
    db('projects')
        .returning('*')  //our response is all the columns
        .insert({
            // be careful it's case sensitive , in the db all are lowercase
            name: Name,
            type: Type,
            usedsolutions: UsedSolutions,
            associatedservers: AssociatedServers,
            associatedclient: AssociatedClient,
            status: Status,
            projectprogress: ProjectProgress,
            startdate: StartDate,
            finishdate: FinishDate,
            projectdescription: ProjectDescription
        }).then(project => {
            res.json(project[0]);
        })
        .catch(err => {
            res.status(400).json('Unable To Add Project')  //giving the error details in not good for security so i'll change the err with smthing else
        })



})
// ------------------ Edit A Project ------------------
app.put('/EditProject', (req, res) => {


    const { id, Name, Type, UsedSolutions, AssociatedServers, AssociatedClient, Status, ProjectProgress, StartDate, FinishDate, ProjectDescription } = req.body; //to avoid repeating req.body
    db('projects')
        .returning('*')  //our response is all the columns
        .where('id', '=', id)
        .update({
            // be careful it's case sensitive , in the db all are lowercase
            name: Name,
            type: Type,
            usedsolutions: UsedSolutions,
            associatedservers: AssociatedServers,
            associatedclient: AssociatedClient,
            status: Status,
            projectprogress: ProjectProgress,
            startdate: StartDate,
            finishdate: FinishDate,
            projectdescription: ProjectDescription
        }).then(project => {
            res.json(project[0]);
        })
        .catch(err => {
            res.status(400).json('Unable To Edit Project')  //giving the error details in not good for security so i'll change the err with smthing else
        })



})


// ------------------ Delete A Project ------------------
app.put('/DeleteProject', (req, res) => {
    const { id } = req.body;
    db('projects')
        .where('id', '=', id)
        .del(
            '*'
        )
        .then(response => {
            res.json("Deleted")
        })
        .catch(err => res.status(400).json('Unable To Delete'))

})




app.listen(3001, () => {
    console.log('App Is Running On Port 3001')
})

