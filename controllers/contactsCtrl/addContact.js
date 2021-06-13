const { contactsOps: ops } = require("../../services");
const { ApiError, constants: consts } = require("../../helpers");

const addContact = async ({ body }, res, next) => {
    try {
        res.status(201).json({ result: await ops.addContact(body) });
    } catch ({ name, message }) {
        if (consts.REQUEST_ERRORS.includes(name))
            return next(new ApiError(message, 400));

        next(new ApiError("DB access error"));
    }
};

module.exports = addContact;
