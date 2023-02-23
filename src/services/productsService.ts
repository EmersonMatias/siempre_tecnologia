import { Products } from "../controllers/productsController.js";
import { FindManyProducts, RegisterManyProducts } from "../repository/productsRepository.js";


export async function RegisterProducts(products: Products[], id: number){

    if(products.length === 0) throw {message: "empty", status: 404}

    return await RegisterManyProducts(products, id)
}

export async function getAllProducts(id: number){

    return FindManyProducts(id)
}






export const productsService = {
    RegisterProducts,
    getAllProducts
}