const mongoose = require("mongoose");
const { contactsOps: ops } = require("../../services");
const { ApiError, constants: consts } = require("../../helpers");

const removeContact = async ({ params: { id } }, res, next) => {
    try {
        if (!mongoose.isValidObjectId(id))
            return next(new ApiError(consts.INVALID_ID_MSG, 400));

        const contact = await ops.removeContact(id);

        if (!contact) return next(new ApiError(consts.ID_NOT_EXIST_MSG, 404));

        res.json({
            result: contact,
        });
    } catch {
        next(new ApiError("DB access error"));
    }
};

module.exports = removeContact;
