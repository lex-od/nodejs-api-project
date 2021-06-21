const mongoose = require("mongoose");
const { contactsOps: ops } = require("../../services");
const { ApiError, apiConsts } = require("../../helpers");

const { INVALID_ID_MSG, ID_NOT_EXIST_MSG, REQUEST_ERRORS, DB_ACCESS_ERROR } =
    apiConsts;

const updateContact = async ({ params: { id }, user, body }, res, next) => {
    try {
        if (!mongoose.isValidObjectId(id))
            return next(new ApiError(INVALID_ID_MSG, 400));

        const result = await ops.updateContact(id, user._id, {
            ...body,
            owner: user._id,
        });

        if (!result) return next(new ApiError(ID_NOT_EXIST_MSG, 404));

        res.json({ result });
    } catch ({ name, message }) {
        if (REQUEST_ERRORS.includes(name))
            return next(new ApiError(message, 400));

        next(new ApiError(DB_ACCESS_ERROR));
    }
};

module.exports = updateContact;
