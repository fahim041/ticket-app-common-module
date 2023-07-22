"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotAuthroziedError = void 0;
const custom_error_1 = require("./custom-error");
class NotAuthroziedError extends custom_error_1.CustomError {
    constructor() {
        super("Not authorized");
        this.statusCode = 401;
    }
    serializeErrors() {
        return [
            {
                message: "Not authorized",
            },
        ];
    }
}
exports.NotAuthroziedError = NotAuthroziedError;
