const API = require('./../src/index');
const api = new API('your-api-key');

api.getAllVotesPrevious().then(data => {
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
  month: '202308',
  voters: [
    { nickname: 'R11T17', votes: '12' },
    { nickname: 'Eyzox8486', votes: '4' },
    { nickname: 'Laboitejaune', votes: '2' },
    { nickname: 'abou592', votes: '2' },
    { nickname: '_DUPERRIER', votes: '2' },
    { nickname: 'Naruto22201', votes: '2' },
    { nickname: 'AltoCoyote47483', votes: '2' },
    { nickname: 'PoorlyLocket147', votes: '2' },
    { nickname: 'AIM Power G', votes: '2' },
    { nickname: 'Ayoubdgr59', votes: '1' },
    { nickname: 'AmiMiroir735103', votes: '1' },
    { nickname: 'Elmouzberto2', votes: '1' },
    { nickname: 'Suboza', votes: '1' },
    { nickname: 'Naruto9741092', votes: '1' },
    { nickname: 'RosePath9974', votes: '1' },
    { nickname: 'frxzeus', votes: '1' },
    { nickname: 'NocturnTrix', votes: '1' },
    { nickname: 'cFinSilas25', votes: '1' },
    { nickname: 'Kevinsamyhog', votes: '1' },
    { nickname: 'MaraisTarte6', votes: '1' },
    { nickname: 'Rayzoxx1827', votes: '1' },
    { nickname: 'DivinPanda59', votes: '1' },
    { nickname: 'Abcdefg5083', votes: '1' },
    { nickname: 'OrPin5913', votes: '1' },
    { nickname: 'xBENJY3772', votes: '1' },
    { nickname: 'UpstageSiren865', votes: '1' },
    { nickname: 'Matheo1006', votes: '1' },
    { nickname: 'Lola20006671', votes: '1' },
    { nickname: 'joris lebest', votes: '1' },
    { nickname: 'Ezianni2412', votes: '1' },
    { nickname: 'Lespieddeboubou', votes: '1' },
    { nickname: 'JtezSurMc4243', votes: '1' },
    { nickname: 'CameleonMoka595', votes: '1' },
    { nickname: 'Rowatery', votes: '1' },
    { nickname: 'Aminelechomeur5', votes: '1' },
    { nickname: 'PlutoPumpYTB', votes: '1' },
    { nickname: 'killuazoldyc991', votes: '1' },
    { nickname: 'Sbouby76', votes: '1' },
    { nickname: 'SamuelJessy', votes: '1' },
    { nickname: 'anaking3167', votes: '1' },
    { nickname: 'Ourszazouille', votes: '1' },
    { nickname: 'Kassem0649', votes: '1' },
    { nickname: 'spector2089', votes: '1' },
    { nickname: 'JulienB1233YT', votes: '1' },
    { nickname: 'Zertax45260', votes: '1' },
    { nickname: 'Keftozer', votes: '1' },
    { nickname: 'StuffierBike582', votes: '1' },
    { nickname: 'ModoPlutonium', votes: '1' },
    { nickname: 'Abcde1235935', votes: '1' },
    { nickname: 'Agedsun36248237', votes: '1' },
    { nickname: 'Framinator4637', votes: '1' },
    { nickname: 'Smaillor5269', votes: '1' },
    { nickname: 'Sniper8356', votes: '1' },
    { nickname: 'AnotherBike636', votes: '1' },
    { nickname: 'PairedStorm6213', votes: '1' },
    { nickname: 'Thatmemegood', votes: '1' },
    { nickname: 'XloriaxX', votes: '1' },
    { nickname: 'sirimatthis3', votes: '1' },
    { nickname: 'Azunie2', votes: '1' },
    { nickname: 'Fazerdrift12345', votes: '1' },
    { nickname: 'entity3039619', votes: '1' },
    { nickname: 'AtoX6636', votes: '1' },
    { nickname: 'I72victorI', votes: '1' },
    { nickname: 'Pumpkinjtm2', votes: '1' },
    { nickname: 'Naruto222901', votes: '1' },
    { nickname: 'ZephyrQc9745', votes: '1' }
  ]
}
 */