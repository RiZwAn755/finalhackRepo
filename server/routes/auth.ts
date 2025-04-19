import express from 'express';
import { handleUserSignup, handleUserSignin } from '../controllers/auth'
import { Alumuni, Student } from '../schema';
import { jwt_secret } from '../config';
const jwt = require("jsonwebtoken");
const router = express.Router();
router.use(express.json())

router.post('/student/signup', async (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    console.log(email);
    const findUser = await Student.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    })
    const findUser1 = await Alumuni.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    })
    if (findUser || findUser1) {
        res.status(502).json({
            msg: "Username / email in use"
        })
        return;
    }

    const student = await Student.insertOne({
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
        })
    }
    const token = jwt.sign({ email }, jwt_secret);
    res.status(200).json({
        token,
        role:"student",
        email,
    }
    )

});
router.post('/alumuni/signup', async (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const findUser1 = await Alumuni.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    })
    const findUser2 = await Student.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    })
    if (findUser1 || findUser2) {
        res.status(502).json({
            msg: "Username / email in use"
        })
        return;
    }
    const alumuni = await Alumuni.insertOne({
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
        })
    }
    const token = jwt.sign({ email }, jwt_secret);
    res.status(200).json({
        token,
        role:"alumuni",
        email,
    });
});

router.post('/student/signin', async (req, res) => {
   const email = req.body.email;
   const password = req.body.password;
   
   const user = await Student.findOne({
        $and :[{
            email,
            password,
        }]
   });
    if(!user){
        res.status(403).json({
           msg : "user not found",
        })
        return;
    }
    const token = jwt.sign({ email }, jwt_secret);
    res.status(200).json({
        token,
        role:"student",
        email,
    });
});

router.post('/alumuni/signin', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    
    const user = await Alumuni.findOne({
         $and :[{
             email,
             password,
         }]
    });
     if(!user){
         res.status(403).json({
            msg : "user not found",
         })
         return;
     }
     const token = jwt.sign({ email }, jwt_secret);
     res.status(200).json({
         token,
         role: "alumuni",
         email,
     });
 });

export default router;

