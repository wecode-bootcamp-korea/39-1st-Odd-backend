const productDao = require("../models/productDao");

const getProductsByParameter = async (name, type) => {
  const products = await productDao.getProductsByParameter(name, type);

  if (!products) {
    const err = new Error("lecture does not exist");
    err.statusCode = 404;
    throw err;
  }
  return products;
};

module.exports = {
  getProductsByParameter,
};
