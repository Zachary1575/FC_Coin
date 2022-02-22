//Sensitive DATA!!!!
var config = {
    development: {
        url: 'http://localhost:5000',
        host: 'localhost',
        user: 'root',
        password: 'root',
        database: "fc_users",
        port: 7000,
    },

    //Production build coming...
    production: {
        url: 'None!'
    }
}

module.exports = config;
