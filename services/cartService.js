const cartDao = require("../models/cartDao");

const addProduct = async (userId, productId, quantity) => {
  if (!quantity) {
    quantity = 1;
  }

  const cartProduct = await cartDao.getCartByUserId(userId);
  for (let i = 0; i < cartProduct.length; i++) {
    if (cartProduct[i].productId == productId) {
      raiseCustomError("Already added", 409);
    }
  }

  return await cartDao.addProduct(userId, productId, quantity);
};

module.exports = { addProduct };
