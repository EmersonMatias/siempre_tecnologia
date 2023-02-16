import { DataToken } from "../middlewares/authTokenMiddleware.js";
import { findUsers } from "../repository/usersRepositoy.js";

async function getUsers(dataToken: DataToken){

    if(dataToken.account_type === "user") throw {message: "User is not allowed", status:401}

    return await findUsers()
}


export const usersService = {
    getUsers
}