import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    dialect: process.env.DB_DIALECT,
    host: process.env.DB_HOST, 
});

export default sequelize;