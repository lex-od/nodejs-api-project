const passport = require("passport");
const { ExtractJwt, Strategy } = require("passport-jwt");
require("dotenv").config();
const { usersService: srv } = require("../services");
const { ApiError, apiConsts } = require("../helpers");

const { TOKEN_KEY } = process.env;
const { DB_ACCESS_ERROR } = apiConsts;

const settings = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: TOKEN_KEY,
};

passport.use(
    new Strategy(settings, async ({ _id }, done) => {
        try {
            const user = await srv.getUserById(_id);

            if (!user?.token) return done(null, false);

            done(null, user);
        } catch {
            done(new ApiError(DB_ACCESS_ERROR));
        }
    })
);
