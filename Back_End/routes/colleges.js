import express from 'express';
import { getColleges, createCollege, updateCollege, deleteCollege } from '../controller/colleges.js';

const router = express.Router();

router.get('/', getColleges);
router.post('/', createCollege);
router.patch('/:id', updateCollege);
router.delete('/:id', deleteCollege);

export default router;