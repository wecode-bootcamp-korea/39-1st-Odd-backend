const { database } = require("./dataSource");

const createUser = async (email, hashedPassword, name, phonenumber) => {
  try {
    return await database.query(
      `INSERT INTO users(
                email, 
                password, 
                name, 
                phone_number
                ) 
            VALUES (?, ?, ?, ?);
            `,
      [email, hashedPassword, name, phonenumber]
    );
  } catch (err) {
    const error = new Error("INVALID_DATA_INPUT");
    error.statusCode = 500;
    throw error;
  }
};

const getUserById = async (id) => {
  const result = await dataSource.query(
    `
		SELECT 
			id,
			name,
			email,
			password
		FROM users
		WHERE id=?`,
    [id]
  );

  return result[0];
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

module.exports = {
  createUser,
  getUserById,
  signIn,
  getUserByEmail,
};
