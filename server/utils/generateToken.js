require("dotenv").config();
const jwt = require("jsonwebtoken");

const generateToken = (id) => {
    const token = jwt.sign({ id }, process.env.SECRET, { expiresIn: '7d' });
    return token;
}
module.exports = {generateToken}