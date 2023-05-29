const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name: {
        type:String,
        required:true,
    },
    type: {
        type: String,
        unique: true,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
    },
});
const Product = mongoose.model("product",productSchema);
module.exports = Product;
