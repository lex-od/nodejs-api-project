const { contactsOps: ops } = require("../../services");
const { ApiError, apiConsts } = require("../../helpers");

const { DB_ACCESS_ERROR } = apiConsts;

const getAllContacts = async ({ user: { _id } }, res, next) => {
    try {
        res.json({ result: await ops.getAllContacts(_id) });
    } catch {
        next(new ApiError(DB_ACCESS_ERROR));
    }
};

module.exports = getAllContacts;
