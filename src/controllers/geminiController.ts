import { Request, Response } from 'express';

export const helloGemini = (req: Request, res: Response) => {
    res.send('Hello, Gemini!');
};