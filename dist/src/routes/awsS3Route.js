import { Router } from "express";
import multer from "multer";
import { multerConfig } from "../aws/s3.js";
import { validateUserToken } from "../middlewares/authTokenMiddleware.js";
import { deleteImages, getFiles, uploadImage } from "../controllers/awsS3Controller.js";
var route = Router();
route.get("/getfiles/:id", validateUserToken, getFiles);
route.post("/uploadfile/:id", validateUserToken, multer(multerConfig).single('file'), uploadImage);
route["delete"]("/deletefile/:id", validateUserToken, deleteImages);
export default route;
