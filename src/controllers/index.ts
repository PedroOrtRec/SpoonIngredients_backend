import { Request, Response } from 'express';

export const welcomeMessage = (req: Request, res: Response) => {
    res.json({ msg: 'This is the root'})
}