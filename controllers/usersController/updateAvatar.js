const jimp = require("jimp");
const { usersService: srv } = require("../../services");
// const { ApiError, apiConsts } = require("../../helpers");

// const { DB_ACCESS_ERROR } = apiConsts;

const updateAvatar = async ({ user: { _id }, file }, res, next) => {
    try {
        res.json();
    } catch {
        // next(new ApiError(DB_ACCESS_ERROR));
    }
};

module.exports = updateAvatar;
