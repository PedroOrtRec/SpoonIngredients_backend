import { Sequelize } from 'sequelize';

const dbName = process.env.DB_NAME || 'default';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || '';
const dbHost = process.env.DB_HOST || '0.0.0.0';

const seqDb = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mysql',
})

export default seqDb;