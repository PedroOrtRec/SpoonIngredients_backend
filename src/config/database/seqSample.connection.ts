import { Sequelize } from 'sequelize';

const dbName = process.env.DB_NAME_SAMPLE || 'sample';
const dbUser = process.env.DB_USER || 'root';
const dbPassword = process.env.DB_PASSWORD || '';
const dbHost = process.env.DB_HOST || '0.0.0.0';

const seqSampleDb = new Sequelize(dbName, dbUser, dbPassword, {
    host: dbHost,
    dialect: 'mysql',
})

export default seqSampleDb;