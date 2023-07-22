"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorized = exports.requireAuth = void 0;
const not_authorized_error_1 = require("../errors/not-authorized-error");
const current_user_1 = require("./current-user");
const requireAuth = (req, res, next) => {
    if (!req.currentUser) {
        throw new not_authorized_error_1.NotAuthroziedError();
    }
    next();
};
exports.requireAuth = requireAuth;
exports.authorized = [current_user_1.currentUser, exports.requireAuth];
