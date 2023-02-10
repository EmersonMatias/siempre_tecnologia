import { Router } from "express";
import multer from "multer";
import { multerConfig } from "../aws/s3.js";
import aws from "aws-sdk"
import { validateUserToken } from "../middlewares/authTokenMiddleware.js";
import { uploadImage } from "../controllers/awsS3Controller.js";

const route = Router()
const z = new aws.S3()


route.post("/upload", validateUserToken , multer(multerConfig).single('file'), uploadImage)

route.delete("/deletefile/:id", validateUserToken,async (req, res) => {

    const deletefile = await z.deleteObject({
        Bucket: "siempre-tecnologia-test-bucket",
        Key: "11249b26-ccf2-421e-878e-b570a5256013_20160523-galaxia.jpg"
    }).promise()

    console.log(deletefile)
})

export default route