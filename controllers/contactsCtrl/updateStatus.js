const mongoose = require("mongoose");
const { contactsOps: ops } = require("../../services");
const { ApiError, apiConsts } = require("../../helpers");

const {
    INVALID_ID_MSG,
    REQ_FAVORITE_MSG,
    ID_NOT_EXIST_MSG,
    REQUEST_ERRORS,
    DB_ACCESS_ERROR,
} = apiConsts;

const updateStatus = async (
    { params: { id }, user, body: { favorite } },
    res,
    next
) => {
    try {
        if (!mongoose.isValidObjectId(id))
            return next(new ApiError(INVALID_ID_MSG, 400));

        if ([undefined, null].includes(favorite))
            return next(new ApiError(REQ_FAVORITE_MSG, 400));

        const result = await ops.updateFields(id, user._id, { favorite });

        if (!result) return next(new ApiError(ID_NOT_EXIST_MSG, 404));

        res.json({ result });
    } catch ({ name, message }) {
        if (REQUEST_ERRORS.includes(name))
            return next(new ApiError(message, 400));

        next(new ApiError(DB_ACCESS_ERROR));
    }
};

module.exports = updateStatus;
