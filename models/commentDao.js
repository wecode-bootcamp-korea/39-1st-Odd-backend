const { database } = require("./dataSource");

const createComment = async (userId, content, rate, productId) => {
  const comment = await database.query(
    `
      INSERT INTO comments(
                  user_id, 
                  content, 
                  rate, 
                  product_id
                  )
            VALUES(?, ?, ?, ?);
            `,
    [userId, content, rate, productId]
  );
  return comment;
};

module.exports = {
  createComment,
};
