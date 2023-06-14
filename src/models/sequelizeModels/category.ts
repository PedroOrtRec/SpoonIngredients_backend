import { DataTypes } from "sequelize";
import db from "../../config/database/seq.connection";

const Category = db.define('Categories', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    }
},{
    timestamps: false
});

export default Category;