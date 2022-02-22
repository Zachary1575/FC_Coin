//Sensitive Data, Config file to hide information
var env = process.env.NODE_ENV || 'development';
var config = require('./config/config.js')[env];


//Required Libs for express
const express = require('express');
const app = express();
const port = config.port;

//Body parser to read and unpack .json bodies
const bodyParser = require('body-parser');

//Web-browser authentication
const cors = require('cors');

//MySQL reader and Query
const mysql = require('mysql2');

//Define our database for Auth and CRUD operations
const db = {
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
}

//Main Program, GET, POST, Query etc. (We are using http protocal due to localhost, https (with SSL) support will come soon...)

//Authentication and .json Unpacking
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Listen for GET, POST, ETC on this port...
app.listen(port,() => {
    console.log(`Our running port is on ${port}`);

});

//Routes and DB Queries



//Register Account
app.post("/server/insert", (req, res)=> {

    //Insert information
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    //Query Info
    const sqlInsert = "INSERT INTO user_auth (username, email, password) VALUES (?, ?, ?);"

    //Query and inserts, err is to catch an error to console.log, result tries to get whatever we are trying to query
    db.query(sqlInsert, [username, email, password], (err,result) => {
        console.log("Query is sent!");

        if (result == null){
            console.log(result);
            console.log("Success!");
        } else {
            console.log(err);
        }
        
    })
})