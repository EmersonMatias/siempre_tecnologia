import { Router } from "express";
import multer from "multer";
import { multerConfig } from "../aws/s3.js";
import { validateUserToken } from "../middlewares/authTokenMiddleware.js";
import { deleteImage, getFiles, uploadImage } from "../controllers/awsS3Controller.js";

const route = Router()



route.get("/getfiles", validateUserToken, getFiles)

route.post( "/uploadfile" , validateUserToken , multer(multerConfig).single('file') , uploadImage )

route.delete( "/deletefile/:id" , validateUserToken , deleteImage )

export default route