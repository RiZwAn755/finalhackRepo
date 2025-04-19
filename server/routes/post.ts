import express from 'express';
// import { handleUserSignup, handleUserSignin } from '../controllers/auth'
import { Alumuni, Student ,Post} from '../schema';
import { jwt_secret } from '../config';
const jwt = require("jsonwebtoken");
const router = express.Router();
router.use(express.json())

function adminmiddleware(req : any ,res:any,next:any){
    const token = req.headers.authorization;
    const jwttoken = token.split(" ")[1];
    const decodeval = jwt.verify(jwttoken,jwt_secret);
    if(decodeval.email){
        next();
    }else{
        res.status(403).json({
            msg : "you are not authenticated"
        })
    }

}
router.post("/posts",adminmiddleware,async(req,res)=>{
    
}
)

export default router;


