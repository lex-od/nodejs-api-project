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

        if (!user?.comparePassword(password) || !user.verified)
            return next(new ApiError(LOGIN_FAILED, 401));

        const token = jwt.sign({ _id: user._id }, TOKEN_KEY);

        const {
            _doc: { verificationToken, password: _, ...result },
        } = await srv.updateFieldById(user._id, { token });

        res.json({ result });
    } catch ({ name, message }) {
        if (REQUEST_ERRORS.includes(name))
            return next(new ApiError(message, 400));

        next(new ApiError(message));
    }
};

module.exports = login;
