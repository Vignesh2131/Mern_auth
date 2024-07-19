const { signUp } = require("../controllers/createUser.controller.js")
const { login } = require("../controllers/login.controller.js")
const {userVerification} = require("../middlewares/auth.middleware.js")
const router = require("express").Router();

router.post("/signup", signUp);
router.post("/login", login);
router.post("/",userVerification)
module.exports = router;