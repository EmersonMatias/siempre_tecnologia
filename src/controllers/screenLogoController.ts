import { Response } from "express";
import { AuthToken } from "../middlewares/authTokenMiddleware.js";
import { screenLogoService } from "../services/screenLogoService.js";

export async function RegisterScreenLogo(req: AuthToken, res: Response){
    const dataToken = req.datatoken
    const screen_id = Number(req.params.id)
    const file = req.file
    console.log(screen_id, "BBB")

    try{
        const sucess = await screenLogoService.RegisterScreenLogo(file, screen_id)
        res.send(sucess)

    }catch(error){
        if(error.status) return res.status(error.status).send(error.message)
        else res.sendStatus(400)
    }

}

export async function GetScreenLogo(req: AuthToken, res: Response){
    const dataToken = req.datatoken
    const screen_id = Number(req.params.idscreen)

    try{
        const sucess = await screenLogoService.GetScreenLogo(screen_id)
        res.send(sucess)

    }catch(error){
        if(error.status) return res.status(error.status).send(error.message)
        else res.sendStatus(400)
    }

}

export async function DeleteScreenLogo(req: AuthToken, res: Response) {
    const logoId = Number(req.params.id)
    console.log(logoId)

    try {
        const sucess = await screenLogoService.DeleteScreenLogo(logoId)

        return res.send(`${sucess.original_name} excluido com sucesso`)

    } catch (error) {
        console.log(error)
    }

}