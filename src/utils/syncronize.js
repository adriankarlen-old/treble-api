import sequelize from '../utils/database.js';
import syncPlayers from './sync/players.js';
import syncTeams from './sync/teams.js';

sequelize.sync({ force: true }).then( async () => {
    await syncTeams();
    await syncPlayers();
});
