import  express  from "express";
import sequelize from "../Models/index.js";
import initModels from '../Models/init-models.js';

const model = initModels(sequelize);

const pageAddImgRouter = express.Router();

import multer from "multer";
import fs from "fs";

const storage = multer.diskStorage({
    destination: process.cwd() + "/public/img",
    filename: (req, file, callback) => {
        let date = new Date();
        let newName = date.getTime();
        callback(null, newName + "_" + file.originalname);
    }
});

const upload = multer({ storage });

pageAddImgRouter.post("/upload", upload.single("file"), async (req, res) => {

    let file = req.file;
    let { ten_hinh, duong_dan } = req.body;

    if (file.mimetype != "image/jpeg" || file.mimetype != "image/jpg" || file.mimetype != "image/png" || file.mimetype != "image/gif")
        fs.readFile(process.cwd() + "/public/img/" + file.filename, (err, data) => {
            let fileBase = `data:${file.mimetype};base64,${Buffer.from(data).toString("base64")}`;
            let img = model.hinh_anh.create({
                where: {
                    ten_hinh,
                    duong_dan: fileBase
                }
            })
            res.send(img);
        })
    
});
export default pageAddImgRouter;