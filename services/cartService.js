const cartDao = require("../models/cartDao");

const deleteProduct = async (userId, productId) => {
  return await cartDao.deleteProduct(userId, productId);
};

module.exports = { deleteProduct };
