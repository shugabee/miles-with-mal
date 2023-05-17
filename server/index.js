require("dotenv").config();
const express = require('express');

const { Sequelize } = require("sequelize");

const { SERVER_PORT, CONNECTION_STRING } = process.env;

const sequelize = new Sequelize(CONNECTION_STRING, {
    dialect: "postgres", 
    dialectOptions: {
        ssl: {
            rejectUnauthorized: false,
        },
    },
});

const app = express();

app.use(express.json());




app.listen(SERVER_PORT, () => console.log(`Server is running on ${SERVER_PORT}`))

