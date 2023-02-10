import { uploadImageDB } from "../repository/userFilesRepository.js"

export async function uploadImage( file: Express.Multer.File, id: number){
    const {originalname, filename, size, path: url} = file

    return await uploadImageDB(originalname, filename, size, url,id)
}


export const awsS3Service = {
    uploadImage
}