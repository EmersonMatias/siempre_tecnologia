import { compareSync } from "bcrypt";
import { SignIn } from "../middlewares/signinMiddlewares.js";
import { findEmailByName } from "../repository/usersRepositoy.js";
import jwt from "jsonwebtoken";

export async function connectUser(signinData: SignIn) {
    const emailExist = await findEmailByName(signinData.email)

    if (!emailExist) throw { message: "email doesn't exist", status: 404 }

    const checkPassword = compareSync(signinData.password, emailExist.password)

    if (!checkPassword) throw { message: "password incorret", status: 401 }

    const dataToken = { id: emailExist.id, name: emailExist.name, active: emailExist.active, account_type: emailExist.account_type }

    const acessToken = jwt.sign(dataToken, process.env.ACESS_TOKEN_SECRET)

    const userData = {
        name: emailExist.name,
        active: emailExist.active,
        account_type: emailExist.account_type,
        token: acessToken,
        id: emailExist.id
    }

    return userData
}

export const signinService = {
    connectUser
}