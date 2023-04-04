import { conflictError } from "../errors/index.js"
import { createScreenLogo, deleteScreenLogo, findScreenLogo, findScreenLogoById } from "../repository/screenLogoRepository.js"
import aws from "aws-sdk"

async function RegisterScreenLogo(file: Express.Multer.File, screen_id: number){
    const {originalname, filename, size, path: url} = file

   const screenLogoExist = await findScreenLogo(screen_id)
   console.log(screenLogoExist)
   if(screenLogoExist) throw {message: "conflict error", status: 409}

    return await createScreenLogo( originalname,filename,size,url,screen_id)
}

async function GetScreenLogo(screen_id: number){

    if(!screen_id) throw {message: "not found error", status: 404}

    return await findScreenLogo(screen_id)
}

async function DeleteScreenLogo(logoId: number){
    const S3 = new aws.S3()

    const fileExist = await findScreenLogoById(logoId)
    console.log(fileExist)
    if(!fileExist) throw {message: "File doesn't exist", status: 404}

    const deletefile = await S3.deleteObject({
        Bucket: "siempretecnologia",
        Key: `${fileExist.file_name}`
    }).promise()

    return await deleteScreenLogo(logoId)
}



export const screenLogoService = {
    RegisterScreenLogo,
    GetScreenLogo,
    DeleteScreenLogo

}