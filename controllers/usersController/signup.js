const shortid = require("shortid");
const { usersService: srv } = require("../../services");
const {
    ApiError,
    apiConsts,
    emailOperations: emailOps,
} = require("../../helpers");

const { EMAIL_IN_USE, INV_PASSWORD, REQUEST_ERRORS } = apiConsts;

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

        const verificationToken = shortid();

        await emailOps.sendMail(email, verificationToken);

        const {
            _doc: { token, password: _, verificationToken: __, ...result },
        } = await srv.addUser({
            email,
            password,
            subscription,
            verificationToken,
        });

        res.status(201).json({ result });
    } catch ({ name, message }) {
        if (REQUEST_ERRORS.includes(name))
            return next(new ApiError(message, 400));

        next(new ApiError(message));
    }
};

module.exports = signup;
