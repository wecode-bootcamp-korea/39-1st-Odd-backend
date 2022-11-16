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

module.exports = { getAllLecture };
