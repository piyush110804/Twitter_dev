import express from 'express';
const router=express.Router();
import { create,getTweet } from '../../controllers/tweet-controller.js';
import { signup } from '../../controllers/auth-controller.js';
import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
router.post('/create',create);

router.post('/likes/toggle',toggleLike);
router.get('/tweets/:id',getTweet)
router.post('/comments/create',createComment);
router.post('/users/signup',signup);
export default router;