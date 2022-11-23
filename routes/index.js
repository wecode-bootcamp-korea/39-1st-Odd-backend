const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");
const cartRouter = require("./cartRouter");

router.use("/cart", cartRouter);
router.use("/users", userRouter);

module.exports = router;
