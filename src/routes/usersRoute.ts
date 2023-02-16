import { Router } from "express";
import { getUsers } from "../controllers/usersController.js";
import {validateUserToken} from "../middlewares/authTokenMiddleware.js"

const route = Router()


route.get("/users", validateUserToken, getUsers )

export default route