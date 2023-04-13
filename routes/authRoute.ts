import { Router } from "express";
import { createUser, loginUser } from "../controllers/userController";

export const authRouter = Router();

authRouter.post("/register", createUser);
authRouter.post("/login", loginUser);
