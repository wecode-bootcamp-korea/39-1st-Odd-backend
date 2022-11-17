const { database } = require("./dataSource");

const getLectureByParameter = async (categoryId) => {
  const lectures = await database.query(
    `SELECT
                P.id,
                title,
                thumbnail_image_url as img,
                price
        FROM
                products as P
     `,
    [categoryId]
  );
  return lectures;
};

module.exports = {
  getLectureByParameter,
};
