import { NextFunction, Request, Response } from "express";
import { signinSchema } from "../models/usersSchema.js";

export type SignIn = {
    email: string,
    password: string
}

export function validateSigninData(req: Request, res: Response, next: NextFunction){
    const signinData = req.body as SignIn

    if(!Object.keys(signinData).length) return res.sendStatus(400)

    const { error } = signinSchema.validate(signinData, {abortEarly: false})

    if( error ) throw res.status(400).send(error.details)

    next()
}
