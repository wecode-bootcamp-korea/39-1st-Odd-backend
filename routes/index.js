const express = require("express");

const userRouter = require("./userRouter");
const cartRouter = require("./cartRouter");
const router = express.Router();

router.use("/cart", cartRouter);
router.use("/users", userRouter);

module.exports = router;
