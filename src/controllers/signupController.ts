import { Request, Response } from "express";
import { SignUp } from "../middlewares/signupMiddlewares.js";
import { signupServices } from "../services/signupServices.js";

export async function  registerUser(req:Request, res: Response){
    const signupData = req.body as SignUp
   

    try{
        const sucess = await signupServices.registerUser(signupData)
        console.log(sucess)
        return res.status(201).send(`Conta de ${sucess.name} criada com sucesso!`)
    }catch(error){
        res.status(400).send(error)
    }
   
} 