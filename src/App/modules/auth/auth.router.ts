import { Router } from "express";
import { AuthController } from "./auth.controller";

const route = Router();


route.post("/register", AuthController.registerPatient)


export const authRouter = route

