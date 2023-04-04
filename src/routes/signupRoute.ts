import { Router } from "express";
import { database } from "../../prisma/index.js";
import { registerUser } from "../controllers/signupController.js";
import { validateSignupData } from "../middlewares/signupMiddlewares.js";

const route = Router()

route.post("/cadastrar", validateSignupData, registerUser)

export default route