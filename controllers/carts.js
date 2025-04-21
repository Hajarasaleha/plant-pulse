const Product = require("../models/productListing");
const ExpressError = require("../utils/ExpressError");

module.exports.addToCart = async (req, res, next) => {
  try {
    const { productId } = req.body;
    const product = await Product.findById(productId);
    if (!product) throw new ExpressError("Invalid product for cart", 404);

    if (!req.session.cart) req.session.cart = [];

    req.session.cart.push({
      id: product._id.toString(),
      title: product.title,
      description: product.description,
      price: product.price,
      image: product.image,
    });

    res.redirect("/cart");
  } catch (err) {
    next(err);
  }
};


module.exports.viewCart = (req, res) => {
  const cart = req.session.cart || [];
  res.render("productListings/cart", { cart });
};

module.exports.clearCart = (req, res) => {
  req.session.cart = [];
  res.redirect("/cart");
};

module.exports.deleteCartItem = (req, res) => {
  const { productId } = req.body;
  if (!req.session.cart) req.session.cart = [];
  req.session.cart = req.session.cart.filter(p => p.id !== productId);
  res.redirect("/cart");
};
