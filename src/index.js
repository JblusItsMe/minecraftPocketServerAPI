class MinecraftPocketServer {

    constructor(apiKey) {
        this.apiKey = apiKey;
        this.baseUrl = 'https://minecraftpocket-servers.com/api/?object=servers&key=' + this.apiKey;
    }

    fetchData(endpoint, params = {}) {
        const url = `${this.baseUrl}&element=${endpoint}&format=json&${new URLSearchParams(params).toString()}`;
        return new Promise((resolve, reject) => {
            fetch(url).then(response => {
                if(!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            }) .then(data => {
                resolve(data);
            }).catch(error => {
                reject(new Error('There was an error retrieving data: ' + error));
            });
        });
    }

    getAll() {
        return this.fetchData('detail');
    }

    getAllVotes() {
        return this.fetchData('votes');
    }

    getAllVotesPrevious() {
        return this.fetchData('voters', { month: 'previous' });
    }

    getAllVotesCurrent() {
        return this.fetchData('voters', { month: 'current' });
    }

    getVotes() {
        return this.getAllVotes().then(data => data.votes);
    }

    getVotersPrevious() {
        return this.getAllVotesPrevious().then(data => data.voters);
    }

    getVotersCurrent() {
        return this.getAllVotesCurrent().then(data => data.voters);
    }

    getId() {
        return this.getAll().then(data => data.id);
    }

    getName() {
        return this.getAll().then(data => data.name);
    }

    getAddress() {
        return this.getAll().then(data => data.address);
    }

    getPort() {
        return this.getAll().then(data => data.port);
    }

    isPrivate() {
        return this.getAll().then(data => data.private);
    }

    getPassword() {
        return this.getAll().then(data => data.password);
    }

    getLocation() {
        return this.getAll().then(data => data.location);
    }

    getHostName() {
        return this.getAll().then(data => data.hostname);
    }

    isOnline() {
        return this.getAll().then(data => data.is_online);
    }

    getPlayers() {
        return this.getAll().then(data => data.players);
    }

    getMaxPlayers() {
        return this.getAll().then(data => data.maxplayers);
    }

    getVersion() {
        return this.getAll().then(data => data.version);
    }

    getPlatform() {
        return this.getAll().then(data => data.platform);
    }

    getUptime() {
        return this.getAll().then(data => data.uptime);
    }

    getScore() {
        return this.getAll().then(data => data.score);
    }

    getRank() {
        return this.getAll().then(data => data.rank);
    }

    getVoteCount() {
        return this.getAll().then(data => data.votes);
    }

    getFavorited() {
        return this.getAll().then(data => data.favorited);
    }

    getComments() {
        return this.getAll().then(data => data.comments);
    }

}

module.exports = MinecraftPocketServer;