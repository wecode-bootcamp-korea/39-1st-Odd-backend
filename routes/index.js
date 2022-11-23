const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");
const lectureRouter = require("./lectureRouter");
const cartRouter = require("./cartRouter");

router.use("/cart", cartRouter);
router.use("/users", userRouter);
router.use("/lecture", lectureRouter);

module.exports = router;
