// 📌 CONTACTS

const INVALID_ID_MSG = "Invalid ID format";
const ID_NOT_EXIST_MSG = "Contact with requested ID does not exist";

const REQ_FAVORITE_MSG = "Field favorite is required";

// 📌 USERS

const EMAIL_IN_USE = "Email already in use";

const INV_PASSWORD = "Password must be a string, min 4 chars";
const INV_PASSWORD_TYPE = "Password must be a string";

const LOGIN_FAILED = "Email or password is wrong";

// 📌 GUARD

const NOT_AUTHORIZED = "Not authorized";

// 📌 COMMON

const REQUEST_ERRORS = ["ValidationError", "CastError"];

const DB_ACCESS_ERROR = "DB access error";

module.exports = {
    INVALID_ID_MSG,
    ID_NOT_EXIST_MSG,
    REQ_FAVORITE_MSG,

    EMAIL_IN_USE,
    INV_PASSWORD,
    INV_PASSWORD_TYPE,
    LOGIN_FAILED,

    NOT_AUTHORIZED,

    REQUEST_ERRORS,
    DB_ACCESS_ERROR,
};
