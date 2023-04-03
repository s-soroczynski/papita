import { authRouter } from "./auth";
import { Router } from "express";

export const mainRouter = Router();

mainRouter.use("/auth", authRouter);
