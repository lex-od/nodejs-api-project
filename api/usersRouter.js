const express = require("express");
const { signup } = require("../controllers/usersController");

const router = express.Router();

router.post("/signup", express.json(), signup);

module.exports = router;
