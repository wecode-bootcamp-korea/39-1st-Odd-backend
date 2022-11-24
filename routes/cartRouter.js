const express = require("express");

const cartController = require("../controllers/cartController");
const { loginRequired } = require("../utils/checkUser");

const router = express.Router();

router.get("", loginRequired, cartController.getCartsByUserId);

module.exports = router;
