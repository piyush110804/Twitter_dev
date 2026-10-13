import express from 'express';
const router=express.Router();
import { create,getTweet } from '../../controllers/tweet-controller.js';

import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
router.post('/create',create);

router.post('/likes/toggle',toggleLike);
router.get('/tweets/:id',getTweet)
router.post('/comments/create',createComment);
export default router;