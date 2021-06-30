const express = require("express");
const guard = require("./guard");
const multerUpload = require("./multerUpload");
const {
    signup,
    verify,
    repeatVerify,
    login,
    logout,
    getCurrent,
    updateAvatar,
} = require("../controllers/usersController");

const router = express.Router();

router.post("/signup", express.json(), signup);

router.get("/verify/:verificationToken", verify);

router.post("/verify", express.json(), repeatVerify);

router.post("/login", express.json(), login);

router.post("/logout", guard, logout);

router.get("/current", guard, getCurrent);

router.patch("/avatars", guard, multerUpload.single("avatar"), updateAvatar);

module.exports = router;
