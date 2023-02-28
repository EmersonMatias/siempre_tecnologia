import { Router } from "express";
import { getAllProducts, GetProductsScreen, RegisterProducts, RegisterProductScreen } from "../controllers/productsController.js";
import { validateUserToken } from "../middlewares/authTokenMiddleware.js";

const route = Router()

route.post("/products", validateUserToken, RegisterProducts)

route.get("/products",validateUserToken, getAllProducts )

route.post("/productsscreen/:id", validateUserToken, RegisterProductScreen)

route.get("/productsscreen/:id", validateUserToken, GetProductsScreen)

export default route