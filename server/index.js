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
const db = mysql.createPool({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

//Main Program, GET, POST, Query etc. (We are using http protocal due to localhost, https (with SSL) support will come soon...)

//Authentication and .json Unpacking
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Listen for GET, POST, ETC on this port...
app.listen(port,() => {
    console.log(`Our running port is on ${port}`);

});

//Do something with our server, like sending through the route, whenever someone accesses this route
app.get('/', (req, res) => {
    res.send("Hello World!");
});

//Routes and DB Queries

//Register a Account
app.post("/server/registration/signUp", (req, res)=> {

    //Insert information
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;

    //Query Info
    const sqlInsert = "INSERT INTO user_auth (username, email, password) VALUES (?, ?, ?);"

    //Query and inserts, err is to catch an error to console.log, result tries to get whatever we are trying to query
    db.query(sqlInsert, [username, email, password], (err,result) => {
        res.send("Query Sent!")
        console.log(err);
        console.log(result);
            
        
        
    })
})

//Getting information of usernames, but encrypted
app.get('/server/registration/get', (res, req)=> {
    //Query Database to deliver information
    const sqlSelect = `SELECT username FROM ${config.database}.user_auth`;
    db.query(sqlSelect, (err, result) => {


        console.log(result);
        console.log(err);
    });

})


