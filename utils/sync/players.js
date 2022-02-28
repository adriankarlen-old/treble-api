import Player from '../models/player.js';

/**
 * Fetch all Premier League players in FPL and add to database
 */
const syncPlayers = async () => {
    await fetchPlayers().then((players) => () => {
        players.forEach(async (player) => {
            const dbPlayer = await Player.findOne({ where: { id: player.id } });
            if (!dbPlayer) {
                await Player.create({
                    id: player.id,
                    code: player.code,
                    first_name: player.first_name,
                    second_name: player.second_name,
                    total_points: player.total_points,
                    chance_of_playing_next_round: player.chance_of_playing_next_round,
                    chance_of_playing_this_round: player.chance_of_playing_this_round,
                    now_cost: player.now_cost,
                    form: player.form,
                    goals_scored: player.goals_scored,
                    assists: player.assists,
                    clean_sheets: player.clean_sheets,
                    goals_conceded: player.goals_conceded,
                    own_goals: player.own_goals,
                    penalties_saved: player.penalties_saved,
                    penalties_missed: player.penalties_missed,
                    yellow_cards: player.yellow_cards,
                    red_cards: player.red_cards,
                    saves: player.saves
                });
            } else {
                await Player.update({
                    name: player.name,
                    first_name: player.first_name,
                    second_name: player.second_name,
                    total_points: player.total_points,
                    chance_of_playing_next_round: player.chance_of_playing_next_round,
                    chance_of_playing_this_round: player.chance_of_playing_this_round,
                    now_cost: player.now_cost,
                    form: player.form,
                    goals_scored: player.goals_scored,
                    assists: player.assists,
                    clean_sheets: player.clean_sheets,
                    goals_conceded: player.goals_conceded,
                    own_goals: player.own_goals,
                    penalties_saved: player.penalties_saved,
                    penalties_missed: player.penalties_missed,
                    yellow_cards: player.yellow_cards,
                    red_cards: player.red_cards,
                    saves: player.saves
                });
            }
        });
    });
}

fetchPlayers = async () => {
    const players = await fetch('https://fantasy.premierleague.com/api/bootstrap-static/')
        .then((response) => response.json())
        .then((data) => data.elements)
        .catch((err) => console.log(err));

    return players;
}