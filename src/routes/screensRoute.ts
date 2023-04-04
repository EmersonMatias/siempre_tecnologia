import { Router } from "express";
import { CreateScreen, DeleteScreen, GetScreen, GetScreens, UpdateScreen } from "../controllers/screensController.js";
import { validateUserToken } from "../middlewares/authTokenMiddleware.js";

const route = Router()



route.post("/screens", validateUserToken, CreateScreen)
route.get("/screens", validateUserToken, GetScreens)


route.get("/screen/:id",validateUserToken, GetScreen)
route.put("/screen/:id", validateUserToken, UpdateScreen)
route.delete("/screen/:id", validateUserToken, DeleteScreen )


route.get("/teste", (req, res) => {
    console.log("atu")
    res.send("Atualizou")
})


export default route