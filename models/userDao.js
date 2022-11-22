const { database } = require("./dataSource");

const getUserByEmail = async (email) => {
  const [user] = await database.query(
    `
      SELECT *
      FROM 
        users u
      WHERE
        u.email = ?`,
    [email]
  );

  return user;
};

const signIn = async (email) => {
  try {
    return await database.query(
      `SELECT
        id, 
        email,
        password
      FROM
        users
      WHERE
        email = ?`,
      [email]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

module.exports = {
  signIn,
  getUserByEmail,
};
