import { DataToken } from "../middlewares/authTokenMiddleware.js";
import { findUsers, upadteStatusAccount } from "../repository/usersRepositoy.js";

async function getUsers(dataToken: DataToken) {

    if (dataToken.account_type === "user") throw { message: "User is not allowed", status: 401 }

    return await findUsers()
}

async function toggleStatusAccount(dataUpdate: boolean, dataToken: DataToken, userId: number) {

    if(!userId  || typeof(userId) !== "number") throw {message: "Data is not allowedz", status: 401}
    if(typeof(dataUpdate) !== "boolean") throw {message: "Data is not allowed", status: 401}
    if (dataToken.account_type === "user") throw { message: "User is not allowed", status: 401 }

    return await upadteStatusAccount(dataUpdate, userId)
}

export const usersService = {
    getUsers,
    toggleStatusAccount 
}