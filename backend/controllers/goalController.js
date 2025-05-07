import expressAsyncHandler from "express-async-handler";

// @desc    Get goals
// @route   GET /api/goals
// @access  Private    

export const getGoals = expressAsyncHandler(async (req, res) => {
  res.status(200).json({
    message: "Get Goals"
  })
})

// @desc    Set goals
// @route   POST /api/goals
// @access  Private    

export const setGoals = expressAsyncHandler(async (req, res) => {
  if (!req.body || !req.body.text) {
    res.status(400);
    throw new Error('Please add a text!')
    
  }

  const { text } = req.body;

  console.log(text);
  res.status(200).json({
    message: `Set goal: ${text}`
  });
});


// @desc    UPDATE goals
// @route   PUT /api/goals/:id
// @access  Private    

export const updateGoals = expressAsyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Update goal ${req.params.id}`
  })
})


// @desc    UPDATE goals
// @route   DELETE /api/goals/:id
// @access  Private 
export const deleteGoals = expressAsyncHandler(async (req, res) => {
  res.status(200).json({
    message: `Delete goal ${req.params.id}`
  })
})






