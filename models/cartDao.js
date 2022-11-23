const { database } = require("./dataSource");
const { raiseCustomError } = require("../utils/error");

const addProduct = async (userId, productId, quantity) => {
  try {
    return await database.query(
      `INSERT INTO
            carts(
                product_id,
                user_id,
                quantity
            )
        VALUES(?,?,?)               
        `,
      [productId, userId, quantity]
    );
  } catch (err) {
    raiseCustomError("INVALID_DATA_INPUT", 500);
  }
};

const getCartByUserId = async (userId) => {
  try {
    return await database.query(
      `SELECT
        C.id,
        C.product_id as productId,
        C.quantity,
        P.title,
        P.thumbnail_image_url
      FROM
        carts C
      LEFT JOIN
        products P
      ON
        P.id = C.product_id
      WHERE
        C.user_id = ?
      `,
      [userId]
    );
  } catch (err) {
    raiseCustomError("INVALID_DATA_INPUT", 500);
  }
};

module.exports = { addProduct, getCartByUserId };
