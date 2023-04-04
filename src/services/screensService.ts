import { DeleteAllPromotionalProducts, DeleteAllScreenProducts } from "../repository/productsRepository.js"
import { CreateNewScreen, DeleteScreenById, FindScreenById, FindScreens, Screen, UpdateScreenById } from "../repository/screensRepository.js"
import { deleteAllScreenFiles } from "../repository/userFilesRepository.js"


export async function CreateScreen(screen_name: string, id: number, screen_type: string) {
    if (!screen_name || !id|| !screen_type) throw { message: "error", status: 404 }
    if (typeof (screen_name) !== "string") throw { message: "error", status: 404 }

    let background_url = ""

    if(screen_type === "açogue"){
        background_url = "https://siempre-tecnologia-test-bucket.s3.sa-east-1.amazonaws.com/f4f9ffc6-ff32-4ccd-8590-eb87fd96960e_background2.png"
    }else if(screen_type === "padaria"){
        background_url="https://siempre-tecnologia-test-bucket.s3.sa-east-1.amazonaws.com/c223f2fa-bf65-436a-b2b5-6e2f7fb19958_back%201.png"
    }

    return await CreateNewScreen(screen_name, id, background_url)
}

export async function GetScreens(id: number) {

    if (!id) throw { message: "error", status: 404 }

    return await FindScreens(id)
}

export async function GetScreen(id: number){
    if (!id) throw { message: "error", status: 404 }
    return await FindScreenById(id)
}

export async function UpdateScreen(id: number, content: Screen){
    if (!id) throw { message: "error", status: 404 }
    return await UpdateScreenById(id, content)
}

export async function DeleteScreen(id: number){
    if (!id) throw { message: "error", status: 404 }

 
    await DeleteAllPromotionalProducts(id)
    await DeleteAllScreenProducts(id)
    await deleteAllScreenFiles(id)
    
    return await DeleteScreenById(id)
}




export const screenService = {
    CreateScreen,
    GetScreens,
    GetScreen,
    UpdateScreen,
    DeleteScreen
}