import express from "express"
import userAuth from "../middlewares/authMiddleware.js"
import { createJobController } from "../controllers/jobsController.js"

const router = express.Router()

//routes

//CREATE JOB || POST
router.post("/create-job", userAuth, createJobController)


export default router