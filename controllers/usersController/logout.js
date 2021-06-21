const { usersService: srv } = require("../../services");
const { ApiError, apiConsts } = require("../../helpers");

const { DB_ACCESS_ERROR } = apiConsts;

const logout = async ({ user: { _id } }, res, next) => {
    try {
        await srv.updateFieldById(_id, { token: null });

        res.status(204).send();
    } catch {
        next(new ApiError(DB_ACCESS_ERROR));
    }
};

module.exports = logout;
