import { DataTypes } from "sequelize";
import db from "../../config/database/seq.connection";

const Macronutrient = db.define('Macronutrients', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

export default Macronutrient;