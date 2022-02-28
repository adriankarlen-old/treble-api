import Team from '../models/team.js';

/**
 * Fetch all teams in FPL and add to database
 */
const syncTeams = async () => {
    await fetchTeams().then((teams) => () => {
        teams.forEach(async (team) => {
            const dbTeam = await Team.findOne({ where: { code: team.code } });
            if (!dbTeam) {
                await Team.create({
                    code: team.code,
                    name: team.name,
                    short_name: team.short_name,
                    strength: team.strength,
                    form: team.form,
                });
            } else {
                await Team.update({
                    name: team.name,
                    short_name: team.short_name,
                    strength: team.strength,
                    form: team.form,
                });
            }
        });
    });
};

const fetchTeams = async () => {
    const teams = await fetch('https://fantasy.premierleague.com/api/bootstrap-static/')
        .then((response) => response.json())
        .then((data) => data.teams)
        .catch((err) => console.log(err));

    return teams;
};
