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

const getLectureByLectureId = async (lectureId) => {
  const lecture = await lectureDao.getLectureByLectureId(lectureId);

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

const postComment = async (user_id, product_id, content, rate) => {
  const comment = await lectureDao.postComment(
    user_id,
    product_id,
    content,
    rate
  );

  if (!comment) {
    const err = new Error("lecture does not exist");
    err.statusCode = 404;
    throw err;
  }
  return comment;
};

module.exports = {
  getAllLecture,
  getLectureByLectureId,
  getLectureByCategoryId,
  postComment,
};
