import { DataTypes } from "sequelize";
import db from "../../config/database/seq.connection";

const Micronutrient = db.define('Micronutrients', {
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

export default Micronutrient;