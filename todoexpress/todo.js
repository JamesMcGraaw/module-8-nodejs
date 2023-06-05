const express = require('express');

const app = express();
const port = 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

let tasks = { tasks :
        [
            {id : 1, task : "Wash cat", status: "Incomplete"},
            {id : 2, task : "Wash dog", status: "Incomplete"},
            {id : 3, task : "Wash me", status: "Incomplete"},
            {id : 4, task : "Wash teeth", status: "Incomplete"}
        ]
    };

// See tasks
app.get('/', (req, res) => {
    res.json(tasks);
});

// Add new task
// Go to http://localhost:1234/m8-nodejs/todoexpress/form.html
app.post('/addtask', (req, res) => {
    tasks.tasks.push({id : tasks.tasks.length + 1, task : req.body.task, status : req.body.status})
    res.redirect('/');
})

// See individual task
app.get('/seetask/:id', (req, res) => {
    let position = tasks.tasks.findIndex(task => task.id == req.params.id)
    res.json(tasks.tasks[position])
})

// Mark task as done
app.put('/markasdone/:id', (req, res) => {
    let position = tasks.tasks.findIndex(task => task.id == req.params.id)
    tasks.tasks[position].status = 'Complete'
    res.redirect('/')
})

// Update text of one task
app.put('/updatetask/:id', (req, res) => {
    let position = tasks.tasks.findIndex(task => task.id == req.params.id)
    let updatedTask = req.query.update
    tasks.tasks[position].task = updatedTask
    res.redirect('/')
})

// Delete an entry
app.put('/deletetask/:id', (req, res) => {
    let position = tasks.tasks.findIndex(task => task.id == req.params.id)
    tasks.tasks.splice(position, 1)
    res.redirect('/')
})

// See all completed items
app.get('/completed', (req, res) => {
    let completedTasks = []
    tasks.tasks.forEach((task) => {
        if (task.status === 'Complete') {
            completedTasks.push(task)
        }
    })
    res.json(completedTasks)
})

// Make app run
app.listen(port, () => {
    console.log(`App started and listening on port ${port}`);
});