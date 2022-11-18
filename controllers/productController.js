const productService = require("../services/productService");
const { catchAsync } = require("../utils/error");

const getProductsByParameter = catchAsync(async (req, res) => {
  const products = await productService.getProductsByParameter(req.query);

  return res.status(201).json(products);
});

module.exports = {
  getProductsByParameter,
};
