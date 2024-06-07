// package imports
import express from "express"
import dotenv from "dotenv"
import cors from "cors"
// files
import connectDB from "./config/database.js"
//routes
import errorMiddleware from "./middlewares/errorMiddleware.js"
import testRoutes from "./routes/testRoutes.js"
import authRoutes from "./routes/authRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import jobsRoutes from "./routes/jobsRoutes.js"

// DOT ENV configW
dotenv.config()

// MongoDB Connection
connectDB()


// rest object
const app = express()

// middlewares
app.use(express.json())
app.use(cors())

// routes
app.use("/api/v1/test", testRoutes)
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/user", userRoutes)
app.use("/api/v1/jobs", jobsRoutes)


// validation middleware
app.use(errorMiddleware)

// PORT
const PORT = process.env.PORT

// listen
app.listen(PORT, () => {
    console.log(`>> Node Server Started with ${process.env.DEV_MODE} on port ${PORT} <<`)
})
