import { S3Client } from "@aws-sdk/client-s3"
import dotenv from "dotenv"
import multerS3 from "multer-s3"
import { v4 as uuidv4 } from 'uuid';

dotenv.config()
const S3 = new S3Client({})


export const multerConfig = {
    storage: multerS3({
        s3: S3,
        bucket: "siempre-tecnologia-test-bucket",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: (req, file, cb) => {
            const fileName = `${uuidv4()}_${file.originalname}`

            cb(null, fileName)
        }
    }),
    limits: {
        fileSize: 5 * 1024 * 1024
    }
}