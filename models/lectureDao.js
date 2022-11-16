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
          P.id,
          title,
          description,
          price,
          thumbnail_image_url,
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

module.exports = { getAllLecture, getLectureByPostId };
