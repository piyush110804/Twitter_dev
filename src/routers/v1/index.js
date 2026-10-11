import express from 'express';
const router=express.Router();

import TweetController from '../../controllers/tweet-controller.js';


router.post('/create',TweetController.create);

export default router;