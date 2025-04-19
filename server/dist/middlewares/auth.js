"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("../config");
const jwt = require("jsonwebtoken");
function adminmiddleware(req, res, next) {
    const token = req.headers.authorization;
    const jwttoken = token.split(" ")[1];
    const decodeval = jwt.verify(jwttoken, config_1.jwt_secret);
    if (decodeval.email) {
        next();
    }
    else {
        res.status(403).json({
            msg: "you are not authenticated"
        });
    }
}
exports.default = adminmiddleware;
