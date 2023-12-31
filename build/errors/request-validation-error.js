"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestValidationError = void 0;
const custom_error_1 = require("./custom-error");
class RequestValidationError extends custom_error_1.CustomError {
    constructor(errors) {
        super("Invalid Request");
        this.errors = errors;
        this.statusCode = 400;
    }
    serializeErrors() {
        return this.errors.map((err) => {
            return {
                message: err.msg,
                field: err.type === "field" ? err.path : err.type,
            };
        });
    }
}
exports.RequestValidationError = RequestValidationError;
