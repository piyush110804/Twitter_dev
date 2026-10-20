import express from 'express';
const router=express.Router();
import { create,getTweet } from '../../controllers/tweet-controller.js';
import { signup ,signin} from '../../controllers/auth-controller.js';
import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import { authenticate } from '../../middlewares/authenticate.js';

router.post('/create',authenticate,create);

router.post('/likes/toggle',toggleLike);
router.get('/tweets/:id',getTweet)
router.post('/comments/create',createComment);
router.post('/signup',signup);
router.post('/signin',signin);
export default router;