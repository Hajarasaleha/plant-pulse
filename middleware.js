// middleware/validateProduct.js
const { productSchema } = require("./schema.js");
const ExpressError= require("./utils/ExpressError.js");

function validateProduct(req, res, next) {
  const { error } = productSchema.validate(req.body.product, { abortEarly: false });

  if (error) {
    const errmsg = error.details.map(el => el.message).join(", ");
    throw new ExpressError(400,errmsg)
  }
  next();
}

module.exports = validateProduct;
