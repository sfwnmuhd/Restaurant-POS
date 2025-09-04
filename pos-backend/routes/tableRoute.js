const express = require("express");
const { addTable, getTables, updateTable } = require("../controllers/tableController.js");
const { isVerifiedUser } = require("../middlewares/tokenVerification.js");
const router = express.Router();


router.route("/").post(isVerifiedUser,addTable);
router.route("/").get(isVerifiedUser ,getTables);
router.route("/:id").put(isVerifiedUser, updateTable);

module.exports = router;