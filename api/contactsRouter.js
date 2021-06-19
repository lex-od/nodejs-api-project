const express = require("express");
const guard = require("./guard");
const {
    getAllContacts,
    getContact,
    addContact,
    removeContact,
    updateContact,
    updateStatus,
} = require("../controllers/contactsCtrl");

const router = express.Router();

router.get("/", guard, getAllContacts);

router.get("/:id", guard, getContact);

router.post("/", guard, express.json(), addContact);

router.delete("/:id", guard, removeContact);

router.put("/:id", guard, express.json(), updateContact);

router.patch("/:id/favorite", guard, express.json(), updateStatus);

module.exports = router;
