// 📌 CONTACTS

const INVALID_ID_MSG = "Invalid ID format";
const ID_NOT_EXIST_MSG = "Requested contact does not exist";

const REQ_FAVORITE_MSG = "Field favorite is required";

// 📌 USERS

const EMAIL_IN_USE = "Email already in use";

const INV_PASSWORD = "Password must be a string, min 4 chars";
const INV_PASSWORD_TYPE = "Password must be a string";

const USER_NOT_FOUND = "User not found";
const USER_VRF_SUCCESS = "Verification successful";

const LOGIN_FAILED = "Email or password is wrong";

// 📌 GUARD

const NOT_AUTHORIZED = "Not authorized";

// 📌 MULTER

const MULTER_FS_LIMIT = "LIMIT_FILE_SIZE";

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
    USER_NOT_FOUND,
    USER_VRF_SUCCESS,
    LOGIN_FAILED,

    NOT_AUTHORIZED,

    MULTER_FS_LIMIT,

    REQUEST_ERRORS,
    DB_ACCESS_ERROR,
};
