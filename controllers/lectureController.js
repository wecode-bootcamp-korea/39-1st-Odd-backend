const lectureService = require("../services/lectureService");

const getAllLecture = async (req, res) => {
  try {
    const lectures = await lectureService.getAllLecture();

    return res.status(201).json({ lectures });
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
};

const getLectureByPostId = async (req, res) => {
  try {
    const postId = +req.params.postId;

    const lectures = await lectureService.getLectureByPostId(postId);

    return res.status(201).json({ message: lectures });
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = { getAllLecture, getLectureByPostId };
