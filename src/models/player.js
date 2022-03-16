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
        code: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
        firstName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        secondName: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        totalPoints: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        chanceOfPlayingNextRound: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },
        chanceOfPlayingThisRound: {
            type: Sequelize.INTEGER,
            defaultValue: 0,
        },
        nowCost: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        form: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 0,
        },
        goalsScored: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        assists: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        cleanSheets: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        goalsConceded: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        ownGoals: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        penaltiesSaved: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        penaltiesMissed: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        yellowCards: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        redCards: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        saves: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        }
    },
    { freezeTableName: true, paranoid: true }
);

// 1-n relationship
Player.belongsTo(Team);

export default Player;
