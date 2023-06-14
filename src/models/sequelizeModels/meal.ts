import { DataTypes } from "sequelize";
import db from "../../config/database/seq.connection";
import Category from "./category";

const Meal = db.define('Meals', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
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
},{
    timestamps: false
}
);

Meal.belongsTo(Category, {
    foreignKey: 'category_id'
});

export default Meal;