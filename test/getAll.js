const API = require('./../src/index');
const api = new API('your-api-key');

api.getAll().then(data => {
    console.log(data);
}).catch(error => {
    console.error(error.message);
});

// Result
/*
{
  id: '120310',
  name: 'Endiorite Network',
  address: 'play.endiorite.fr',
  port: '19132',
  private: '0',
  password: '0',
  location: 'France',
  hostname: 'Endiorite V3.5',
  is_online: '1',
  players: '6',
  maxplayers: '500',
  version: '1.20.10',
  platform: null,
  uptime: '100',
  score: '22',
  rank: '291',
  votes: '10',
  favorited: '0',
  comments: '0',
  url: 'https://minecraftpocket-servers.com/server/120310/',
  last_check: 'September 18th, 2023 12:30 PM EST',
  last_online: 'September 18th, 2023 12:30 PM EST'
}

 */