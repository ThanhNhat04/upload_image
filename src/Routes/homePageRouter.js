import express from "express";
import { getImage, getimgByUser } from "../Controllers/homePageController.js";

const homePageRouter = express.Router();

homePageRouter.get("/get-img", getImage);
homePageRouter.get("/find-img-by-name/:id", getimgByUser);

export default homePageRouter;