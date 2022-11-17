const express = require("express");

const lectureController = require("../controllers/lectureController");

const router = express.Router();

router.get("/", lectureController.getAllLecture);
router.get("/:lectureId", lectureController.getLectureByLectureId);
router.get("/categories/:categoryId", lectureController.getLectureByCategoryId);
router.post("/comment", lectureController.postComment);

module.exports = router;
