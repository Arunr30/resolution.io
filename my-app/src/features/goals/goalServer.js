import axios from 'axios'

const API_URL = 'http://localhost:5001/api/goals/';

// Create new goal
const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.post(API_URL, goalData, config)

  return response.data
}

// Get user goals
const GET_GOALS = 'http://localhost:5001/api/user/me'; // ⚠️ This returns user, not goals

const getGoals = async(token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(GET_GOALS, config);

  return response.data.goals; // Make sure `goals` is inside this response
};


// Delete user goal
const deleteGoal = async (goalId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.delete(API_URL + goalId, config)

  return response.data
}

const goalService = {
  createGoal,
  getGoals,
  deleteGoal

}

export default goalService