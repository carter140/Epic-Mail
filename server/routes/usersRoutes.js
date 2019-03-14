import express from 'express';
import signup from '../controllers/users';
import login from '../controllers/login';
const router=express.Router();

router.post('/signup',signup);

router.post('/login',login)

export default router;