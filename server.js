const express = require("express");
const app = express(); 

const users = require('./db.json');
const port = process.env.PORT || 3000;

app.get('/api/users', (req, res) => {

    res.json(users);
 
 });


app.get("/", (req, res) => { res.send("Hello!");});
app.get("/haris", (req, res) => { res.send("My name is Haris");});
app.get('/api/users/:id', (req, res) => {

    res.json(users.find(user => user.id === Number(req.params.id)))
 
 })
app.listen(port, () => {
    console.log("Starting node.js at http://127.0.0.1:"+port);
    console.log("Starting node.js at http://127.0.0.1:"+port+'/api/users');
    console.log("Starting node.js at http://127.0.0.1:"+port+'/api/users/:id');
});