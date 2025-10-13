import { Request, Response } from 'express';
import { askGemini } from "../services/geminiService";

export const helloGemini = (req: Request, res: Response) => {
    res.status(200).send({message: 'Hello, Gemini!'});
};

export const getGeminiResponse = async (req: Request, res: Response) => {
    const { prompt } = req.body;
    try {
        const geminiResponse = await askGemini(prompt);
        res.status(200).send({ response: geminiResponse });
    } catch (error) {
        res.status(500).send({ error: 'Error communicating with Gemini API' });
    }
};