const express = require("express");
const router = express.Router();
const carts = require("../controllers/carts");

router.post("/", carts.addToCart);
router.get("/", carts.viewCart);
router.post("/clear", carts.clearCart);
router.post("/delete", carts.deleteCartItem);

module.exports = router;
