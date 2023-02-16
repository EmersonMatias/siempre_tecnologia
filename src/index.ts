import express, { urlencoded } from "express"
import cors from "cors"
import signupRoute from "./routes/signupRoute.js"
import signinRoute from "./routes/signinRoute.js"
import awsS3Route from "./routes/awsS3Route.js"
import usersRoute from "./routes/usersRoute.js"

const server = express()

server.use(express.json())
server.use(cors())
server.use(urlencoded({extended: true}))


server.use(signupRoute)
server.use(signinRoute)
server.use(awsS3Route)
server.use(usersRoute)


server.listen(4000, () => console.log("SERVER RUNNING AT PORT 4000"))
 