const lectureDao = require("../models/lectureDao");
const { raiseCustomError } = require("../utils/error");

const getLectureByLectureId = async (lectureId) => {
  const lecture = await lectureDao.getLectureByLectureId(lectureId);

  if (!lecture) {
    raiseCustomError("lecture does not exist", 404);
  }

  return lecture;
};

module.exports = {
  getLectureByLectureId,
};
