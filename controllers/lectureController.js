const lectureService = require("../services/lectureService");
const { catchAsync } = require("../utils/error");

const getLectureByLectureId = catchAsync(async (req, res) => {
  const lectureId = +req.params.lectureId;

  const lectures = await lectureService.getLectureByLectureId(lectureId);

  return res.status(200).json(lectures);
});

module.exports = {
  getLectureByLectureId,
};
