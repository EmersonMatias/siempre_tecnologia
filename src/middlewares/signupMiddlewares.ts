import { NextFunction, Request, Response } from "express";
import { signupSchema } from "../models/usersSchema.js";

export type SignUp = {
    name: string,
    email: string,
    password: string
    phone: string,
    city: string,
    adress: string,
    price: number,
    account_type: "admin" | "user"
}

export function validateSignupData(req: Request,res: Response, next: NextFunction) {
    const signupData = req.body as SignUp
    console.log(signupData)

    if(!Object.keys(signupData).length) return res.sendStatus(400)

    const {error} = signupSchema.validate(signupData, {abortEarly: false})

    if(error) return res.status(400).send(error.details)

    next()
}   
  