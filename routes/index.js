const express = require("express");

const cartRouter = require("./cartRouter");
const userRouter = require("./userRouter");

const router = express.Router();

router.use("/users", userRouter);
router.use("/cart", cartRouter);

module.exports = router;
