const { database } = require("./dataSource");
const { raiseCustomError } = require("../utils/error");

const modifyQuantity = async (quantity, userId, productId) => {
  try {
    return await database.query(
      `UPDATE
          carts
        SET
          quantity =?
        WHERE user_id =? AND product_id = ?
          `,
      [quantity, userId, productId]
    );
  } catch (err) {
    raiseCustomError("INVALID_DATA_INPUT", 500);
  }
};

module.exports = { modifyQuantity };
