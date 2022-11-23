const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");
const commentRouter = require("./commentRouter");

router.use("/users", userRouter);
router.use("/comment", commentRouter);

module.exports = router;
