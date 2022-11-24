const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");
const lectureRouter = require("./lectureRouter");
const productRouter = require("./productRouter");
const cartRouter = require("./cartRouter");

router.use("/cart", cartRouter);
router.use("/users", userRouter);
router.use("/lecture", lectureRouter);
router.use("/cart", cartRouter);

module.exports = router;
