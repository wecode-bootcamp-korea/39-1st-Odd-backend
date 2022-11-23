const express = require("express");

const cartRouter = require("./cartRouter");
const router = express.Router();

const userRouter = require("./userRouter");
const lectureRouter = require("./lectureRouter");

router.use("/users", userRouter);
router.use("/lecture", lectureRouter);
router.use("/cart", cartRouter);

module.exports = router;
