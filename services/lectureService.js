const lectureDao = require("../models/lectureDao");

const getAllLecture = async () => {
  const lectures = await lectureDao.getAllLecture();

  if (!lectures) {
    const err = new Error("lecture does not exist");
    err.statusCode = 404;
    throw err;
  }

  return lectures;
};

const getLectureByPostId = async (postId) => {
  const lecture = await lectureDao.getLectureByPostId(postId);

  if (!lecture) {
    const err = new Error("lecture does not exist");
    err.statusCode = 404;
    throw err;
  }
  return lecture;
};

const getLectureByCategoryId = async (categoryId) => {
  const lectures = await lectureDao.getLectureByCategoryId(categoryId);

  if (!lectures) {
    const err = new Error("lecture does not exist");
    err.statusCode = 404;
    throw err;
  }
  return lectures;
};
module.exports = { getAllLecture, getLectureByPostId, getLectureByCategoryId };
