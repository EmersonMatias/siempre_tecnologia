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

route.get("/users", async(req,res) => {
    const a = await database.user.findMany()

    res.send(a)

})



export default route