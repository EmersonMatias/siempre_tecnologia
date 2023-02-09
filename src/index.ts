import express, { urlencoded } from "express"
import cors from "cors"
import signupRoute from "./routes/signupRoute.js"
import signinRoute from "./routes/signinRoute.js"
import awsS3Route from "./routes/awss3Route.js"

const server = express()

server.use(express.json())
server.use(cors())
server.use(urlencoded({extended: true}))


server.use(signupRoute)
server.use(signinRoute)
server.use(awsS3Route)


server.listen(4000, () => console.log("SERVER RUNNING AT PORT 4000"))
