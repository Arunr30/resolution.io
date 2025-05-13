import mongoose from "mongoose";

const userSchema = mongoose.Schema({

  
  name: {
    type: String,
    required: [true, 'Please add an name']
  },
  email: {
    type: String,
    required: [true, 'Please add an email'],
    unique: true
  },
  password : {
    type: String,
    required: [true, 'Please add an Password']
  },
  
}, {
  timestamps: true
})

const User = mongoose.model('user', userSchema)
export default User