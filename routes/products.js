const express = require("express");
const router = express.Router();
const products = require("../controllers/products");
const validateProduct = require("../middleware");

router.get("/", products.index);
router.get("/new", products.renderNewForm);
router.post("/", validateProduct, products.createProduct);
router.get("/category/:category", products.categoryFilter);
router.get("/filter", products.combinedFilter);

router.delete("/delete/:id", products.deleteProduct);
router.get("/show/:id", products.showProduct);

module.exports = router;
