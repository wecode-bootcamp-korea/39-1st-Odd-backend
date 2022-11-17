const lectureService = require("../services/lectureService");

const getLectureByParameter = async (req, res) => {
  try {
    const categoryId = +req.params.categoryId;

    const lectures = await lectureService.getLectureByParameter(categoryId);

    return res.status(201).json(lectures);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  getLectureByParameter,
};
