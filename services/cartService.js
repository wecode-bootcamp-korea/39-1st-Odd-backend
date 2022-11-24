const cartDao = require("../models/cartDao");

const getCartsByUserId = async (userId) => {
  return await cartDao.getCartsByUserId(userId);
};

module.exports = { getCartsByUserId };
