import { DataToken } from "../middlewares/authTokenMiddleware.js";
import { deleteUserById, deleteUserFiles, deleteUserProducts, deleteUserScreen, deleteUserScreenProducts, findUsers, upadteStatusAccount, updateUserAdressById, updateUserCityById, updateUserNameById, updateUserPhoneById, updateUserPriceById } from "../repository/usersRepositoy.js";

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

async function updateUserName(dataToken: DataToken, userId: number, newName: string){
    if (dataToken.account_type === "user") throw { message: "User is not allowed", status: 401 }

    return await updateUserNameById(userId, newName )
}

async function updateUserPhone(dataToken: DataToken, userId: number, newEmail: string){

    if (dataToken.account_type === "user") throw { message: "User is not allowed", status: 401 }

    return await updateUserPhoneById(userId, newEmail )
}

async function updateUserCity(dataToken: DataToken, userId: number, newCity: string){

    if (dataToken.account_type === "user") throw { message: "User is not allowed", status: 401 }

    return await updateUserCityById(userId, newCity )
}

async function updateUserAdress(dataToken: DataToken, userId: number, newAdress: string){

    if (dataToken.account_type === "user") throw { message: "User is not allowed", status: 401 }

    return await updateUserAdressById(userId, newAdress )
}

async function updateUserPrice(dataToken: DataToken, userId: number, newPrice: number){

    if (dataToken.account_type === "user") throw { message: "User is not allowed", status: 401 }

    return await updateUserPriceById(userId, newPrice )
}

async function deleteUser(dataToken: DataToken, userId: number){
    if (dataToken.account_type === "user") throw { message: "User is not allowed", status: 401 }

    await deleteUserProducts(userId)

    await deleteUserFiles(userId)

    await deleteUserScreen(userId)

    await deleteUserScreenProducts(userId)

    return deleteUserById(userId)
}








export const usersService = {
    getUsers,
    toggleStatusAccount,
    updateUserName,
    updateUserPhone,
    updateUserCity,
    updateUserAdress,
    updateUserPrice,
    deleteUser
}