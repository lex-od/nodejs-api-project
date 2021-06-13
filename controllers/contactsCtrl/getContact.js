const mongoose = require("mongoose");
const { contactsOps: ops } = require("../../services");
const { ApiError } = require("../../helpers");

const INVALID_ID_MSG = "Invalid ID format";
const ID_NOT_EXIST_MSG = "Contact with requested ID does not exist";

const getContact = async ({ params: { id } }, res, next) => {
    try {
        if (!mongoose.isValidObjectId(id))
            return next(new ApiError(INVALID_ID_MSG, 400));

        const contact = await ops.getContact(id);

        if (!contact) return next(new ApiError(ID_NOT_EXIST_MSG, 404));

        res.json({
            result: contact,
        });
    } catch {
        next(new ApiError("DB access error"));
    }
};

module.exports = getContact;
