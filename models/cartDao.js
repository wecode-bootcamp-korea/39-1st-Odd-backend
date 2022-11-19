const { database } = require("./dataSource");
const { raiseCustomError } = require("../utils/error");

const addProduct = async (userId, productId, quantity) => {
  try {
    return await database.query(
      `INSERT INTO
            users(
                product_id,
                user.id,
                quantity
            )
        VALUES(?,?,?)               
        `,
      [productId, userId, quantity]
    );
  } catch (err) {
    raiseCustomError(INVALID_DATA_INPUT, 500);
  }
};

module.exports = { addProduct };
