import { Role } from "@prisma/client";
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken"

export type DataToken = {
    id: number;
    name: string;
    active: boolean;
    account_type: Role;
}

type reqDataToken = {
    datatoken: DataToken
}

export type AuthToken = Request & reqDataToken

export function validateUserToken(req: AuthToken, res: Response, next: NextFunction) {
    const userToken = req.headers.authorization
    const token = userToken?.split(" ")

    if (!userToken) return res.sendStatus(401)
    if (token[0] !== "Bearer") return res.sendStatus(401)

    jwt.verify(token[1], process.env.ACESS_TOKEN_SECRET, (error, dataToken: DataToken) => {
        if (error) {
            return res.sendStatus(401)
        } 

        req.datatoken = dataToken
        next()
    })
}