const passport = require("passport");
const { ApiError } = require("../helpers");
require("../configs/passportConfig");
const { apiConsts } = require("../helpers");

const { NOT_AUTHORIZED } = apiConsts;

const guard = (req, res, next) => {
    passport.authenticate("jwt", { session: false }, (err, user) => {
        if (err) return next(err);

        if (!user) return next(new ApiError(NOT_AUTHORIZED, 401));

        req.user = user;

        next();
    })(req, res, next);
};

module.exports = guard;
