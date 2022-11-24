const { database } = require("./dataSource");
const { raiseCustomError } = require("../utils/error");

const getCartsByUserId = async (userId) => {
  try {
    return await database.query(
      `SELECT
        U.name,
        U.email,
        U.phone_number AS phoneNumber,
        C.id,
        C.product_id as productId,
        C.quantity,
        P.title,
        P.thumbnail_image_url AS image,
        PT.name AS type,
        P.price
      FROM
        users U
      LEFT JOIN
        carts C
      ON
        U.id = C.user_id
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
        U.id = ?
        `,
      [userId]
    );
  } catch (err) {
    raiseCustomError("INVALID_DATA_INPUT", 500);
  }
};

module.exports = { getCartsByUserId };
