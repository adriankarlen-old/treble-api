import Player from '../../models/player.js';
import fetch from 'node-fetch';


/**
 * Fetch all Allsvenskan players and add to database
 */
const syncPlayersAllsvenskan = async () => {
    const players = await fetch('https://api.allsvenskan.se/api/players')
        .then(res => res.json())
        .then(json => json.data);
};

/**
 * Fetch all Premier League players in FPL and add to database
 */
const syncPlayers = async () => {
    await fetchPlayers().then((players) => {
        players.forEach(async (player) => {
            const dbPlayer = await Player.findOne({ where: { code: player.code } });
            if (!dbPlayer) {
                await Player.create({
                    id: player.id,
                    code: player.code,
                    firstName: player.first_name,
                    secondName: player.second_name,
                    totalPoints: player.total_points,
                    chanceOfPlayingNextRound: player.chance_of_playing_next_round,
                    chanceOfPlayingThisRound: player.chance_of_playing_this_round,
                    nowCost: player.now_cost,
                    form: player.form,
                    goalsScored: player.goals_scored,
                    assists: player.assists,
                    cleanSheets: player.clean_sheets,
                    goalsConceded: player.goals_conceded,
                    ownGoals: player.own_goals,
                    penaltiesSaved: player.penalties_saved,
                    penaltiesMissed: player.penalties_missed,
                    yellowCards: player.yellow_cards,
                    redCards: player.red_cards,
                    saves: player.saves,
                    teamId: player.team
                });
            } else {
                await Player.update({
                    name: player.name,
                    firstName: player.first_name,
                    secondName: player.second_name,
                    totalPoints: player.total_points,
                    chanceOfPlayingNextRound: player.chance_of_playing_next_round,
                    chanceOfPlayingThisRound: player.chance_of_playing_this_round,
                    nowCost: player.now_cost,
                    form: player.form,
                    goalsScored: player.goals_scored,
                    assists: player.assists,
                    cleanSheets: player.clean_sheets,
                    goalsConceded: player.goals_conceded,
                    ownGoals: player.own_goals,
                    penaltiesSaved: player.penalties_saved,
                    penaltiesMissed: player.penalties_missed,
                    yellowCards: player.yellow_cards,
                    redCards: player.red_cards,
                    saves: player.saves,
                    teamId: player.team
                });
            }
        });
    });
}

const fetchPlayers = async () => {
    const players = await fetch('https://fantasy.premierleague.com/api/bootstrap-static/')
        .then((response) => response.json())
        .then((data) => data.elements)
        .catch((err) => console.log(err));

    return players;
}

export default syncPlayers;