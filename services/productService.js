const productDao = require("../models/productDao");
const { catchAsync } = require("../utils/error");

const getProductsByParameter = catchAsync(async (param) => {
  const makeNameFilter = (name) => {
    let nameClauses = name.map((x) => `C.name = '${x}'`);
    return `${nameClauses.join(" OR ")}`;
  };

  const makeTypeFilter = (type) => {
    let nameClauses = type.map((x) => `PT.name = '${x}'`);
    return `${nameClauses.join(" OR ")}`;
  };

  const makeWhereClauseBuilder = (param) => {
    const builderSet = {
      name: makeNameFilter,
      type: makeTypeFilter,
    };

    const whereClauses = Object.entries(param).map(([key, value]) => {
      return builderSet[key](value);
    });

    return `WHERE ${whereClauses.join(" AND ")}`;
  };

  const products = await productDao.getProductsByParameter(
    makeWhereClauseBuilder(param)
  );

  if (!products) {
    const err = new Error("products does not exist");
    err.statusCode = 404;
    throw err;
  }
  return products;
});

module.exports = {
  getProductsByParameter,
};
