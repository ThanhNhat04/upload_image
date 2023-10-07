import express from 'express';

const app = express();
app.use(express.json());
app.use(express.static("."))


import cors from 'cors';
app.use(cors());
app.listen(8080); 



// localhost:8080/api/food/get-food
import rootRoutes from './Routes/rootRoutes.js';

app.use("/",rootRoutes);
