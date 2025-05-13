import expressAsyncHandler from "express-async-handler";
import Goal from "../models/goal.model.js";
import User from "../models/user.model.js";

// @desc    Get goals
// @route   GET /api/goals
// @access  Private    

export const getGoals = expressAsyncHandler(async (req, res) => {

  const goals = await Goal.find({user: req.user.id})
  res.status(200).json(goals)
})

// @desc    Set goals
// @route   POST /api/goals
// @access  Private    

export const setGoals = expressAsyncHandler(async (req, res) => {
  const { text } = req.body;
  if (!req.body || !req.body.text) {
    res.status(400);
    throw new Error('Please add a text!')
    
  }

  const goal = await Goal.create({
    text: req.body.text,
    user: req.user.id
  })


  console.log(text);
  res.status(200).json(goal);
});


// @desc    UPDATE goals
// @route   PUT /api/goals/:id
// @access  Private    

export const updateGoals = expressAsyncHandler(async (req, res) => {
  const goal = await Goal.findById(req.params.id);

  if(!goal) {
    res.status(400);
    throw new Error('Goal not found');
  }


  const user = await User.findById(req.user.id)

  if(!user) {
    res.status(401);
    throw new Error('User not found!')
  }

  if(goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized');

  }

  const updatedGoal = await Goal.findByIdAndUpdate(req.params.id,req.body, {
    new: true
  })
  res.status(200).json(updatedGoal)
})


// @desc    UPDATE goals
// @route   DELETE /api/goals/:id
// @access  Private 
export const deleteGoals = expressAsyncHandler(async (req, res) => {

  const goal = await Goal.findById(req.params.id);
  if(!goal) {
    res.status(400);
    throw new Error("Goal not found!")
  }

  const user = await User.findById(req.user.id)

  if(!user) {
    res.status(401);
    throw new Error('User not found!')
  }

  if(goal.user.toString() !== user.id) {
    res.status(401)
    throw new Error('User not authorized');
    
  }

  await goal.deleteOne();

  res.status(200).json({id: req.params.id})
})






