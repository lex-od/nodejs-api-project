const { ApiError } = require("../../helpers");

const verify = async ({ params: { verificationToken } }, res, next) => {
    try {
        // res.json({ result: verificationToken });
    } catch ({ message }) {
        next(new ApiError(message));
    }
};

module.exports = verify;
