import express from 'express';
import { getDegrees, createDegree, updateDegree, deleteDegree } from '../controller/degrees.js';

const router = express.Router();

router.get('/', getDegrees);
router.post('/', createDegree);
router.patch('/:id', updateDegree);
router.delete('/:id', deleteDegree);

export default router;