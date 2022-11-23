const { database } = require("./dataSource");
const { raiseCustomError } = require("../utils/error");

const getCartByUserId = async (userId) => {
  try {
    return await database.query(
      `SELECT
          C.id,
          C.product_id AS productId,
          C.quantity,
          P.title,
          P.thumbnail_image_url AS image,
          PT.name AS type,
          P.price
        FROM
          carts C
        LEFT JOIN
          products P
        ON
          P.id = C.product_id
        LEFT JOIN
          categories AS CA
        ON 
          CA.id = P.category_id
        LEFT JOIN
          product_types AS PT
        ON
          PT.id = CA.product_type_id
        WHERE
          C.user_id = ?
        `,
      [userId]
    );
  } catch (err) {
    raiseCustomError("INVALID_DATA_INPUT", 500);
  }
};

module.exports = { getCartByUserId };
