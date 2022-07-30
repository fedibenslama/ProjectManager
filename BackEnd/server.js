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

// const database = {
//     projects: [
//         {
//             id: "1",
//             Name: "Project1",
//             Type: "Web Developement",
//             UsedSolutions: "React,JavaScript,NodeJS,MySQL",
//             AssociatedServers: "Development Server",
//             AssociatedClient: "Client1",
//             Status: "Under Development"
//         },
//         {
//             id: "2",
//             Name: "Project2",
//             Type: "Mobile Application",
//             UsedSolutions: "Flutter,React",
//             AssociatedServers: "Development Server",
//             AssociatedClient: "Client2",
//             Status: "Under Development"
//         },
//         {
//             id: "3",
//             Name: "Project3",
//             Type: "Data Science",
//             UsedSolutions: "Machine Learning,Deep Learning,Python",
//             AssociatedServers: "Production Server",
//             AssociatedClient: "Client3",
//             Status: "Testing"
//         },
//         {
//             id: "4",
//             Name: "Project4",
//             Type: "Software Development",
//             UsedSolutions: "Java,Python",
//             AssociatedServers: "Test Server",
//             AssociatedClient: "Client4",
//             Status: "Validated"
//         },
//         {
//             id: "5",
//             Name: "Project5",
//             Type: "Cloud Computing",
//             UsedSolutions: "Machine Learning,AWS",
//             AssociatedServers: "Development Server",
//             AssociatedClient: "Client5",
//             Status: "Testing"
//         }
//     ]
// }

// -------------Get All Projects-------------------
app.get('/projects', (req, res) => {
    db.select('*').from('projects').then(projects => {
        res.json(projects);
    })

})

// -------------Get one Project-------------------
app.get('/project/:id', (req, res) => {
    const { id } = req.params;
    let found = false;
    database.projects.forEach(project => {
        if (project.id === id) {
            found = true;
            return res.json(project)
        }
    })
    if (!found) {
        res.status(400).json('Project Not Found')
    }
})

// -------------Add one Project-------------------
app.post('/addProject', (req, res) => {
    const { Name, Type, UsedSolutions, AssociatedServers, AssociatedClient, Status } = req.body; //to avoid repeating req.body
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
        }).then(project => {
            res.json(project[0]);
        })
        .catch(err => {
            res.status(400).json('Unable To Add Project')  //giving the error details in not good for security so i'll change the err with smthing else
        })


    // database.projects.push({
    //     id: id,
    //     Name: Name,
    //     Type: Type,
    //     UsedSolutions: UsedSolutions,
    //     AssociatedServers: AssociatedServers,
    //     AssociatedClient: AssociatedClient,
    //     Status: Status,
    // })
    // res.json(database.projects[database.projects.length - 1]);

})
// ------------------ Edit A Project ------------------
app.put('/EditProject', (req, res) => {
    

    const {id, Name, Type, UsedSolutions, AssociatedServers, AssociatedClient, Status } = req.body; //to avoid repeating req.body
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
        }).then(project => {
            res.json(project[0]);
        })
        .catch(err => {
            res.status(400).json('Unable To Edit Project')  //giving the error details in not good for security so i'll change the err with smthing else
        })


    // database.projects.push({
    //     id: id,
    //     Name: Name,
    //     Type: Type,
    //     UsedSolutions: UsedSolutions,
    //     AssociatedServers: AssociatedServers,
    //     AssociatedClient: AssociatedClient,
    //     Status: Status,
    // })
    // res.json(database.projects[database.projects.length - 1]);

})
    // let found = false;
    // const { id, Name, Type, UsedSolutions, AssociatedServers, AssociatedClient, Status } = req.body
    // database.projects.forEach(project => {
    //     if (project.id === id) {
    //         found = true;
    //         const index = database.projects.findIndex((project) => project.id === id);
    //         database.projects[index] = {
    //             Name: Name,
    //             Type: Type,
    //             UsedSolutions: UsedSolutions,
    //             AssociatedServers: AssociatedServers,
    //             AssociatedClient: AssociatedClient,
    //             Status: Status
    //         }

    //         return res.json(database.projects[index]);
    //     }

    // })
    // if (!found) {
    //     res.status(404).json("Project Not Found")
    // }

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
    // let found = false;
    // database.projects.forEach(project => {
    //     if (project.id === id) {
    //         found = true;
    //         const index = database.projects.findIndex((project) => project.id === id);
    //         database.projects.splice(index, 1)
    //         return res.json(database.projects);
    //     }

    // })
    // if (!found) {
    //     res.status(404).json("Project Not Found")
    // }
})




app.listen(3001, () => {
    console.log('App Is Running On Port 3001')
})

/*
/ --> res = this is working
/add --> POST = project
/edit -->Put = Project
/view/:projectID --> Get = Project
/delete --> Put Project */