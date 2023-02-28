import { database } from "../../prisma/index.js";

export async function  CreateNewScreen(screen_name: string, user_id: number, background_url: string){
    return await database.user_screen.create({
        data: {
            screen_name,
            user_id,
            background_url
        }
    })
   
}

export async function FindScreens(user_id: number){
    return await database.user_screen.findMany({
        where: {
            user_id
        }
    })
}

export async function FindScreenById(id: number){
    return await database.user_screen.findUnique({
        where:{
            id
        }
    })
}