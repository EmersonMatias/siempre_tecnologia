import { database } from "../../prisma/index.js";


export async function uploadImageDB(original_name: string, file_name: string, size: number, url: string, user_id: number) {
    return await database.user_files.create({
        data: {
            original_name,
            file_name,
            size,
            url,
            user_id
        }
    })
}