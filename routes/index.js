const express = require("express");

const userRouter = require("./userRouter");
const lectureRouter = require("./lectureRouter");
const productRouter = require("./productRouter");
const router = express.Router();

router.use("/users", userRouter);
router.use("/lecture", lectureRouter);
router.use("/products", productRouter);

module.exports = router;
