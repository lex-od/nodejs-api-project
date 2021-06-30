const { usersService: srv } = require("../../services");
const { ApiError, apiConsts, emailOperations } = require("../../helpers");

const { EMAIL_IN_USE, INV_PASSWORD, REQUEST_ERRORS, DB_ACCESS_ERROR } =
    apiConsts;

const signup = async (
    { body: { email, password, subscription } },
    res,
    next
) => {
    try {
        const user = await srv.getUser({ email });

        if (user) return next(new ApiError(EMAIL_IN_USE, 409));

        if (typeof password !== "string" || password.length < 4)
            return next(new ApiError(INV_PASSWORD, 400));

        const {
            _doc: { password: _, ...result },
        } = await srv.addUserWithToken({
            email,
            password,
            subscription,
        });

        res.status(201).json({ result });
    } catch ({ name, message }) {
        if (REQUEST_ERRORS.includes(name))
            return next(new ApiError(message, 400));

        next(new ApiError(DB_ACCESS_ERROR));
    }
};

module.exports = signup;
