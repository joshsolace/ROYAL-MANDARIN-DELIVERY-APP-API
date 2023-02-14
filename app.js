// require dotenv
require("dotenv").config();
// require
const express = require("express");
const connectDB = require("./config/db");
// invoking express
const app = express();

const orderRoute = require("./routes/orderRoute");

connectDB();

// middleware
app.use(express.json());

app.get("/", (req, res)=>{
    res.status(200).json({
        message: "<h1>WELCOME TO ROYAL MANDARIN RESTURANT</h1>"
    })
})

// mount routes
app.use("/api/v1", orderRoute);

module.exports = app;
