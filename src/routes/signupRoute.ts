import { Router } from "express";
import { database } from "../../prisma/index.js";
import { registerUser } from "../controllers/signupController.js";
import { validateSignupData } from "../middlewares/signupMiddlewares.js";

const route = Router()

route.post("/cadastrar", validateSignupData, registerUser)
route.get("/resetdb", async (req,res)=> {
    const reset = await database.user.deleteMany()

    res.send(reset)

}) 



export default route