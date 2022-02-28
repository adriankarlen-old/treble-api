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
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { freezeTableName: true, paranoid: true }
);

export default Team;
