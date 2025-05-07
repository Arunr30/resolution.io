import express from "express";
import {getGoals, setGoals, updateGoals, deleteGoals} from "../controllers/goalController.js"
const router = express.Router();


// clean way

router.route('/').get(getGoals).post(setGoals)
router.route('/:id').put(updateGoals).delete(deleteGoals)

// router.get('/', getGoals)

// router.post('/', setGoals)

// router.put('/:id', updateGoals)

// router.delete('/:id',deleteGoals)

export default router;