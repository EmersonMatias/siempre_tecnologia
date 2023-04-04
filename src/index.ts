import express, { urlencoded } from "express"
import cors from "cors"
import signupRoute from "./routes/signupRoute.js"
import signinRoute from "./routes/signinRoute.js"
import awsS3Route from "./routes/awsS3Route.js"
import usersRoute from "./routes/usersRoute.js"
import productsRoute from "./routes/productsRoute.js"
import screensRoute from "./routes/screensRoute.js"
import screenLogoRoute from "./routes/screenLogoRoute.js"

const server = express()

server.use(express.json())
server.use(cors())
server.use(urlencoded({extended: true}))


server.use(signupRoute)
server.use(signinRoute)
server.use(awsS3Route)
server.use(usersRoute)
server.use(productsRoute)
server.use(screensRoute)
server.use(screenLogoRoute)

const port = process.env.PORT || 4000

server.listen(port, () => console.log(`Server Running: ${port}`))
 