const express = require("express");

const cartController = require("../controllers/cartController");
const { loginRequired } = require("../utils/checkUser");

const router = express.Router();

router.post("/:productId", loginRequired, cartController.addCart);
router.get("", loginRequired, cartController.getCartsByUserId);
router.patch("/:productId", loginRequired, cartController.modifyQuantity);
router.delete(
  "/productId/:productId",
  loginRequired,
  cartController.deleteProduct
);

module.exports = router;
