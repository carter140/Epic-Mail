import express from 'express';
import newMessage from '../controllers/messages';
import getOneMessage from '../controllers/getOneMessage';
import getAll from '../controllers/getAll';

const router=express.Router();

router.post('/', newMessage);

router.get('/:id',getOneMessage);

router.get('/',getAll);

export default router;