const express = require("express");
const { register, login, getUserData, logout } = require("../controllers/userController.js");
const { isVerifiedUser } = require("../middlewares/tokenVerification.js");
const router = express.Router();

// Authentication Routes
router.route("/register").post(register);
router.route("/login").post(login);
router.route("/logout").post(isVerifiedUser,logout);
router.route("/").get(isVerifiedUser , getUserData);

module.exports = router;