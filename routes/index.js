const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");
const lectureRouter = require("./lectureRouter");

router.use("/users", userRouter);
router.use("/lectures", lectureRouter);

module.exports = router;
