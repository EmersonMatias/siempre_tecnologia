import { Router } from "express";
import { CreateScreen, GetScreen, GetScreens } from "../controllers/screensController.js";
import { validateUserToken } from "../middlewares/authTokenMiddleware.js";

const route = Router()



route.post("/screens", validateUserToken, CreateScreen)
route.get("/screens", validateUserToken, GetScreens)
route.get("/screen/:id", GetScreen)

route.get("/teste", (req, res) => {
    console.log("atu")
    res.send("Atualizou")
})


export default route