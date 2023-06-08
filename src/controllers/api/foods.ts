import { Request, Response } from 'express';

export const getFoods = (req: Request, res: Response) => {

    res.json({
        msg: 'getFoods'
    })
}

export const getFood = (req: Request, res: Response) => {

    const { id } = req.params

    res.json({
        msg: 'getFood',
        id
    })
}

export const getFoodByCategory = (req: Request, res: Response) => {

    const { category } = req.params

    res.json({
        msg: 'getFoodByCategory',
        category
    })
}

export const putFood = (req: Request, res: Response) => {

    const { id } = req.params
    const { body } = req

    res.json({
        msg: 'putFood',
        id,
        body
    })
}

export const postFood = (req: Request, res: Response) => {

    const { body } = req

    res.json({
        msg: 'postFood',
        body
    })
}

export const deleteFood = (req: Request, res: Response) => {

    const { id } = req.params

    res.json({
        msg: 'deleteFood',
        id
    })
}