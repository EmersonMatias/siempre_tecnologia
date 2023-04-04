import { S3Client } from "@aws-sdk/client-s3";
import dotenv from "dotenv";
import multerS3 from "multer-s3";
import { v4 as uuidv4 } from 'uuid';
dotenv.config();
var S3 = new S3Client({});
export var multerConfig = {
    storage: multerS3({
        s3: S3,
        bucket: "siempretecnologia",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        acl: "public-read",
        key: function (req, file, cb) {
            file.filename = "".concat(uuidv4(), "_").concat(file.originalname);
            file.path = "https://siempretecnologia.s3.sa-east-1.amazonaws.com/".concat(file.filename);
            cb(null, file.filename);
        }
    }),
    limits: {
        fileSize: 50 * 1024 * 1024
    }
};
