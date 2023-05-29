const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser"); //Import section
const env = require("dotenv").config();
const mongoose = require("mongoose");
const userRoute = require('./src/routes/userRouts')
const productRoute = require('./src/routes/productRoute')


const app = express();

const conn = mongoose.connect (encodeURI(process.env.DB_CONNECT), {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use("/api", userRoute);
app.use("/api",  productRoute);

app.get("/",(req, res) => {
    res.send("hello sanjaya  hacker");
});

app.get("/home",(req, res) => {
    res.send("Home Pages");
});
module.exports = app;

