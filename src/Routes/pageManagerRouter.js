import express from "express";
import { deleteImgById, getimgByUserId, getimgCreateByUserId, informationUser } from "../Controllers/pageManageController.js";

const pageManagerRouter = express.Router();

pageManagerRouter.get("/get-user/:name", informationUser);
pageManagerRouter.get("/get-img-save/:id",getimgByUserId);
pageManagerRouter.get("/get-img-by-user/:id",getimgCreateByUserId);
pageManagerRouter.delete("/delete-img/:id",deleteImgById)

export default pageManagerRouter;