const express = require("express");
const { register, login, getUserData } = require("../controllers/userController.js");
const { isVerifiedUser } = require("../middlewares/tokenVerification.js");
const router = express.Router();

// Authentication Routes
router.route("/register").post(register);
router.route("/login").post(login);

router.route("/").get(isVerifiedUser , getUserData);

module.exports = router;