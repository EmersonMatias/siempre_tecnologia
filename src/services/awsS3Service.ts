import { deleteFileById, findFileById, getUserFiles, uploadImageDB } from "../repository/userFilesRepository.js"
import aws from "aws-sdk"

export async function uploadImage( file: Express.Multer.File, userId: number, screen_id: number){
    const {originalname, filename, size, path: url} = file

    return await uploadImageDB(originalname, filename, size, url,userId, screen_id)
}

export async function deleteImage(id: number){
    const S3 = new aws.S3()

    const fileExist = await findFileById(id)

    if(!fileExist) throw {message: "File doesn't exist", status: 404}

    const deletefile = await S3.deleteObject({
        Bucket: "siempretecnologia",
        Key: `${fileExist.file_name}`
    }).promise()

    return await deleteFileById(id)
}

export async function getFiles(id: number, screen_id: number){
    if(!id) throw {message: "user is doesn´t exist", status: 404}

    return await getUserFiles(id, screen_id)
}

export const awsS3Service = {
    uploadImage,
    deleteImage,
    getFiles
}