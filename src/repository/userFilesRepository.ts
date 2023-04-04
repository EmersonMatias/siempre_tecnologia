import { database } from "../../prisma/index.js";


export async function uploadImageDB(original_name: string, file_name: string, size: number, url: string, user_id: number, screen_id) {
    return await database.user_files.create({
        data: {
            original_name,
            file_name,
            size,
            url,
            user_id,
            screen_id
        }
    })
}

export async function findFileById(fileId: number) {
    return await database.user_files.findUnique({
        where: {
            id: fileId
        }
    })
}


export async function deleteFileById(fileId: number){
    return await database.user_files.delete({
        where:{
            id: fileId
        }
    })
}

export async function getUserFiles(user_id: number, screen_id: number){
    console.log(screen_id)
    return await database.user_files.findMany({
        where: {
            user_id,
            screen_id
        }
    })
}

export async function deleteAllScreenFiles(screen_id: number){
    return await database.user_files.deleteMany({
        where:{
            screen_id
        }
    })
}