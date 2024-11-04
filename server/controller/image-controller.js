//gridfs-stream package ke baaare mai padhna hai interview important question hai

import grid from 'gridfs-stream';
import mongoose from 'mongoose';

const url = "http://localhost:8080";

let gfs , gridFsBucket;
const conn = mongoose.connection;
conn.once('open', () => {
    gridFsBucket = new mongoose.mongo.GridFSBucket(conn.db, {
        bucketName: 'photos'
    });
    gfs = grid(conn.db, mongoose.mongo);
    gfs.collection('photos');
})

export const uploadFile = async (req, res) => {
    if (!req.file) {
        return res.status(404).json("File not found");
    }

    const imageUrl = `${url}/file/${req.file.filename}`;

    return res.status(200).json(imageUrl);
}

export const getImage = async (req, res) => {
    try {
        const file = await gfs.files.findOne({ filename: req.params.filename });

        // const readStream = gridFsBucket.openDownloadStreamByName(req.params.filename);
        const readStream = gridFsBucket.openDownloadStream(file._id);
        readStream.pipe(res);  //Read pipe from nodejs
    } catch (error) {
        return res.status(500).json(error.message);
    }
}