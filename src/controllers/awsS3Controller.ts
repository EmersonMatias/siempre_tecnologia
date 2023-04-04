
import { Response } from "express"
import { AuthToken } from "../middlewares/authTokenMiddleware.js"
import { awsS3Service } from "../services/awsS3Service.js"

export async function uploadImage(req: AuthToken, res: Response) {
    const dataToken = req.datatoken
    const file = req.file
    const screen_id_string = req.params.id
    const screen_id = Number(screen_id_string)
  
    try {
    
         if (!file) throw { message: "No file content", status: 400 }
        console.log(dataToken)
        console.log(file)
        const sucess = await awsS3Service.uploadImage(file, dataToken.id, screen_id)
        console.log(sucess)
        res.send(sucess) 
      
     

    } catch (error) {
        res.status(error.status).send(error.message)
    }
}

export async function deleteImages(req: AuthToken, res: Response) {
    const fileId = req.params.id

    try {
        const sucess = await awsS3Service.deleteImage(Number(fileId))

        return res.send(`${sucess.original_name} excluido com sucesso`)

    } catch (error) {
        console.log(error)
    }

}

export async function getFiles(req: AuthToken, res: Response) {
    const dataToken = req.datatoken
    const screen_id_string = req.params.id
    const screen_id = Number(screen_id_string)
    console.log(screen_id)
    try {
        const sucess = await awsS3Service.getFiles(dataToken.id, screen_id)
        return res.send(sucess)
    } catch (error) {
        res.send(404)
    }
} 