const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");
const lectureRouter = require("./lectureRouter");
const cartRouter = require("./cartRouter");

router.use("/users", userRouter);
router.use("/lecture", lectureRouter);
router.use("/cart", cartRouter);

module.exports = router;
