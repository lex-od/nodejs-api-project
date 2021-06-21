const express = require("express");
const guard = require("./guard");
const {
    signup,
    login,
    logout,
    getCurrent,
} = require("../controllers/usersController");

const router = express.Router();

router.post("/signup", express.json(), signup);

router.post("/login", express.json(), login);

router.post("/logout", guard, logout);

router.get("/current", guard, getCurrent);

module.exports = router;
