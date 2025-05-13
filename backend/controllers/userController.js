import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs"
import User from "../models/user.model.js"
import asyncHandler from "express-async-handler"

// @desc    Register New User
// @route   POST /api/user
// @access  Public

export const registerUser = asyncHandler(async(req, res) => {

  const {name, email, password} = req.body

  if(!name || !email || !password) {
    throw new Error("Please fill Auth fields");
  }

  // Check if user exist

  const userExists = await User.findOne({email});

  if(userExists) {
    res.status(400);
    throw new Error("User Already Exist")
  }

  // Hash Password

  const salt = await bcrypt.genSalt(10);

  const hashedPassword = await bcrypt.hash(password, salt);


  // Create user


  const user = await User.create({
    name,
    email,
    password: hashedPassword
  })

  if(user) {
    res.status(201).json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400);
    throw new Error("Invalid user data")
  }
})


// @desc    Authenticate A User
// @route   POST /api/user/login
// @access  Public

export const loginUser = asyncHandler(async (req, res) => {

  const{ email, password } = req.body

  if (!email || !password) {
    res.status(400);
    throw new Error("Please provide both email and password");
  }

  const user = await User.findOne({email});


  if(user && (await bcrypt.compare(password, user.password))) {
    res.json({
      _id: user.id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id)
    })
  } else {
    res.status(400);
    throw new Error("Invalid Credentails")
  }
})


// @desc    Get User Data
// @route   Get /api/user
// @access  Public

export const getMe = asyncHandler(async (req, res) => {


  const {_id, name, email} = await User.findById(req.user.id) 

  res.status(200).json({
    id: _id,
    name,
    email,
  })
})

const generateToken = (id) => {
  // generate token;
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d'
  })
}