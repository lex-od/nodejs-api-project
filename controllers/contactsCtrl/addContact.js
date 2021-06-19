const { contactsOps: ops } = require("../../services");
const { ApiError, apiConsts } = require("../../helpers");

const { REQUEST_ERRORS, DB_ACCESS_ERROR } = apiConsts;

const addContact = async ({ body }, res, next) => {
    try {
        res.status(201).json({ result: await ops.addContact(body) });
    } catch ({ name, message }) {
        if (REQUEST_ERRORS.includes(name))
            return next(new ApiError(message, 400));

        next(new ApiError(DB_ACCESS_ERROR));
    }
};

module.exports = addContact;
