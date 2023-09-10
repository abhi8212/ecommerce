//importing the app.js in it
const app = require("./app");
const dotenv = require("dotenv");
const axios =require("axios");
dotenv.config({ path: "config/config.env" });
//uncought error
process.on("uncaughtException",(err)=> {
    console.log(`Error: ${err.message}`);
    console.log(`shutting down the server due to uncought error`);
    process.exit(1);
});

// import database
const connectDatabase = require('./config/database.js');

//fetching the configuration and connect;


connectDatabase();

//why instead of 6000 process.env.PORT is not working
const PORT = process.env.PORT || 7000;

app.listen(7000, () => {
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})
//unhandled promise rejection
process.on("unhandledRejection",(err) => {
    console.log(`Error:${err.message}`);
    console.log(`shutting down the server due to unhandled promise rejection`);
//to close the server
    server.close(() => {
        process.exit(1);
    });
});

