import { database } from "../../prisma/index.js";

export async function RegisterManyProducts(products: any, id: number){
    return await database.user_Products.createMany({
        data: products
    })
}

export async function FindManyProducts(id: number){
    return await database.user_Products.findMany({
        where: {
            user_id: id
        }
    })
}