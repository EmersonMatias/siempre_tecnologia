import { database } from "../../prisma/index.js";

export async function createScreenLogo(original_name: string, file_name: string, size: number, url: string, screen_id: number){
    return await database.logo_screen.create({
        data: {
            original_name,
            file_name,
            size,
            url,
            screen_id
        }
    })

}

export async function findScreenLogo(screen_id: number){
    return await database.logo_screen.findUnique({
        where:{
            screen_id
        }
    })
}

export async function findScreenLogoById(logoId: number){
    return await database.logo_screen.findFirst({
        where: {
            id: logoId
        }
    })
}

export async function deleteScreenLogo(logoId: number){
    return await database.logo_screen.delete({
        where:{
            id: logoId
        }
    })
}