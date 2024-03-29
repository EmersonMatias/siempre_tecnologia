import { Router } from "express";
import { getAllProducts, GetProductsScreen, getPromotionalProducts, RegisterProducts, RegisterProductScreen, RegisterPromotionalProduct } from "../controllers/productsController.js";
import { validateUserToken } from "../middlewares/authTokenMiddleware.js";

const route = Router()

route.post("/products/:id", validateUserToken, RegisterProducts)

route.get("/products",validateUserToken, getAllProducts )

route.post("/productsscreen/:id", validateUserToken, RegisterProductScreen)

route.get("/productsscreen/:id", validateUserToken, GetProductsScreen)

route.post("/promotionalproducts", validateUserToken,RegisterPromotionalProduct )

route.get("/promotionalproducts/:id", validateUserToken, getPromotionalProducts)

export default route