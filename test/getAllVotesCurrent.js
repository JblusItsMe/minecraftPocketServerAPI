const API = require('./../src/index');
const api = new API('your-api-key');

api.getAllVotesCurrent().then(data => {
    console.log(data);
}).catch(error => {
    console.error(error.message);
});

// Result
/*
{
  name: 'Endiorite Network',
  address: 'play.endiorite.fr',
  port: '19132',
  month: '202309',
  voters: [
    { nickname: 'R11T17', votes: '2' },
    { nickname: 'mQC4867', votes: '1' },
    { nickname: 'I Sayko RL I', votes: '1' },
    { nickname: 'Deificwhell6260', votes: '1' },
    { nickname: 'Paulrffbnj', votes: '1' },
    { nickname: 'SunbakedBull916', votes: '1' },
    { nickname: 'Matthew le noob', votes: '1' },
    { nickname: 'PenduleLac6', votes: '1' },
    { nickname: 'Kassem0649', votes: '1' }
  ]
}
 */