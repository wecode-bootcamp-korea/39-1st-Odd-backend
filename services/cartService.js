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

module.exports = { addCart };
