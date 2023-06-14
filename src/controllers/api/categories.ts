import { Request, Response } from 'express';
import Category from '../../models/sequelizeModels/category';
import sendError from '../../services/sendError';

export const getCategories = async (req: Request, res: Response) => {
    try {
        const categories = await Category.findAll();
        res.json({ categories })
    } catch (error) {
        res.json(sendError(error))
    }
}

export const getCategory = async (req: Request, res: Response) => {

    const { id } = req.params

    if ( isNaN(Number(id)) )
        return res.json({fatal: 'url params must be a number'})

        try {
            const category = await Category.findByPk(id);
            res.json( category ? { category } : {fatal: 'No matches found'})
        } catch (error) {
            res.json(sendError(error))
        }
    

}

export const putCategory = async (req: Request, res: Response) => {

    const { id } = req.params
    const { body } = req

    if ( isNaN(Number(id)) )
        return res.json( {fatal: 'url params must be a number'} )
    
    if ( !body.name )
        return res.json( {fatal: 'the body do not match with the model'} )

    try {
        const category = await Category.update( body, {
            where: {
              id
            }
        });
        res.json({ category })    
    } catch (error) {
        res.json(sendError(error))
    }
}

export const postCategory = async (req: Request, res: Response) => {

    const { body } = req

    if ( !body.name )
        return res.json( {fatal: 'the body do not match with the model'} )

   try {
    const category = await Category.create(body)
    res.json({ category })
   } catch (error) {
    res.json(sendError(error))
   }
}

export const deleteCategory = async (req: Request, res: Response) => {

    const { id } = req.params

    if (isNaN(Number(id)))
        return res.json({fatal: 'url params must be a number'})

    try {
        const category = await Category.destroy( {
            where: {
              id
            }
        });
        res.json({ category })    
    } catch (error) {
        res.json(sendError(error)) 
    }
}