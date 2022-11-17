const lectureService = require("../services/lectureService");

const getAllLecture = async (req, res) => {
  try {
    const lectures = await lectureService.getAllLecture();
    return res.status(201).json(lectures);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

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

const getLectureByCategoryId = async (req, res) => {
  try {
    const categoryId = +req.params.categoryId;

    const lectures = await lectureService.getLectureByCategoryId(categoryId);

    return res.status(201).json(lectures);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const postComment = async (req, res) => {
  try {
    const { user_id, product_id, content, rate } = req.body;

    await lectureService.postComment(user_id, product_id, content, rate);

    return res.status(201).json({ message: "commentCreated" });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  getAllLecture,
  getLectureByLectureId,
  getLectureByCategoryId,
  postComment,
};
