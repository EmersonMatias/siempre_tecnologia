import { Router } from "express";
import { connectUser } from "../controllers/signinController.js";
import { validateSigninData } from "../middlewares/signinMiddlewares.js";

const route = Router()

route.post("/signin", validateSigninData, connectUser)

export default route