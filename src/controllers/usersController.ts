import { Response } from "express";
import { AuthToken } from "../middlewares/authTokenMiddleware.js";
import { usersService } from "../services/usersService.js";


export async function getUsers(req: AuthToken, res: Response){
    const dataToken = req.datatoken

    try{
        const sucess = await usersService.getUsers(dataToken)

        res.send(sucess)
    }catch(error){
        if(error.message) return res.status(error.status).send(error.message)
        return res.send(error)
    }
}