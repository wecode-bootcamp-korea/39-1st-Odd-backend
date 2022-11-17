const { database } = require("./dataSource");

const getProductsByParameter = async (name, type) => {
  const products = await database.query(
    `SELECT
          P.id,
          title,
          price,
          thumbnail_image_url AS image,
          C.name AS category
    FROM 
          products AS P
    LEFT JOIN
          categories AS C
    ON 
          C.id = P.category_id
    LEFT JOIN
          product_types AS PT
    ON
          PT.id = C.product_type_id
    WHERE
          C.name = ? AND PT.name = ?
     `,
    [name, type]
  );
  return products;
};

module.exports = {
  getProductsByParameter,
};
