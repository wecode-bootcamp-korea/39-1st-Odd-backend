const { database } = require("./dataSource");

const getAllLecture = async () => {
  const lectures = await database.query(
    `SELECT
           id,
           title,
           thumbnail_image_url as img,
           price
    FROM
        products
    `
  );
  return lectures;
};

module.exports = { getAllLecture };
