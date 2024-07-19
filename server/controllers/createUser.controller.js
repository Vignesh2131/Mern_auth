const User = require("../modals/User.modal.js")
const { generateToken } = require("../utils/generateToken.js")

const signUp = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }
        const user = await User.create({ email, username, password })
        if (user) console.log("User created");
        const token = generateToken(user._id);
        console.log(token)
        res.cookie("token", token, {
            withCredentials: true,
            httpOnly: false,
        });
        res.status(201)
            .json({ message: "User signed in successfully", user })
        next();
    }
    catch (err) {
        console.log(err);
    }
}
module.exports={signUp}