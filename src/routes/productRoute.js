const express = require("express");
const {
    getProduct,
    createProduct,
}=require("../controllers/productController");

const productRoute = express.Router();

productRoute.get("/product", getProduct);
productRoute.post("/createProduct", createProduct);

module.exports = productRoute;