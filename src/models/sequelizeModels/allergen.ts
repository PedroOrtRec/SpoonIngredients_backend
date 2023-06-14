import { DataTypes } from "sequelize";
import db from "../../config/database/seq.connection";

const Allergen = db.define('Allergens', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
});

export default Allergen;