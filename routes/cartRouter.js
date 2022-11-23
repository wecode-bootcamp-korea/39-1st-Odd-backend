const express = require("express");

const cartController = require("../controllers/cartController");
const { loginRequired } = require("../utils/checkUser");

const router = express.Router();

router.patch("/:productId", loginRequired, cartController.modifyQuantity);

module.exports = router;
