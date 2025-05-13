import express from "express";
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import goalRoute from "./routes/goalRoutes.js"
import userRoute from "./routes/userRoutes.js"
import {errorHandler} from "./middleware/errorMiddleware.js"
import cors from 'cors'

dotenv.config();


connectDB();

const port = process.env.PORT || 5001
const app = express();
app.use(cors({
  origin: 'http://localhost:5173', // allow your frontend's port
  methods: 'GET,POST,PUT,DELETE',
  allowedHeaders: 'Content-Type,Authorization'  // Allow specific headers
}));


app.use(express.json());
app.use(express.urlencoded({extended: false}))


app.use('/api/goals', goalRoute)
app.use('/api/user', userRoute)


app.use(errorHandler  )
app.listen(port, () => {
  console.log(`port is connected to ${port}`);
  
})

