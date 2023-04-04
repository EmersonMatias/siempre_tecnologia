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
    const screen_id = Number(req.params.id)

    try{
        const sucess = await productsService.RegisterProducts(products, dataToken.id, screen_id)
        console.log(sucess)
        res.status(200).send(sucess)
    }catch(error){
        console.log(error)
        res.sendStatus(404)
    }

} 

export async function RegisterProductScreen(req: AuthToken, res: Response){
    const dataToken = req.datatoken
    const screenIdString = req.params.id
    const product = req.body
    const screenId = Number(screenIdString)

    try{
        const sucess = await productsService.RegisterProductsScreen(product, screenId, dataToken.id)
        res.send(sucess)
    }catch(error){
        res.send(404)
    }

}


export async function GetProductsScreen(req: AuthToken, res: Response){
    const dataToken = req.datatoken
    const screenIdString = req.params.id
    const screenId = Number(screenIdString)

    try{
        const sucess = await productsService.GetProductsScreen(screenId, dataToken.id)
        res.send(sucess)
    }catch(error){
        console.log()
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

export async function RegisterPromotionalProduct(req: AuthToken, res: Response){
    const product_id:number = req.body.product_id
    const monitorId: number = req.body.monitorId
    const dataToken = req.datatoken

    console.log(product_id, monitorId)

    try{
        const sucess = await productsService.RegisterPromotionalProduct(Number(monitorId), product_id, dataToken.id)

        res.send(sucess)

    }catch(error){

        console.log(error)
        res.send(404)
    }
    
}

export async function getPromotionalProducts(req: AuthToken, res: Response){
    const screen_id = req.params.id
    const dataToken = req.datatoken


    try{
        const sucess = await productsService.getPromotionalProducts(Number(screen_id), dataToken.id)
        res.send(sucess)
    }catch(error){
        console.log(error)
        res.send(400)

    }
}
