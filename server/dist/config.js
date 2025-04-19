"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwt_secret = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const { jwt } = require("jsonwebtoken");
mongoose_1.default.connect("mongodb+srv://admin:lucifer12@cluster0.7ao0pks.mongodb.net/mydata");
exports.jwt_secret = "mypassword";
