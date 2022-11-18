const productService = require("../services/productService");

const getProductsByParameter = async (req, res) => {
  try {
    const name = req.query.name;
    const type = req.query.type;

    const products = await productService.getProductsByParameter(name, type);

    return res.status(201).json(products);
  } catch (err) {
    console.log(err);
    return res.status(err.statusCode || 500).json({ message: err.message });
  }
};

module.exports = {
  getProductsByParameter,
};
