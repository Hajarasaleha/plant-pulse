const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productListingSchema = new Schema({
    title: String,
    description: String,
    image: String,
    price: Number,  // Note: Consider using `Number` instead of `String` for price
    category: {
        type: String,
        enum: ['fertilizers', 'seeds', 'plants', 'agricultural tools', 'irrigation tools'],
        required: true
    }
});
const Product = mongoose.model("Product", productListingSchema);
module.exports = Product;