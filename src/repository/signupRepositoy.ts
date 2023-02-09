import { database } from "../../prisma/index.js";
import { SignUp } from "../middlewares/signupMiddlewares.js";

export async function createNewUser(signupData: SignUp) {
    const {name, email, password, phone, city, adress, price, active, account_type} = signupData

   return  await database.user.create({
        data:{
            name,
            email,
            password, 
            phone, 
            city, 
            adress, 
            price, 
            active, 
            account_type
        }
    })
}

export async function findEmailByName(email: string){
    return await database.user.findUnique({
        where:{
            email
        }
    })
}