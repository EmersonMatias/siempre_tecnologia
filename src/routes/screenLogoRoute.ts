import { Router } from "express";
import multer from "multer";
import { multerConfig } from "../aws/s3.js";
import { GetScreenLogo, RegisterScreenLogo, DeleteScreenLogo } from "../controllers/screenLogoController.js";
import { validateUserToken } from "../middlewares/authTokenMiddleware.js";

const route = Router()


route.post("/screenlogo/:id", validateUserToken ,multer(multerConfig).single('file'), RegisterScreenLogo )

route.get("/screenlogo/:idscreen", validateUserToken, GetScreenLogo)

route.delete("/screenlogo/:id", validateUserToken, DeleteScreenLogo)

export default route