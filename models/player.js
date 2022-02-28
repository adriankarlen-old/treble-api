import { Sequelize } from 'sequelize';

import sequelize from '../utils/database.js';

import Team from './team.js';

const Player = sequelize.define(
    'players',
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
        position: {
            type: Sequelize.STRING,
            allowNull: false,
        },
    },
    { freezeTableName: true, paranoid: true }
);

// 1-n relationship
Player.belongsTo(Team);

export default Player;
