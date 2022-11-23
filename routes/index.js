const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");
const lectureRouter = require("./lectureRouter");
const commentRouter = require("./commentRouter");

router.use("/users", userRouter);
router.use("/lecture", lectureRouter);
router.use("/comment", commentRouter);

module.exports = router;
