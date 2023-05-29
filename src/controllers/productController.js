const Product = require("../models/product");

exports.getProduct = (req, res) => {
    res.status(200).send({
        productName: "Sleeper",
        productId: "1#21332daccs",
        productDescription: "User for good care of foot",
    });
};

exports.createProduct = async (req,res) => {
    try {
        const product = new Product(res.body);
        await product.save();
        res.status(200).send({ product: product });
    } catch (error) {}
};