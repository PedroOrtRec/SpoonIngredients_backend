import { Request, Response } from 'express';
import sendError from '../../services/sendError';
import MealService from '../../services/mealservice';


export const getMeals = async (req: Request, res: Response) => {

    try {
        const meals = await MealService.readAll()
        res.json({ meals })
    } catch (error) {
        res.json(sendError(error))
    }
}

export const getMeal = async (req: Request, res: Response) => {

    const { id } = req.params
    
    if (isNaN(Number(id)))
        return res.json({fatal: 'url params must be a number'});
    
    try {
        const meal = await MealService.readOne(id)
        res.json( meal ? { meal } : `the meal with id ${ id } does not exist in the database`)
    } catch (error) {
        res.json(sendError(error))
    }
}

export const getMealByCategory = async (req: Request, res: Response) => {

    const { category } = req.params

    try {
        const meal = await MealService.readByCategory( category )
        res.json( meal.length > 0 ? { meal } : `the category ${ category } does not exist or do not have any meal` )
    } catch (error) {
        res.json(sendError(error))
    }
}

export const putMeal = (req: Request, res: Response) => {

    const { id } = req.params
    const { body } = req

    if (isNaN(Number(id)))
        return res.json({fatal: 'url params must be a number'})

    res.json({
        msg: 'putFood',
        id,
        body
    })
}

export const postMeal = (req: Request, res: Response) => {

    const { body } = req

    res.json({
        msg: 'postFood',
        body
    })
}

export const deleteMeal = (req: Request, res: Response) => {

    const { id } = req.params

    if (isNaN(Number(id)))
        return res.json({fatal: 'url params must be a number'})

    res.json({
        msg: 'deleteFood',
        id
    })
}

       // const result = await Category.findOne({attributes: ['id'], where: {name: category}})
        // if (!result) {
        //     return res.json({ fatal: `the category ${ category } does not exist or do not have any meal` })
        // } else {
        //     categoryId = result.dataValues.id
        // }
        // const meal = await Meal.findAll({include: Category, where: {'category_id': categoryId}})