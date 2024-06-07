import express from "express"
import { loginController, registerController } from "../controllers/authController.js";

//routers
const router = express.Router();
// REGISTER || POST
router.post("/register", registerController )

// LOGIN || POST
router.post("/login", loginController )


export default router
