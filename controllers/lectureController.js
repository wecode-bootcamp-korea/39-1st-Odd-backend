const lectureService = require("../services/lectureService");

const getLectureByLectureId = async (req, res) => {
  try {
    const lectureId = +req.params.lectureId;

    const lectures = await lectureService.getLectureByLectureId(lectureId);

    return res.status(201).json(lectures);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  getLectureByLectureId,
};
