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

export async function DeleteAllProducts(id: number){
    return await database.user_Products.deleteMany({
        where: {
            user_id: id
        }
    })
}



export async function RegisterProductForScreen(product: any, screen_id: number, user_id: number){
    return await database.user_screen_products.create({
        data:{
            product_id: product.id,
            user_id,
            screen_id
        }
    })
}

export async function GetProductScreenUnique(product_id: number, screen_id: number){
    return await database.user_screen_products.findFirst({
        where:{
            product_id
            ,screen_id
        }
    })
}

export async function DeleteProductScreen(id: number){
    return await database.user_screen_products.delete({
        where:{
            id
        }
    })
}

export async function GetAllProductsScreen(screen_id: number, user_id: number){
    return await database.user_screen_products.findMany({
        where: {
            screen_id,
            user_id
        },
        include:{
            products: true
        }
    })
}

export async function RegisterUniquePromotionalProduct(screen_id: number, product_id: number, user_id: number){
    return await database.promotional_products.create({
        data:{
            product_id,
            user_id,
            screen_id
        }
    })
}

export async function FindPromotionalProduct(screen_id: number, product_id: number, user_id: number){
    return await database.promotional_products.findFirst({
        where: {
            product_id,
            user_id,
            screen_id
        }
    })
}

export async function DeletePromotionalProduct(id: number){
    return await database.promotional_products.delete({
        where: {
            id
        }
    })
}

export async function FindAllPromotionalProducts(screen_id: number, user_id: number ){
    return await database.promotional_products.findMany({
        where: {
            user_id,
            screen_id
        }
    })
}

export async function DeleteAllScreenProducts(screen_id: number){
    return await database.user_screen_products.deleteMany({
        where:{
            screen_id
        }
    })
}

export async function DeleteAllPromotionalProducts(screen_id: number){
    return await database.promotional_products.deleteMany({
        where:{
            screen_id
        }
    })
}

