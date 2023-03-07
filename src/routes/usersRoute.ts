import { Router } from "express";
import { getUsers, toggleStatusAccount } from "../controllers/usersController.js";
import {validateUserToken} from "../middlewares/authTokenMiddleware.js"

const route = Router()


route.get("/users", validateUserToken, getUsers )

route.put("/updateuser", validateUserToken, toggleStatusAccount)



export default route