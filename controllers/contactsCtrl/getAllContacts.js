const { contactsOps: ops } = require("../../services");
const { ApiError } = require("../../helpers");

const getAllContacts = async (_, res, next) => {
    try {
        res.json({ result: await ops.getAllContacts() });
    } catch {
        next(new ApiError("DB access error"));
    }
};

module.exports = getAllContacts;
