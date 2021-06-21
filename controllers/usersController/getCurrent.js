const { ApiError } = require("../../helpers");

const getCurrent = async ({ user: { _doc } }, res, next) => {
    try {
        const { password, token, ...result } = _doc;

        res.json({ result });
    } catch ({ message }) {
        next(new ApiError(message));
    }
};

module.exports = getCurrent;
