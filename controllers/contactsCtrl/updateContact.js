const mongoose = require("mongoose");
const { contactsOps: ops } = require("../../services");
const { ApiError, constants: consts } = require("../../helpers");

const updateContact = async ({ params: { id }, body }, res, next) => {
    try {
        if (!mongoose.isValidObjectId(id))
            return next(new ApiError(consts.INVALID_ID_MSG, 400));

        const contact = await ops.updateContact(id, body);

        if (!contact) return next(new ApiError(consts.ID_NOT_EXIST_MSG, 404));

        res.json({ result: contact });
    } catch (err) {
        if (err.name === "ValidationError")
            return next(new ApiError(err.message, 400));

        next(new ApiError("DB access error"));
    }
};

module.exports = updateContact;
