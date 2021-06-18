const express = require("express");
const { signup, login } = require("../controllers/usersController");

const router = express.Router();

router.post("/signup", express.json(), signup);

router.post("/login", express.json(), login);

module.exports = router;
