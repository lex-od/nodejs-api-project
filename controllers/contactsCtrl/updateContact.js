const mongoose = require("mongoose");
const { contactsOps: ops } = require("../../services");
const { ApiError, apiConsts: consts } = require("../../helpers");

const updateContact = async ({ params: { id }, body }, res, next) => {
    try {
        if (!mongoose.isValidObjectId(id))
            return next(new ApiError(consts.INVALID_ID_MSG, 400));

        const result = await ops.updateContact(id, body);

        if (!result) return next(new ApiError(consts.ID_NOT_EXIST_MSG, 404));

        res.json({ result });
    } catch ({ name, message }) {
        if (consts.REQUEST_ERRORS.includes(name))
            return next(new ApiError(message, 400));

        next(new ApiError("DB access error"));
    }
};

module.exports = updateContact;
