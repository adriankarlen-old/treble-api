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
        first_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        second_name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        total_points: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        chance_of_playing_next_round: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        chance_of_playing_this_round: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        now_cost: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        form: {
            type: Sequelize.STRING,
            allowNull: false,
            defaultValue: 0,
        },
        goals_scored: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        assists: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        clean_sheets: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        goals_conceded: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        own_goals: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        penalties_saved: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        penalties_missed: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        yellow_cards: {
            type: Sequelize.INTEGER,
            allowNull: false,
            defaultValue: 0,
        },
        red_cards: {
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
