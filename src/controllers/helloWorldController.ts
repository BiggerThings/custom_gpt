import { Request, Response } from 'express';

export const helloWorld = (req: Request, res: Response) => {
    res.status(200).send({message: 'Hello, World!'});
};