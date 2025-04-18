"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = exports.Student = exports.Alumuni = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const StudentSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true, max: 50 },
    username: { type: String, requried: true, unique: true, max: 50 },
    firstname: { type: String, requried: true, max: 50 },
    middlename: { type: String, max: 50 },
    lastname: { type: String, max: 50 },
    password: { type: String, requried: true, max: 50 },
    studentId: { type: String, requried: true, unique: true, max: 50 },
    institute: { type: String, requried: true, max: 50 },
    course: { type: String, requried: true, max: 50 },
    yop: { type: Number, required: true },
    conn: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Alumuni' }],
    posts: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Post' }],
    pic_url: { type: String }
});
const AlumuniSchema = new mongoose_1.Schema({
    email: { type: String, required: true, unique: true, max: 50 },
    username: { type: String, requried: true, unique: true, max: 50 },
    firstname: { type: String, requried: true, max: 50 },
    middlename: { type: String, max: 50 },
    lastname: { type: String, max: 50 },
    password: { type: String, requried: true, max: 50 },
    company: { type: String, requried: true, max: 50 },
    title: { type: String, required: true, max: 50 },
    yop: { type: Number, required: true },
    studentId: { type: String, required: true, max: 50 },
    conn: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Student' }],
    posts: [{ type: mongoose_1.default.Schema.Types.ObjectId, ref: 'Post' }],
    profile_url: { type: String },
});
const PostSchema = new mongoose_1.Schema({
    content: { type: String },
    likes: { type: String },
    user: {
        type: mongoose_1.default.Schema.Types.ObjectId,
        refs: 'Alumuni'
    },
    pic_url: { type: String }
});
exports.Alumuni = mongoose_1.default.model("Alumuni", AlumuniSchema);
exports.Student = mongoose_1.default.model("Student", StudentSchema);
exports.Post = mongoose_1.default.model("Post", PostSchema);
