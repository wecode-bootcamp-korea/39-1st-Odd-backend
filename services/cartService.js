const cartDao = require("../models/cartDao");
const { raiseCustomError } = require("../utils/error");

const modifyQuantity = async (userId, productId, quantity) => {
  if (quantity > 7) {
    raiseCustomError("too Many products", 409);
  }

  return await cartDao.modifyQuantity(userId, productId, quantity);
};

module.exports = { modifyQuantity };
