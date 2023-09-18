const API = require('./../src/index');
const api = new API('your-api-key');

(async () => {
    try {
        console.log('Server id: ' + await api.getId());
        console.log('Server name: ' + await api.getName());
        console.log('Server address: ' + await api.getAddress());
        console.log('Server port: ' + await api.getPort());
        console.log('Server private: ' + await api.isPrivate());
        console.log('Server password: ' + await api.getPassword());
        console.log('Server location: ' + await api.getLocation());
        console.log('Server hostname: ' + await api.getHostName());
        console.log('Server is online? ' + await api.isOnline());
        console.log('Server player(s): ' + await api.getPlayers());
        console.log('Server max players: ' + await api.getMaxPlayers());
        console.log('Server version: ' + await api.getVersion());
        console.log('Server platform: ' + await api.getPlatform());
        console.log('Server uptime: ' + await api.getUptime());
        console.log('Server score: ' + await api.getScore());
        console.log('Server rank: ' + await api.getRank());
        console.log('Server vote count: ' + await api.getVoteCount());
        console.log('Server favorited: ' + await api.getFavorited());
        console.log('Server comments: ' + await api.getComments());
    } catch(error) {
        console.error(error.message);
    }
})();

// Result
/*
Server id: 120310
Server name: Endiorite Network
Server address: play.endiorite.fr
Server port: 19132
Server private: 0
Server password: 0
Server location: France
Server hostname: Endiorite V3.5
Server is online? 1
Server player(s): 6
Server max players: 500
Server version: 1.20.10
Server platform: null
Server uptime: 100
Server score: 22
Server rank: 291
Server vote count: 10
Server favorited: 0
Server comments: 0
 */