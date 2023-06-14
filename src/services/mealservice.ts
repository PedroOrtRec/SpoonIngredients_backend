import Category from '../models/sequelizeModels/category';
import Meal from "../models/sequelizeModels/meal";
import { InterfaceMeal } from '../models/interfaces/meals';

class MealService {

    constructor(){}

    static create( body: {} ){
        return Meal.create( body )
    }

    static readAll(){
        return Meal.findAll( { include: { model: Category } } )
    }

    static readOne( id: string ){
        return Meal.findByPk( id, { include: Category } )
    }

    static readByCategory( category: string ){
        return Meal.findAll({include: { model: Category, where: { '$Category.name$': category } }})
    }

    static update( id: string, body: {}){
        return Meal.update( body, { where: { id } })
    }

    static delete( id: string ){
        return Meal.destroy( { where: { id } })
    }



    
}

export default MealService;