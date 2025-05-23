import jwt from "jsonwebtoken"
import asyncHandler from "express-async-handler"

import User from "../models/user.model.js"

export const protect = asyncHandler(async(req, res, next) => {
  let token;

  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      //  Get token from header
      token = req.headers.authorization.split(' ')[1]
      

      // Verify the token

      const decoded = jwt.verify(token, process.env.JWT_SECRET)

      // Get User from the token

      req.user = await User.findById(decoded.id).select('-password')
      next()
    } catch (error) {

      console.log(error);
      res.status(401)
      throw new Error('Not Authorized')
      
    }
  }

  if(!token) {
    res.status(401)
    throw new Error('Not Authorized, No token')
  } 

})