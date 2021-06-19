const { contactsOps: ops } = require("../../services");
const { ApiError, apiConsts } = require("../../helpers");

const { DB_ACCESS_ERROR } = apiConsts;

const getAllContacts = async (_, res, next) => {
    try {
        res.json({ result: await ops.getAllContacts() });
    } catch {
        next(new ApiError(DB_ACCESS_ERROR));
    }
};

module.exports = getAllContacts;
