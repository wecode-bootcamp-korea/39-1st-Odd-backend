const lectureDao = require("../models/lectureDao");

const getLectureByLectureId = async (lectureId) => {
  const lecture = await lectureDao.getLectureByLectureId(lectureId);

  if (!lecture) {
    const err = new Error("lecture does not exist");
    err.statusCode = 404;
    throw err;
  }
  return lecture;
};

module.exports = {
  getLectureByLectureId,
};
