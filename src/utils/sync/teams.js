import Team from '../../models/team.js';
import fetch from 'node-fetch';

/**
 * Fetch all teams in FPL and add to database
 */
const syncTeams = async () => {
    console.log('Syncing teams...');
    await fetchTeams().then((teams) => {
        if (teams) {
            teams.forEach(async (team) => {
                const dbTeam = await Team.findOne({ where: { code: team.code } });
                if (!dbTeam) {
                    await Team.create({
                        id: team.id,
                        code: team.code,
                        name: team.name,
                        shortName: team.short_name,
                        form: team.form,
                        strength: team.strength
                    });
                } else {
                    await Team.update({
                        name: team.name,
                        shortName: team.short_name,
                        form: team.form,
                        strength: team.strength
                    });
                }
            });
        }
    });
};

const fetchTeams = async () => {
    const teams = await fetch('https://fantasy.premierleague.com/api/bootstrap-static/')
        .then((response) => response.json())
        .then((data) => data.teams)
        .catch((err) => console.log(err));

    return teams;
};

export default syncTeams;
