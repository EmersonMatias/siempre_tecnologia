import { Response } from "express";
import { AuthToken } from "../middlewares/authTokenMiddleware.js";
import { Screen } from "../repository/screensRepository.js";
import { screenService } from "../services/screensService.js";

export  async function CreateScreen(req: AuthToken, res: Response){
    const dataToken = req.datatoken
    const screen_name = req.body.screen_name as string
    const screen_type = req.body.screen_type as string
    console.log(screen_name, dataToken.id, screen_type)

    try{
        const sucess = await screenService.CreateScreen(screen_name, dataToken.id, screen_type)
        console.log(sucess)
        res.send(sucess)
    }catch(error){
        console.log(error)
        res.sendStatus(400)
    }
}

export async function GetScreens(req: AuthToken, res: Response){
    const dataToken = req.datatoken

    try{
        const sucess = await screenService.GetScreens(dataToken.id)
        res.send(sucess)
    }catch(error){
        console.log(error)
        res.send(404)
    }
}

export async function GetScreen(req: AuthToken, res: Response){
    const screenId = req.params.id
    const numberScreenId = Number(screenId)

    try{
        const sucess = await screenService.GetScreen(numberScreenId)
        console.log(sucess)
        res.send(sucess)
    }catch(error){
        res.sendStatus(404)
    }
}

export async function UpdateScreen(req:AuthToken, res: Response){
    const screenId = req.params.id
    const numberScreenId = Number(screenId)
    const content = req.body.screen as Screen

    console.log(screenId, content)

    try{
        const sucess = await screenService.UpdateScreen(numberScreenId, content )
        res.send(sucess)
    }catch(error){
        res.sendStatus(404)
    } 

}

export async function DeleteScreen(req: AuthToken, res: Response){
    const screenId = req.params.id
    const numberScreenId = Number(screenId) 

    try{
        const sucess =  await screenService.DeleteScreen(numberScreenId)
        console.log(sucess)
        res.send(sucess)
    }catch(error){
        console.log(error)
        res.sendStatus(404)
    }
}    