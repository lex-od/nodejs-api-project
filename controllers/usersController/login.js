const jwt = require("jsonwebtoken");
require("dotenv").config();
const { usersService: srv } = require("../../services");
const { ApiError, apiConsts } = require("../../helpers");

const { TOKEN_KEY } = process.env;
const { INV_PASSWORD_TYPE, LOGIN_FAILED, REQUEST_ERRORS } = apiConsts;

const login = async ({ body: { email, password } }, res, next) => {
    try {
        if (typeof password !== "string")
            return next(new ApiError(INV_PASSWORD_TYPE, 400));

        const user = await srv.getUser({ email });

        if (!user || !user.comparePassword(password))
            return next(new ApiError(LOGIN_FAILED, 401));

        const token = jwt.sign({ _id: user._id }, TOKEN_KEY);

        const updUser = await srv.updateUserById(user._id, { token });

        res.json({
            result: {
                email: updUser.email,
                subscription: updUser.subscription,
                token: updUser.token,
            },
        });
    } catch ({ name, message }) {
        if (REQUEST_ERRORS.includes(name))
            return next(new ApiError(message, 400));

        next(new ApiError("DB access error"));
    }
};

module.exports = login;
