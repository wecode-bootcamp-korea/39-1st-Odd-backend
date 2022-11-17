const express = require("express");

const lectureController = require("../controllers/lectureController");

const router = express.Router();

router.get("/", lectureController.getLectureByParameter);

module.exports = router;
