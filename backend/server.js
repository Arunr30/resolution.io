import express from "express";
import dotenv from "dotenv"
import goalRoute from "./routes/goalRoutes.js"
import {errorHandler} from "./middleware/errorMiddleware.js"
dotenv.config();




const port = process.env.PORT || 5001
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use('/api/goals', goalRoute)
app.use(errorHandler  )
app.listen(port, () => {
  console.log(`port is connected to ${port}`);
  
})

