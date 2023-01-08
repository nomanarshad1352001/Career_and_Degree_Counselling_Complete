import express from 'express';

import { signin, signup, getUser} from '../controller/user.js';

const router = express.Router();

router.get('/', getUser);
router.post('/signin', signin);
router.post('/signup', signup);

export default router;