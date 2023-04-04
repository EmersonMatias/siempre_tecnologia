import { Router } from "express";
import { deleteUser, getUsers, toggleStatusAccount, updateUserAdress, updateUserCity, updateUserName, updateUserPhone, updateUserPrice } from "../controllers/usersController.js";
import {validateUserToken} from "../middlewares/authTokenMiddleware.js"

const route = Router()


route.get("/users", validateUserToken, getUsers )

route.put("/updateuser", validateUserToken, toggleStatusAccount)

route.put("/updateusername", validateUserToken, updateUserName )

route.put("/updateuserphone", validateUserToken, updateUserPhone)

route.put("/updateusercity", validateUserToken, updateUserCity)

route.put("/updateuseradress", validateUserToken, updateUserAdress)

route.put("/updateuserprice", validateUserToken, updateUserPrice)

route.delete("/deleteuser/:id", validateUserToken, deleteUser)


export default route