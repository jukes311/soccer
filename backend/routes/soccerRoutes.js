import { 
    addNewPlayer, 
    getPlayers,
    getPlayersWithID,
    UpdatePlayer,
    deletePlayer
} from '../controllers/playerControllers';

const routes = (app) => {
    app.route('/players')
    // GET endpoint
    .get(getPlayers)

    // POST endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
        // Get specific player
        .get(getPlayersWithID)
        
        // Update a specific player
        .put(UpdatePlayer)
        
        // update a specific player
        .delete(deletePlayer);
}

export default routes;