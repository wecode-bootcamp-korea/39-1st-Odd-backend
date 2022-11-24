const cartDao = require("../models/cartDao");
const { raiseCustomError } = require("../utils/error");

const addCart = async (userId, productId, quantity = 1) => {
  const cartProducts = await cartDao.getCartsByUserId(userId);
  for (let i = 0; i < cartProducts.length; i++) {
    if (cartProducts[i].productId == productId) {
      raiseCustomError("Already added", 409);
    }
  }

  return await cartDao.addCart(userId, productId, quantity);
};

const getCartsByUserId = async (userId) => {
  return await cartDao.getCartsByUserId(userId);
};

const modifyQuantity = async (userId, productId, quantity) => {
  if (quantity > 7) {
    raiseCustomError("too Many products", 409);
  }

  return await cartDao.modifyQuantity(userId, productId, quantity);
};

module.exports = { addCart, getCartsByUserId, modifyQuantity };
