const express = require("express");
const { signup } = require("../controllers/usersController");

const router = express.Router();

router.get("/signup", signup);

module.exports = router;
