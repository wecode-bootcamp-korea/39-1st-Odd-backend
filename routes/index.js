const express = require("express");

const router = express.Router();

const userRouter = require("./userRouter");
<<<<<<< HEAD
const cartRouter = require("./cartRouter");
=======
const lectureRouter = require("./lectureRouter");
>>>>>>> main

router.use("/cart", cartRouter);
router.use("/users", userRouter);
router.use("/lecture", lectureRouter);

module.exports = router;
