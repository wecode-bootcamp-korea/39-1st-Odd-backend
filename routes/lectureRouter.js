const express = require("express");

const lectureController = require("../controllers/lectureController");

const router = express.Router();

router.get("/:lectureId", lectureController.getLectureByLectureId);

module.exports = router;
