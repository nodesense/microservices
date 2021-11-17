// it reads .env file and copy the settions to process.env
require("dotenv").config() // Must be first line
const http = require("http");
const app = require('./app'); // index.js
const connectMongo = require("./app/config/connectMongo");
const logger = require("./app/config/logger");
 
 
//express application
const server = http.createServer(app)

// https/ssl
// socket.io

const PORT = process.env.PORT || 8080
const IP_ADDRESS = process.env.IP_ADDRESS || '127.0.0.1'

logger.info("Starting application")

Promise.all([
        connectMongo()
    ]).then( () => {

    server.listen(PORT, IP_ADDRESS, function (err) {
        if (err) { 
            // console.error("Could not listen ", err);
            logger.error(err)
            process.exit(-1)
        } else {
            logger.info(`server listening on `)
            logger.info(JSON.stringify(server.address()))
        }
    } 
 ); 
})

console.log("callback ", server.address());
