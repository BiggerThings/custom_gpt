import express from "express";
import { helloGemini } from "../controllers/geminiController";

const geminiRoute = express.Router();

geminiRoute.get("/gemini", helloGemini);

export default geminiRoute;