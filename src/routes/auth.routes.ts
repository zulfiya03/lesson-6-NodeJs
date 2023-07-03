import { Router } from "express";
import authController from "../controllers/auth.controller";

const route = Router()

route.post('/register', authController.register)

export default route