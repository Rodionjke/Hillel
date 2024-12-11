const express = require('express');
const TodoModel = require('./mongo/todo.model');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const connect = mongoose.connect('mongodb+srv://m63835502:5Tfd0YiPTeR8LT7z@cluster0.3wog7.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
connect.then(() => console.log('Connected!'));

app.use(cors())
app.use(express.json())
app.listen(8080, () => {
    console.log('Server is running on localhost:8080...');
});
app.get('/', (req, res) => {
    res.send({status: 'Hello'});
})

app.get('/todos', (req, res) => {
    // res.send(todos);
    TodoModel.find().then(
        response => res.send(response)
    )
})

app.post('/todos', (req, res) => {
    const todo = new TodoModel(req.body);
    todo.save().then(
        response => res.send(response)
    )
})

app.delete('/todos/:id', (req, res) => {
    const id = req.params.id;
    TodoModel.deleteOne({_id: id}).then(
        response => {
            if (response.deleteCount === 0) {
                res.status(404).send({message: 'Todo were not found'})
            } else {
                res.status(404).send(response)
            }
        }
    )
})

app.put('/todos/:id', (req, res) => {
    const id = req.params.id;
    TodoModel.updateOne({_id: id}, req.body)
        .then(() => TodoModel.findById(id))
        .then(response => res.status(200).send(response))
})