import { Router } from "express";
import { registerUser } from "../controllers/signupController.js";
import { validateSignupData } from "../middlewares/signupMiddlewares.js";
var route = Router();
route.post("/cadastrar", validateSignupData, registerUser);
export default route;
