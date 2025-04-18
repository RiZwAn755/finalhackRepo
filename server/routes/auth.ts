import express from 'express';
import { handleUserSignup, handleUserSignin } from '../controllers/auth'

const router = express.Router();

router.post('/signup', async(req , res) => {

});

router.post('/signin', async(req, res) => {

});

export default router;

