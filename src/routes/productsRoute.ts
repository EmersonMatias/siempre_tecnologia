import { Router } from "express";
import { getAllProducts, RegisterProducts } from "../controllers/productsController.js";
import { validateUserToken } from "../middlewares/authTokenMiddleware.js";

const route = Router()

route.post("/products", validateUserToken, RegisterProducts)

route.get("/products",validateUserToken, getAllProducts )

export default route