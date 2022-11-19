const cartDao = require("../models/cartDao");

const getCartByUserId = async (userId) => {
  return await cartDao.getCartByUserId(userId);
};

module.exports = { getCartByUserId };
