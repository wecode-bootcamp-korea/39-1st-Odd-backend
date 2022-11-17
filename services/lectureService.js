const lectureDao = require("../models/lectureDao");

const getLectureByParameter = async (categoryId) => {
  const lectures = await lectureDao.getLectureByParameter(categoryId);

  if (!lectures) {
    const err = new Error("lecture does not exist");
    err.statusCode = 404;
    throw err;
  }
  return lectures;
};

module.exports = {
  getLectureByParameter,
};
