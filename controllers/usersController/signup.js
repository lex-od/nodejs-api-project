const jwt = require("jsonwebtoken");
require("dotenv").config();
const { usersService: srv } = require("../../services");
const { ApiError, apiConsts } = require("../../helpers");

const { EMAIL_IN_USE, REQUEST_ERRORS } = apiConsts;

const signup = async (
    { body: { email, password, subscription } },
    res,
    next
) => {
    try {
        const user = await srv.getUser({ email });

        if (user) return next(new ApiError(EMAIL_IN_USE, 409));

        const { _id } = await srv.addUser({ email, password, subscription });

        const { TOKEN_KEY } = process.env;
        const payload = { _id };
        const token = jwt.sign(payload, TOKEN_KEY);

        res.status(201).json({ result: { token } });
    } catch ({ name, message }) {
        if (REQUEST_ERRORS.includes(name))
            return next(new ApiError(message, 400));

        next(new ApiError("DB access error"));
    }
};

module.exports = signup;
