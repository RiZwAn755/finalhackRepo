"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const schema_1 = require("../schema");
const config_1 = require("../config");
const jwt = require("jsonwebtoken");
const router = express_1.default.Router();
router.use(express_1.default.json());
router.post('/student/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const username = req.body.username;
    console.log(email);
    const findUser = yield schema_1.Student.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    });
    if (findUser) {
        res.status(502).json({
            msg: "Username / email in use"
        });
        return;
    }
    const student = yield schema_1.Student.insertOne({
        email: req.body.email,
        username: req.body.username,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        password: req.body.password,
        studentId: req.body.studentId,
        institute: req.body.institute,
        course: req.body.course,
        yop: req.body.yop
    });
    if (!student) {
        res.status(502).json({
            msg: "Invalid input / unable to signin"
        });
    }
    const token = jwt.sign({ email }, config_1.jwt_secret);
    res.status(200).json({
        token,
        role: "student",
        email,
    });
}));
router.post('/alumuni/signup', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const username = req.body.username;
    const findUser = yield schema_1.Alumuni.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    });
    if (findUser) {
        res.status(502).json({
            msg: "Username / email in use"
        });
        return;
    }
    const alumuni = yield schema_1.Alumuni.insertOne({
        email: req.body.email,
        username: req.body.username,
        firstname: req.body.firstname,
        middlename: req.body.middlename,
        lastname: req.body.lastname,
        password: req.body.password,
        company: req.body.company,
        title: req.body.title,
        yop: req.body.yop,
        studentId: req.body.studentId,
    });
    if (!alumuni) {
        res.status(502).json({
            msg: "Invalid input / unable to signin"
        });
    }
    const token = jwt.sign({ email }, config_1.jwt_secret);
    res.status(200).json({
        token,
        role: "alumuni",
        email,
    });
}));
router.post('/student/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const password = req.body.password;
    const user = yield schema_1.Student.findOne({
        $and: [{
                email,
                password,
            }]
    });
    if (!user) {
        res.status(403).json({
            msg: "user not found",
        });
        return;
    }
    const token = jwt.sign({ email }, config_1.jwt_secret);
    res.status(200).json({
        token,
        role: "student",
        email,
    });
}));
router.post('/alumuni/signin', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const email = req.body.email;
    const password = req.body.password;
    const user = yield schema_1.Alumuni.findOne({
        $and: [{
                email,
                password,
            }]
    });
    if (!user) {
        res.status(403).json({
            msg: "user not found",
        });
        return;
    }
    const token = jwt.sign({ email }, config_1.jwt_secret);
    res.status(200).json({
        token,
        role: "alumuni",
        email,
    });
}));
exports.default = router;
