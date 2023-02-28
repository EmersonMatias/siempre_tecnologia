import { Products } from "../controllers/productsController.js";
import { DeleteAllProducts, FindManyProducts, RegisterManyProducts } from "../repository/productsRepository.js";


export async function RegisterProducts(products: Products[], id: number){

    if(products.length === 0) throw {message: "empty", status: 404}
    
    await DeleteAllProducts(id)

    return await RegisterManyProducts(products, id)
}

export async function getAllProducts(id: number){

    return FindManyProducts(id)
}






export const productsService = {
    RegisterProducts,
    getAllProducts
}