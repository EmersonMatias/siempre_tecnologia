import { Request, Response } from "express";
import { SignIn } from "../middlewares/signinMiddlewares.js";
import { signinService } from "../services/signinService.js";

export async function connectUser(req: Request, res: Response){
    const signinData = req.body as SignIn
    
    try{
        const userData = await signinService.connectUser(signinData)
     
        return res.status(200).send(userData)
    } catch(error){
        console.log(error)
        if(error.message) return res.status(400).send(error.message)

        return res.sendStatus(400)
    }
}