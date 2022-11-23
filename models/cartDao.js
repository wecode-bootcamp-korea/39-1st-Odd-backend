const { database } = require("./dataSource");
const { raiseCustomError } = require("../utils/error");

const deleteProduct = async (userId, productId) => {
  try {
    return await database.query(
      `DELETE FROM 
        carts
      WHERE
        product_id = ? AND user_id = ?
        `,
      [productId, userId]
    );
  } catch (err) {
    raiseCustomError("INVALID_DATA_INPUT", 500);
  }
};

module.exports = { deleteProduct };
