
import { Response } from "express"
import { AuthToken } from "../middlewares/authTokenMiddleware.js"
import { awsS3Service } from "../services/awsS3Service.js"

export async function uploadImage(req: AuthToken, res: Response) {
    const dataToken = req.datatoken
    const file = req.file

    try {
        if (!file) throw { message: "No file content", status: 400 }
        console.log(dataToken)
        console.log(file)

        const sucess = await awsS3Service.uploadImage(file, dataToken.id)

        res.send(sucess)

    } catch (error) {
        res.status(error.status).send(error.message)
    }
}   