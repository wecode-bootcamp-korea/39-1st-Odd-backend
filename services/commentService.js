const commentDao = require("../models/commentDao");

const createComment = async (userId, content, rate, productId) => {
  return await commentDao.createComment(userId, content, rate, productId);
};

const getCommentsByProductId = async (productId) => {
  return await commentDao.getCommentsByProductId(productId);
};

module.exports = {
  createComment,
  getCommentsByProductId,
};
