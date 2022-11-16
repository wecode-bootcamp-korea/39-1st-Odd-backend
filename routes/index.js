const express = require("express");

// const userRouter = require("./userRouter");
const lectureRouter = require("./lectureRouter");
const router = express.Router();

// router.use("/users", userRouter);
router.use("/lectures", lectureRouter);

module.exports = router;
