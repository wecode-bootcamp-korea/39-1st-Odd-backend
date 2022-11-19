const express = require("express");

const cartRouter = require("./cartRouter");
const router = express.Router();

router.use("/carts", cartRouter);

module.exports = router;
