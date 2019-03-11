import express from 'express';
import newMessage from '../controllers/messages';
import getOneMessage from '../controllers/getOneMessage';
const router=express.Router();

router.post('/', newMessage);

router.get('/:id',getOneMessage)

export default router;