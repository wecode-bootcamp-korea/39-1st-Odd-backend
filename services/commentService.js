const commentDao = require("../models/commentDao");

const createComment = async (userId, content, rate, productId) => {
  return await commentDao.createComment(userId, content, rate, productId);
};

module.exports = {
  createComment,
};
