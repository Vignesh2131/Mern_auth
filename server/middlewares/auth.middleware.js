const User = require("../modals/User.modal.js")
require("dotenv").config();
const jwt = require("jsonwebtoken");

const userVerification = (req, res,next) => {
    const token = req.cookies.token;
    if (!token) return res.json({ status: false });
    jwt.verify(token, process.env.SECRET, async (err, data) => {
        if (err) return res.json({ status: false })
        else {
            const user = await User.findById(data.id);
            if (user) {
                res.json({ status: true, user: user.username });
                next();
            }
            else res.json({ status: false });
        }
    })
}
module.exports={userVerification}