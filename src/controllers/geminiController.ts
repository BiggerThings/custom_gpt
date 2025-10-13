import { Request, Response } from 'express';

export const helloGemini = (req: Request, res: Response) => {
    res.status(200).send({message: 'Hello, Gemini!'});
};