const { usersService: srv } = require("../../services");
const { apiConsts, ApiError } = require("../../helpers");

const { USER_NOT_FOUND, USER_VRF_SUCCESS } = apiConsts;

const verify = async ({ params: { verificationToken } }, res, next) => {
    try {
        const user = await srv.updateFields(
            { verificationToken },
            { verificationToken: null, verified: true }
        );

        if (!user) return next(new ApiError(USER_NOT_FOUND, 404));

        res.json({ message: USER_VRF_SUCCESS });
    } catch ({ message }) {
        next(new ApiError(message));
    }
};

module.exports = verify;
