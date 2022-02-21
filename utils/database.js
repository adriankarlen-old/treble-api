import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('treble', 'root', '', {
    dialect: 'mysql',
    host: 'localhost', 
});

export default sequelize;