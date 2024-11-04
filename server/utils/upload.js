import multer from 'multer';
import { GridFsStorage } from 'multer-gridfs-storage';

const URL = 'mongodb://localhost:27017/mernstack';

const storage = new GridFsStorage({
    url: URL,
    // options: { useNewUrlParser: true, useUnifiedTopology: true },
    file: (req,file) => {
        const match = ["image/png","image/jpeg","image/jpg"];

        if(match.indexOf(file.mimetype) === -1) {
            return `${Date.now()}-file-${file.originalname}`;
        }
        return {
            bucketName: "photos",
            filename: `${Date.now()}-file-${file.originalname}`
        }
    }
});

export default multer({ storage });