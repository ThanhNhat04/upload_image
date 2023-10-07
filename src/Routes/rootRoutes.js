import express from 'express';

import informationPageRouter from "./informationPageRouter.js";
import homePageRouter from './homePageRouter.js';
import userRoutes from './userRotues.js';
import pageManagerRouter from "./pageManagerRouter.js";
import pageAddImgRouter from './PageAddImageRouter.js';

const rootRoutes = express.Router();

rootRoutes.use("/informationPage", informationPageRouter);
rootRoutes.post("/pageAddImg", pageAddImgRouter);
rootRoutes.use("/pageManager", pageManagerRouter);
rootRoutes.use("/user", userRoutes);
rootRoutes.use("/homePage", homePageRouter)


export default rootRoutes;