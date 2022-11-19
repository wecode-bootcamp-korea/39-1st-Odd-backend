const cartDao = require("../models/cartDao");

const addProduct = async (userId, productId, quantity) => {
  if (!quantity) {
    quantity = 1;
  }
  return await cartDao.addProduct(userId, productId, quantity);
};

module.exports = { addProduct };
