import { DataTypes } from "sequelize";
import db from "../../config/database/seq.connection";

const Moreinfo = db.define('Moreinfo', {
    name: {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
    },
    meal_id: {
        type: DataTypes.NUMBER,
    },
});

export default Moreinfo;