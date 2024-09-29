// const { use } = require('../routes/auth');
const conn = require('./config');

const checkUserExists = async (email) => {
    try {
        console.log("Email parameter in query:", email);
        const query = `SELECT * FROM users WHERE email = ?`;
        const [rows] = await conn.promise().query(query, [email]);
        return rows;
    } catch (error) {
        console.error("Error executing query:", error.message);
        throw new Error("Database query failed");
    }
};

const registerUser = async (user) => {
    const { email, firstName, lastName, password } = user;
    const query =  `INSERT INTO users (email, firstName, lastName, password) VALUES (?, ?, ?, ?)`
    await conn.promise().query(query,[email, firstName, lastName, password]);
};

const loginUser = async (user) => {
    console.log(user);
    const { email, password } = user;
    const query = `SELECT * FROM users WHERE email = ?`;

    const [rows] = await conn.promise().query(query, [email]);
    return rows; // Return the result
};


module.exports = { checkUserExists, registerUser, loginUser };

