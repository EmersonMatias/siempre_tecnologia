import { hashSync } from "bcrypt"
import { SignUp } from "../middlewares/signupMiddlewares.js"
import { createNewUser, findEmailByName } from "../repository/usersRepositoy.js"

async function registerUser(signupData: SignUp) {
  const emailExist = await findEmailByName(signupData.email)
  
  if (emailExist) throw { message: "Email alredy exist", status: 409 }

  const encryptedPassword = hashSync(signupData.password, 10)
  const newSignupData = {...signupData, password: encryptedPassword, price: signupData.price*100, email: signupData.email.toLocaleLowerCase()}
  

  return await createNewUser(newSignupData)
}


export const signupServices = {
    registerUser
}
