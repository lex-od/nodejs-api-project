class ApiError extends Error {
    constructor(message = "", statusCode = 500) {
        super();

        this.name = "ApiError";
        this.message = message;
        this.statusCode = statusCode;
    }
}

module.exports = ApiError;
