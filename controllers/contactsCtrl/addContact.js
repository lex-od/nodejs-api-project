const { contactsOps: ops } = require("../../services");
const { ApiError } = require("../../helpers");

const addContact = async ({ body }, res, next) => {
    try {
        res.status(201).json({ result: await ops.addContact(body) });
    } catch (err) {
        if (err.name === "ValidationError")
            return next(new ApiError(err.message, 400));

        next(new ApiError("DB access error"));
    }
};

module.exports = addContact;
