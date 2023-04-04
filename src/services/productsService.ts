import { Products } from "../controllers/productsController.js";
import { DeleteAllProducts, FindManyProducts, GetAllProductsScreen, RegisterManyProducts, RegisterProductForScreen,GetProductScreenUnique, DeleteProductScreen, FindPromotionalProduct, DeletePromotionalProduct, RegisterUniquePromotionalProduct, FindAllPromotionalProducts} from "../repository/productsRepository.js";


export async function RegisterProducts(products: Products[], id: number){

    if(products.length === 0) throw {message: "empty", status: 404}
    
    await DeleteAllProducts(id)

    return await RegisterManyProducts(products, id)
}

export async function getAllProducts(id: number){

    return await FindManyProducts(id)
}

export async function RegisterProductsScreen(product, screenId: number, userId: number){

    if(!product) throw {message: "empty", status: 404}
    if(!screenId) throw {message: "empty", status: 404}
    if(!userId) throw {message: "empty", status: 404}

    const productExist = await GetProductScreenUnique(product.id, screenId)
    if(productExist){
        console.log("excluiu")
        return await DeleteProductScreen(productExist.id)
    }else{  
        console.log("inseriu")
        return await RegisterProductForScreen(product, screenId, userId)
    }

}

export async function GetProductsScreen(screenId: number, userId: number){
    
    if(!userId) throw {message: "empty", status: 404}
    if(!screenId) throw {message: "empty", status: 404}

    return await GetAllProductsScreen(screenId, userId)
}

export async function RegisterPromotionalProduct(screen_id: number, product_id: number, user_id: number){

    if(!screen_id) throw {message: "empty", status: 404}
    if(!product_id) throw {message: "empty", status: 404}

    const productRegistred = await FindPromotionalProduct(screen_id, product_id, user_id)

    if(productRegistred) {
        console.log("exlcui")
        return await DeletePromotionalProduct(productRegistred.id)
    } else{
        console.log("inseriu")
        return await RegisterUniquePromotionalProduct(screen_id, product_id, user_id)
    }

}

export async function getPromotionalProducts(screen_id: number, user_id: number){

    if(!screen_id) throw {message: "empty", status: 404}
    if(!user_id) throw {message: "empty", status: 404}

     return await FindAllPromotionalProducts(screen_id, user_id)

}




export const productsService = {
    RegisterProducts,
    getAllProducts,
    RegisterProductsScreen,
    GetProductsScreen,
    RegisterPromotionalProduct,
    getPromotionalProducts
}