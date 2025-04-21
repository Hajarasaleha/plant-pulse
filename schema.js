
const Joi = require('joi');

const productSchema = Joi.object({
  title: Joi.string().min(3).max(100).required(),
  description: Joi.string().min(10).required(),
  image: Joi.string().uri().required(),
  price: Joi.number().min(1).required(),
  category: Joi.string().valid('fertilizers', 'seeds', 'plants', 'agricultural tools', 'irrigation tools').required()
});

module.exports = { productSchema };
