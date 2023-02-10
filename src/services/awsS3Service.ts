import { deleteFileById, findFileById, uploadImageDB } from "../repository/userFilesRepository.js"
import aws from "aws-sdk"

export async function uploadImage( file: Express.Multer.File, userId: number){
    const {originalname, filename, size, path: url} = file

    return await uploadImageDB(originalname, filename, size, url,userId)
}

export async function deleteImage(id: number){
    const S3 = new aws.S3()

    const fileExist = await findFileById(id)

    if(!fileExist) throw {message: "File doesn't exist", status: 404}

    const deletefile = await S3.deleteObject({
        Bucket: "siempre-tecnologia-test-bucket",
        Key: `${fileExist.file_name}`
    }).promise()

    return await deleteFileById(id)
}

export const awsS3Service = {
    uploadImage,
    deleteImage
}