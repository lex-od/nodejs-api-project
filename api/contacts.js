const express = require("express");
const { getAll, getOne, add, del, update } = require("../controllers/contacts");

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getOne);

router.post("/", express.json(), add);

router.delete("/:id", del);

router.put("/:id", express.json(), update);

module.exports = router;
