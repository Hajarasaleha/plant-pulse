const Product = require("../models/productListing");
const mongoose=require("mongoose");
const ExpressError = require("../utils/ExpressError");

// GET /products
module.exports.index = async (req, res, next) => {
  try {
    const allProducts = await Product.find({});
    res.render("productListings/index", { allProducts });
  } catch (err) {
    next(err);
  }
};

// GET /products/new
module.exports.renderNewForm = (req, res) => {
  res.render("productListings/new");
};

// POST /products
module.exports.createProduct = async (req, res, next) => {
  try {
    const newProduct = new Product(req.body.product);
    await newProduct.save();
    res.redirect("/products");
  } catch (err) {
    next(new ExpressError(400,"Failed to create product"));
  }
};

// GET /products/:id
module.exports.showProduct = async (req, res, next) => {
  try {
    const { id } = req.params;

    // Check if id is a valid ObjectId
    if (!mongoose.Types.ObjectId.isValid(id)) {
      throw new ExpressError(400,"Invalid Product ID format");
    }
    const product = await Product.findById(req.params.id);
    if (!product) throw new ExpressError(404,"Product not found");
    res.render("productListings/show", { product });
  } catch (err) {
    next(err);
  }
};

// DELETE /products/:id
module.exports.deleteProduct = async (req, res, next) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.redirect("/products");
  } catch (err) {
    next(err);
  }
};

// GET /products/category/:category
module.exports.categoryFilter = async (req, res, next) => {
  try {
    const allProducts = await Product.find({ category: req.params.category });
    res.render("productListings/index", { allProducts });
  } catch (err) {
    next(err);
  }
};

// GET /products/filter
module.exports.combinedFilter = async (req, res, next) => {
  try {
    let { category, min, max } = req.query;
    min = parseInt(min);
    max = parseInt(max);
    let filter = {};

    if (!isNaN(min) || !isNaN(max)) {
      filter.price = {};
      if (!isNaN(min)) filter.price.$gte = min;
      if (!isNaN(max)) filter.price.$lte = max;
    }

    if (category) filter.category = category;

    const allProducts = await Product.find(filter);
    res.render("productListings/index", { allProducts, category });
  } catch (err) {
    next(err);
  }
};
