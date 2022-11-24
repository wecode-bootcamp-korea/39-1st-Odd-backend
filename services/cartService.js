const cartDao = require("../models/cartDao");

const addCart = async (userId, productId, quantity) => {
  if (!quantity) {
    quantity = 1;
  }

  const cartProduct = await cartDao.getCartByUserId(userId);
  for (let i = 0; i < cartProduct.length; i++) {
    if (cartProduct[i].productId == productId) {
      raiseCustomError("Already added", 409);
    }
  }

  return await cartDao.addCart(userId, productId, quantity);
};

module.exports = { addCart };
