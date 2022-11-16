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

const getLectureByPostId = async (postId) => {
  const lecture = await database.query(
    `SELECT
          P.id AS id,
          title,
          description,
          price,
          thumbnail_image_url AS profileImg,
          PI.images
    FROM
          products AS P
    LEFT JOIN
          (
      SELECT
            product_id,
        JSON_ARRAYAGG(
          JSON_OBJECT(
                "id", id,
                "image", image_url
          )
      ) AS images
    FROM
          product_images
    GROUP BY 
          product_id
          ) PI 
    ON 
          P.id = PI.product_id
    WHERE id = ?
    `,
    [postId]
  );
  return lecture;
};

const getLectureByCategoryId = async (categoryId) => {
  const lectures = await database.query(
    `SELECT
            id,
            title,
            thumbnail_image_url as img,
            price
    FROM
            products
    WHERE category_id =?
 `,
    [categoryId]
  );
  return lectures;
};

module.exports = { getAllLecture, getLectureByPostId };
