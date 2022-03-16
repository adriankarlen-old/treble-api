import { Sequelize } from 'sequelize';
import sequelize from '../utils/database.js';

const Team = sequelize.define(
    'teams',
    {
        id: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        code: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        shortName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        form: {
            type: Sequelize.INTEGER
        },
        strength: {
            type: Sequelize.INTEGER
        }
    },
    { freezeTableName: true, paranoid: true }
);

export default Team;
