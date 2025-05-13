import express from "express";
import {getGoals, setGoals, updateGoals, deleteGoals} from "../controllers/goalController.js"
const router = express.Router();

import { protect } from "../middleware/authMiddleware.js";


// clean way

router.route('/').get(protect, getGoals).post(protect, setGoals)
router.route('/:id').put(protect, updateGoals).delete(protect,deleteGoals)

// router.get('/', getGoals)

// router.post('/', setGoals)

// router.put('/:id', updateGoals)

// router.delete('/:id',deleteGoals)

export default router;