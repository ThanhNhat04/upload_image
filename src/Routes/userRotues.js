import express from 'express';
import { updateUser, signUp, login } from '../Controllers/userController.js';

const userRoutes = express.Router();
userRoutes.put("/update-user/:id", updateUser);

//login ,sign up
userRoutes.post("/sign-up", signUp);
userRoutes.post("/login", login);

export default userRoutes;