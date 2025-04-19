import express, { Response } from 'express';
import { Alumuni, Student } from '../schema';
import { jwt_secret } from '../config';
import authMiddleware from '../middlewares/auth'
const jwt = require("jsonwebtoken");
const router = express.Router();
router.use(express.json());

router.put('/follow', authMiddleware, async (req: Request, res: any) => {
    
})