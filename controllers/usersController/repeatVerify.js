const { usersService: srv } = require("../../services");
const {
    apiConsts,
    ApiError,
    emailOperations: emailOps,
} = require("../../helpers");

const {
    REQ_EMAIL,
    USER_NOT_FOUND,
    USER_VRF_PASSED,
    USER_VRF_SENT,
    REQUEST_ERRORS,
} = apiConsts;

const repeatVerify = async ({ body: { email } }, res, next) => {
    try {
        if (!email) return next(new ApiError(REQ_EMAIL, 400));

        const user = await srv.getUser({ email });

        if (!user) return next(new ApiError(USER_NOT_FOUND, 400));

        if (user.verified) return next(new ApiError(USER_VRF_PASSED, 400));

        await emailOps.sendMail(user.email, user.verificationToken);

        res.json({ message: USER_VRF_SENT });
    } catch ({ name, message }) {
        if (REQUEST_ERRORS.includes(name))
            return next(new ApiError(message, 400));

        next(new ApiError(message));
    }
};

module.exports = repeatVerify;
