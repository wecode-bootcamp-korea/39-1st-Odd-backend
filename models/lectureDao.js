const { database } = require("./dataSource");

const getAllLecture = async () => {
  const lectures = await database.query(
    `SELECT
          P.id,
          title,
          thumbnail_image_url as img,
          price
    FROM
          products as P
    LEFT JOIN
          categories as C
    ON 
          P.category_id = C.id
    LEFT JOIN
          product_types as PT
    ON
          C.product_type_id = PT.id
    WHERE
          PT.id = 1
    `
  );
  return lectures;
};

const getLectureByLectureId = async (lectureId) => {
  const [lecture] = await database.query(
    `SELECT
          P.id AS id,
          title,
          description,
          price,
          C.name AS category,
          thumbnail_image_url AS profileImg,
          PI.images
    FROM
          products AS P
    LEFT JOIN
          categories as C
    ON
          C.id = P.category_id
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
    WHERE P.id = ?
    `,
    [lectureId]
  );
  return lecture;
};

const getLectureByCategoryId = async (categoryId) => {
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

const postComment = async (user_id, product_id, content, rate) => {
  const comment = await database.query(
    `INSERT INTO 
            comments(
              user_id,
              product_id,
              content,
              rate
            )
    VALUES (?,?,?,?)
    `,
    [user_id, product_id, content, rate]
  );

  return comment;
};

module.exports = {
  getAllLecture,
  getLectureByLectureId,
  getLectureByCategoryId,
  postComment,
};
