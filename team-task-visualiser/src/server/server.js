const express = require("express");

const Task = require('./models/Task');

let app = express();

app.get("/", (req, res) => {
    res.send("hello world");
});

app.get("/task", (req, res) => {
    Task.create({task: 'hello'})
        .then(data => {
            console.log(data);
            res.sendStatus(200);
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        });
});

//app.listen(<port number>, <do something after successfully listening to port>)
app.listen(9000, function() {
    console.log("Example app listening on port 9000!");
});
