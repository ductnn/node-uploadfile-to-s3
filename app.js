require('dotenv').config();

const fs = require('fs');
const AWS = require('aws-sdk');

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const fileName = './zoro.jpeg';

const uploadFile = () => {
    fs.readFile(fileName, (err, data) => {

        if (err) throw err;
        const params = {
            Bucket: "anim-marketplace-s3",
            Key: 'zoro.jpeg',
            Body: data,
        };
        s3.upload(params, function(err, data) {
            if (err) throw err
            console.log(`File uploaded successfully at ${data.Location}`)
        });
    });
};

uploadFile();
