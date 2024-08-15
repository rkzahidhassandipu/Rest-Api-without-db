const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const usersRouter = require("./routes/users.route")


const app = express();

// Middleware
app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

// routing
app.use("/users",usersRouter);

// Home route
app.get("/", (req, res) => {
    res.sendfile(__dirname + "/views/index.html");
});

// route not found error
app.use((req, res, next) => {
    res.status(404).json({message: "route not found"});
});

// server error
app.use((req, res, next) => {
    res.status(500).json({message: "something broken"});
});

module.exports = app;
