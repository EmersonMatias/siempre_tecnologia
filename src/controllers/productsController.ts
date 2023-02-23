import { Response } from "express";
import { AuthToken } from "../middlewares/authTokenMiddleware.js";
import { productsService } from "../services/productsService.js";


export type Products = {
    code: number,
    type: string,
    name: string,
    price: number,
    user_id: number
}

export async function RegisterProducts(req:AuthToken , res: Response){
    const dataToken = req.datatoken
    const products = req.body as Products[]

    try{
        const sucess = await productsService.RegisterProducts(products, dataToken.id)
        res.status(200).send(sucess)
    }catch(error){
        res.sendStatus(404)
    }

} 

export async function getAllProducts(req: AuthToken, res:Response){
    const dataToken = req.datatoken

    try{
        const sucess = await productsService.getAllProducts(dataToken.id)
        res.send(sucess)
    }catch(error){
        res.send(404)
    }
}
