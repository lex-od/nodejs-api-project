const { Schema } = require("mongoose");
const bcrypt = require("bcryptjs");
const gravatar = require("gravatar");
const { joiExtra } = require("../../validations");
const { validationConsts } = require("../../helpers");

const {
    REQ_PASSWORD,
    REQ_EMAIL,
    INV_EMAIL,
    SUBSCR_STARTER,
    SUBSCR_PRO,
    SUBSCR_BUSINESS,
} = validationConsts;

const userSchema = Schema({
    password: {
        type: String,
        required: [true, REQ_PASSWORD],
    },

    email: {
        type: String,
        required: [true, REQ_EMAIL],
        unique: true,
        cast: false,
        trim: true,
        lowercase: true,
        validate: [joiExtra.isEmail, INV_EMAIL],
    },

    subscription: {
        type: String,
        enum: [SUBSCR_STARTER, SUBSCR_PRO, SUBSCR_BUSINESS],
        default: SUBSCR_STARTER,
        cast: false,
        trim: true,
        lowercase: true,
    },

    token: {
        type: String,
        default: null,
    },

    avatarUrl: {
        type: String,
        default() {
            return gravatar.url(this.email, { s: "250" }, true);
        },
    },

    verified: {
        type: Boolean,
        default: false,
    },

    verificationToken: {
        type: String,
        required: true,
    },
});

userSchema.methods.setPassword = function (password) {
    this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(6));
};

userSchema.methods.comparePassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};

module.exports = userSchema;
