import sequelize from "../Models/index.js";
import initModels from '../Models/init-models.js';

const model = initModels(sequelize);

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


homePageRouter.post("/upload", upload.single("file"), (req, res) => {
    res.send("ok")
});

import compress_images from "compress-images";

foodRoutes.post("/upload", upload.single("file"), async (req, res) => {

    let file = req.file;
    
     await compress_images(`${process.cwd()}/public/img/${file.filename}`, 
     `./public/file/`, 
    { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "25"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
        function (error, completed, statistic) {
            console.log("-------------");
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log("-------------");
        }
    );

    // let { hoTen, email } = req.body;

    // if(file.mimetype != "image/jpeg" || file.mimetype != "image/jpg" || file.mimetype != "image/png" || file.mimetype != "image/gif")


    // fs.readFile(process.cwd() + "/public/img/" + file.filename, (err, data) => {
    //     // băm hình

    //     // data:image/jpeg;base64
    //     let fileBase = `data:${file.mimetype};base64,${Buffer.from(data).toString("base64")}`;
    //     // lưu vào CSDL


    //     res.send(fileBase);
    // })
});