import express from 'express';
const router=express.Router();

import TweetController from '../../controllers/tweet-controller.js';
import { toggleLike } from '../../controllers/like-controller.js';
router.post('/create',TweetController.create);

router.post('/likes/toggle',toggleLike);
export default router;