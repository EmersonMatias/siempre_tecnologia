import { hashSync } from "bcrypt"
import { SignUp } from "../middlewares/signupMiddlewares.js"
import { createNewUser, findEmailByName } from "../repository/signupRepositoy.js"

async function registerUser(signupData: SignUp) {
    const emailExist = await findEmailByName(signupData.email)
 
    if (emailExist) throw { message: "Email alredy exist", status: 409 }

    const encryptedPassword = hashSync(signupData.password, 10)
    const newSignupData = {...signupData, password: encryptedPassword}

   return await createNewUser(newSignupData)
}


export const signupServices = {
    registerUser
}

/*

datasource db {
  provider = "mysql"
  url      = "mysql://user:password@localhost:3306/database"
}
 */