const express = require("express");
const {
    getUser,
    createUser,
    deleteUser,
    updateUser,
} = require("../controllers/userController");

const userRoute = express.Router();

userRoute.get("/user",getUser);
userRoute.post("/createUser", createUser);
userRoute.delete("/deleteUser/:id",deleteUser);
userRoute.delete("/updateUser/:id",updateUser);

module.exports = userRoute;