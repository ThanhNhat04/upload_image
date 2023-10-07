import express from "express";
import { commnentImg, getCommentById, getImageStatus, getImgByID } from "../Controllers/informationPageController.js";

const informationPageRouter = express.Router();

// informationPageRouter.get("/get-user");
informationPageRouter.get("/get-img/:id",getImgByID);
informationPageRouter.get("/get-img-create-by-user/:id",getImageStatus);
informationPageRouter.post("/save-commnet-with-img", commnentImg)
informationPageRouter.get("/commnent/:id", getCommentById);

export default informationPageRouter;