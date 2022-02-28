"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtConstants = void 0;
require("dotenv/config");
exports.jwtConstants = {
    secret: process.env.JWT_SECRET,
    expires: process.env.JWT_EXPIRES,
};
//# sourceMappingURL=constants.js.map