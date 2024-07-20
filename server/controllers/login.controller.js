const User = require("../modals/User.modal.js");
const bcrypt = require("bcrypt");
const {generateToken}= require("../utils/generateToken.js")

const login = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.json({ message: "Enter the details properly" });
        }
        const user = await User.findOne({ email });
        if (!user) return res.json({ message:"User not found. Try to Signup"});
        const authCheck = bcrypt.compare(password, user.password);
        if (!authCheck) return res.json({ message: "Incorrect password" });
        const token = generateToken(user._id);
        res.cookie("token", token, {
          withCredentials: true,
          httpOnly: false,
          secure: true, // Ensures the cookie is only sent over HTTPS
          sameSite: "None",
        });
        res.status(201).json({ message: "User logged in successfully" ,success:true})
    }
    catch (err) {
        console.log(err)
    }
}

module.exports={login}
