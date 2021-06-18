const mongoose = require("mongoose");
const { contactsOps: ops } = require("../../services");
const { ApiError, apiConsts: consts } = require("../../helpers");

const getContact = async ({ params: { id } }, res, next) => {
    try {
        if (!mongoose.isValidObjectId(id))
            return next(new ApiError(consts.INVALID_ID_MSG, 400));

        const result = await ops.getContact(id);

        if (!result) return next(new ApiError(consts.ID_NOT_EXIST_MSG, 404));

        res.json({ result });
    } catch {
        next(new ApiError("DB access error"));
    }
};

module.exports = getContact;
