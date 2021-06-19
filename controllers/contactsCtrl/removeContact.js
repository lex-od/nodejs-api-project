const mongoose = require("mongoose");
const { contactsOps: ops } = require("../../services");
const { ApiError, apiConsts } = require("../../helpers");

const { INVALID_ID_MSG, ID_NOT_EXIST_MSG, DB_ACCESS_ERROR } = apiConsts;

const removeContact = async ({ params: { id } }, res, next) => {
    try {
        if (!mongoose.isValidObjectId(id))
            return next(new ApiError(INVALID_ID_MSG, 400));

        const result = await ops.removeContact(id);

        if (!result) return next(new ApiError(ID_NOT_EXIST_MSG, 404));

        res.json({ result });
    } catch {
        next(new ApiError(DB_ACCESS_ERROR));
    }
};

module.exports = removeContact;
