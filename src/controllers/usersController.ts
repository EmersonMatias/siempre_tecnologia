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

export async function toggleStatusAccount(req: AuthToken, res: Response){
        const dataUpdate: boolean = req.body.active
        const userId: number = req.body.userId
        const dataToken = req.datatoken

    try{
        const sucess = await usersService.toggleStatusAccount(dataUpdate, dataToken, userId)
        return res.send(sucess.active)
    }catch(error){
        if(error.message) return res.status(error.status).send(error.message)
        return res.send(error)
    }
}

export async function updateUserName(req: AuthToken, res: Response){
    const newName:string = req.body.name
    const userId: number = req.body.userId
    const dataToken = req.datatoken

    console.log(newName, userId)

    try{
        const sucess = await usersService.updateUserName(dataToken, userId, newName)
        res.send(sucess)
    }catch(error){
        console.log(error)
        res.sendStatus(400)
    }

}


export async function updateUserPhone(req: AuthToken, res: Response){
    const newPhone:string = req.body.phone
    const userId: number = req.body.userId
    const dataToken = req.datatoken
    console.log(newPhone, userId)

    try{
        const sucess = await usersService.updateUserPhone(dataToken, userId, newPhone)
        res.send(sucess)
    }catch(error){
        console.log(error)
        res.sendStatus(400)
    }

}


export async function updateUserCity(req: AuthToken, res: Response){
    const newCity:string = req.body.city
    const userId: number = req.body.userId
    const dataToken = req.datatoken
  
    try{
        const sucess = await usersService.updateUserCity(dataToken, userId, newCity)
        res.send(sucess)
    }catch(error){
        console.log(error)
        res.sendStatus(400)
    }

}

export async function updateUserAdress(req: AuthToken, res: Response){
    const newAdress:string = req.body.adress
    const userId: number = req.body.userId
    const dataToken = req.datatoken
  
    try{
        const sucess = await usersService.updateUserAdress(dataToken, userId, newAdress)
        res.send(sucess)
    }catch(error){
        console.log(error)
        res.sendStatus(400)
    }

}

export async function updateUserPrice(req: AuthToken, res: Response){
    const newPrice:number = req.body.price
    const userId: number = req.body.userId
    const dataToken = req.datatoken

    try{
        const sucess = await usersService.updateUserPrice(dataToken, userId, newPrice)
        res.send(sucess)
    }catch(error){
        console.log(error)
        res.sendStatus(400)
    }

}

export async function deleteUser(req:AuthToken, res: Response){
    const userId = req.params.id
    const dataToken = req.datatoken
    console.log(userId, dataToken)

    try{
        const sucess = await usersService.deleteUser(dataToken, Number(userId))

        res.send(sucess)
    }catch(error){
        console.log(error)
        res.send(400)
    }

}