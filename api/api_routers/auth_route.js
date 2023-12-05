import express from "express";
import { signup } from "../api_controllers/auth_controller.js";

const router = express.Router()

export default router.post('/signup', signup)