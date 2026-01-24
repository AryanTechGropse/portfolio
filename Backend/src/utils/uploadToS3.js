import { PutObjectCommand } from "@aws-sdk/client-s3";
import { s3 } from "../config/s3.js";
import crypto from "crypto";

export const uploadToS3 = async (file) => {
    const fileExt = file.filename.split(".").pop();
    const fileName = `${crypto.randomUUID()}.${fileExt}`;

    const command = new PutObjectCommand({
        Bucket: process.env.AWS_BUCKET_NAME,
        Key: `profile/${fileName}`,
        Body: file.file,
        ContentType: file.mimetype,
    });

    await s3.send(command);

    return `https://${process.env.AWS_BUCKET_NAME}.s3.${process.env.AWS_REGION}.amazonaws.com/profile/${fileName}`;
};
