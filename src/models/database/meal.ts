import { DataTypes } from "sequelize";
import db from "../../config/database/connection";

const Meal = db.define('Meal', {
    name: {
        type: DataTypes.STRING
    },
    nombre: {
        type: DataTypes.STRING
    },
    nom: {
        type: DataTypes.STRING
    },
    info: {
        type: DataTypes.STRING
    },
    img: {
        type: DataTypes.STRING
    },
    calories: {
        type: DataTypes.NUMBER
    },
    vegan: {
        type: DataTypes.BOOLEAN
    }
});

export default Meal;