const productDao = require("../models/productDao");

const getProductsByParameter = async (name, type) => {
  let result = `WHERE`;
  let count = 0;

  if (name) {
    result += ` C.name= '${name}'`;
    count++;
  }
  if (type) {
    if (count == 0) result += ` PT.name = '${type}'`;
    else result += ` and PT.name= '${type}'`;
  }
  if (!name && !type) {
    result = ``;
  }
  console.log(result);
  const products = await productDao.getProductsByParameter(result);

  if (!products) {
    const err = new Error("products does not exist");
    err.statusCode = 404;
    throw err;
  }
  return products;
};

module.exports = {
  getProductsByParameter,
};
