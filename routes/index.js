const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");
const lectureRouter = require("./lectureRouter");
const productRouter = require("./productRouter");
const cartRouter = require("./cartRouter");
const commentRouter = require("./commentRouter");

router.use("/cart", cartRouter);
router.use("/users", userRouter);
router.use("/lecture", lectureRouter);
router.use("/products", productRouter);
router.use("/comment", commentRouter);

module.exports = router;
