const express = require("express");

const cartRouter = require("./cartRouter");
const router = express.Router();

const userRouter = require("./userRouter");

router.use("/users", userRouter);

module.exports = router;
