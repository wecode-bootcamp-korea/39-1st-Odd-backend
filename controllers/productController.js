const productService = require("../services/productService");

const getProductsByParameter = async (req, res) => {
  try {
    const products = await productService.getProductsByParameter(req.query);

    return res.status(201).json(products);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  getProductsByParameter,
};
