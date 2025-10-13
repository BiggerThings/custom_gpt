import express from "express";
import { helloGemini, getGeminiResponse } from "../controllers/geminiController";

const geminiRoute = express.Router();

geminiRoute.get("/gemini", helloGemini);
geminiRoute.post("/gemini/ask", getGeminiResponse);

export default geminiRoute;