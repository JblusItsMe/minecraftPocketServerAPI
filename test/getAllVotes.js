const API = require('./../src/index');
const api = new API('your-api-key');

api.getAllVotes().then(data => {
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
  'daily reset time': '06:00 AM CEST',
  votes: [
    {
      date: 'September 16th, 2023 08:37 AM EST',
      'date cest': 'September 16th, 2023 03:37 PM CEST',
      timestamp: 1694849866,
      'utc timestamp': '1694871466',
      nickname: 'Kassem0649',
      steamid: '',
      claimed: '0'
    },
    {
      date: 'September 14th, 2023 02:40 AM EST',
      'date cest': 'September 14th, 2023 09:40 AM CEST',
      timestamp: 1694655626,
      'utc timestamp': '1694677226',
      nickname: 'PenduleLac6',
      steamid: '',
      claimed: '0'
    },
    {
      date: 'September 13th, 2023 12:26 PM EST',
      'date cest': 'September 13th, 2023 07:26 PM CEST',
      timestamp: 1694604414,
      'utc timestamp': '1694626014',
      nickname: 'Matthew le noob',
      steamid: '',
      claimed: '0'
    },
    {
      date: 'September 12th, 2023 01:23 AM EST',
      'date cest': 'September 12th, 2023 08:23 AM CEST',
      timestamp: 1694478202,
      'utc timestamp': '1694499802',
      nickname: 'R11T17',
      steamid: '',
      claimed: '0'
    },
    {
      date: 'September 8th, 2023 03:06 PM EST',
      'date cest': 'September 8th, 2023 10:06 PM CEST',
      timestamp: 1694181967,
      'utc timestamp': '1694203567',
      nickname: 'SunbakedBull916',
      steamid: '',
      claimed: '0'
    },
    {
      date: 'September 6th, 2023 08:38 AM EST',
      'date cest': 'September 6th, 2023 03:38 PM CEST',
      timestamp: 1693985897,
      'utc timestamp': '1694007497',
      nickname: 'Paulrffbnj',
      steamid: '',
      claimed: '0'
    },
    {
      date: 'September 6th, 2023 01:31 AM EST',
      'date cest': 'September 6th, 2023 08:31 AM CEST',
      timestamp: 1693960309,
      'utc timestamp': '1693981909',
      nickname: 'R11T17',
      steamid: '',
      claimed: '0'
    },
    {
      date: 'September 4th, 2023 10:13 AM EST',
      'date cest': 'September 4th, 2023 05:13 PM CEST',
      timestamp: 1693818835,
      'utc timestamp': '1693840435',
      nickname: 'Deificwhell6260',
      steamid: '',
      claimed: '0'
    },
    {
      date: 'September 3rd, 2023 07:53 PM EST',
      'date cest': 'September 4th, 2023 02:53 AM CEST',
      timestamp: 1693767238,
      'utc timestamp': '1693788838',
      nickname: 'I Sayko RL I',
      steamid: '',
      claimed: '0'
    },
    {
      date: 'September 3rd, 2023 04:43 PM EST',
      'date cest': 'September 3rd, 2023 11:43 PM CEST',
      timestamp: 1693755784,
      'utc timestamp': '1693777384',
      nickname: 'mQC4867',
      steamid: '',
      claimed: '0'
    }
  ]
}

 */