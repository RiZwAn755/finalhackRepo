"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const auth_1 = __importDefault(require("./routes/auth"));
const cors = require("cors");
app.use('/auth', auth_1.default);
app.use(cors());
app.listen(8080, () => {
    console.log('Listening on port 8080....');
});
