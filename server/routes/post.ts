import express from 'express';
// import { handleUserSignup, handleUserSignin } from '../controllers/auth'
import { Alumuni, Student ,Post} from '../schema';
import { jwt_secret } from '../config';
import authMiddleware from '../middlewares/auth'
const jwt = require("jsonwebtoken");
const router = express.Router();
router.use(express.json())


router.post("/posts",authMiddleware,async(req,res)=>{
     
}
)

export default router;


