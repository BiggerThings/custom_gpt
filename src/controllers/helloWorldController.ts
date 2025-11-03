import { Request, Response } from 'express';

export const helloWorld = (req: Request, res: Response) => {
    try {
        res.status(200).send({message: 'Hello, World!'});
        console.error('Hello World endpoint was called');
    } catch (error) {
        console.error('Error occurred:', error);
        res.status(500).send({error: 'Internal Server Error'});
    }
};