import { Router } from "express";
import multer from "multer";
import { multerConfig } from "../aws/s3.js";
import aws from "aws-sdk"
import { S3Client } from "@aws-sdk/client-s3"

const route = Router()
const z = new aws.S3()
const S3 = new S3Client({})

route.post("/upload", multer(multerConfig).single('file'), (req, res) => {
    const a = req.file
    console.log(a)
} )

route.delete("/file", async (req,res) => {

    const deletefile =  await z.deleteObject({
        Bucket: "siempre-tecnologia-test-bucket",
        Key: "11249b26-ccf2-421e-878e-b570a5256013_20160523-galaxia.jpg"
    }).promise()

    console.log(deletefile)
})

export default route