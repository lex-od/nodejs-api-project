const { contactsOps: ops } = require("../../services");

const getAllContacts = async (_, res, next) => {
    try {
        res.json({ result: await ops.getAllContacts() });
    } catch {
        next(new Error("DB access error"));
    }
};

module.exports = getAllContacts;
