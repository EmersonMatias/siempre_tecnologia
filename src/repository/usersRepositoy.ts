import { database } from "../../prisma/index.js";
import { SignUp } from "../middlewares/signupMiddlewares.js";

export async function createNewUser(signupData: SignUp) {
    const { name, email, password, phone, city, adress, price, account_type } = signupData

    if(!account_type){
        return await database.user.create({
            data: {
                name,
                email,
                password,
                phone,
                city,
                adress,
                price,
                active: true,
                account_type: "user"
            }
        })
    }else{
        return await database.user.create({
            data: {
                name,
                email,
                password,
                phone,
                city,
                adress,
                price,
                active: true,
                account_type
            }
        })
    }

   
}

export async function findEmailByName(email: string) {
    return await database.user.findUnique({
        where: {
            email
        }
    })
}

export async function findUsers(){
    return await database.user.findMany({
        where:{
            account_type: "user"
        }
    })
}


export async function upadteStatusAccount(dataUpdate: boolean, id: number){
    return await database.user.update({
        data:{
            active: dataUpdate
        },
        where: {
            id 
        }
    })
}

export async function updateUserNameById(userId: number, newName: string){
    return await database.user.update({
        data: {
            name: newName
        },
        where: {
            id: userId
        }
    })
}

export async function updateUserPhoneById(userId: number, newPhone: string){
    return await database.user.update({
        data: {
            phone: newPhone
        },
        where: {
            id: userId
        }
    })
}

export async function updateUserCityById(userId: number, newCity: string){
    return await database.user.update({
        data: {
            city: newCity
        },
        where: {
            id: userId
        }
    })
}

export async function updateUserAdressById(userId: number, newAdress: string){
    return await database.user.update({
        data: {
            adress: newAdress
        },
        where: {
            id: userId
        }
    })
}

export async function updateUserPriceById(userId: number, newPrice: number){
    return await database.user.update({
        data: {
            price: newPrice
        },
        where: {
            id: userId
        }
    })
}

export async function deleteUserById(userId: number){
    return await database.user.delete({
        where: {
            id: userId
        }
    })
}


export async function deleteUserFiles(userId: number){
    return await database.user_files.deleteMany({
        where:{
            user_id: userId
        }
    })
}

export async function deleteUserProducts(userId: number){
    return await database.user_Products.deleteMany({
        where:{
            user_id: userId
        }
    })
}

export async function deleteUserScreen(userId: number){
    return await database.user_screen.deleteMany({
        where:{
            user_id: userId
        }
    })
}

export async function deleteUserScreenProducts(userId: number){
    return await database.user_screen_products.deleteMany({
        where:{
            user_id: userId
        }
    })
}



