import express from "express"
import cors from "cors"
import signupRoute from "./routes/signupRoute.js"
import signinRoute from "./routes/signinRoute.js"

const server = express()

server.use(express.json())
server.use(cors())


server.use(signupRoute)
server.use(signinRoute)

server.listen(4000, () => console.log("SERVER RUNNING AT PORT 4000"))
