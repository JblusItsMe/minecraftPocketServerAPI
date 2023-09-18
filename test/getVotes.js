const API = require('./../src/index');
const api = new API('your-api-key');

(async () => {
    try {
        const votes = await api.getVotes();
        console.log('Server votes:');
        votes.forEach(vote => {
            console.log(' - Username: ' + vote.nickname);
            console.log('   Date: ' + vote.data);
            console.log('   Timestamp: ' + vote.timestamp);
            console.log('   Steamid: ' + vote.steamid);
            console.log('   Claimed: ' + vote.claimed);
            console.log('\n ');
        });
    } catch(error) {
        console.error(error.message);
    }
})();

// Result:
/*
Server votes:
 - Username: Kassem0649
   Date: undefined
   Timestamp: 1694849866
   Steamid:
   Claimed: 0


 - Username: PenduleLac6
   Date: undefined
   Timestamp: 1694655626
   Steamid:
   Claimed: 0


 - Username: Matthew le noob
   Date: undefined
   Timestamp: 1694604414
   Steamid:
   Claimed: 0


 - Username: R11T17
   Date: undefined
   Timestamp: 1694478202
   Steamid:
   Claimed: 0


 - Username: SunbakedBull916
   Date: undefined
   Timestamp: 1694181967
   Steamid:
   Claimed: 0


 - Username: Paulrffbnj
   Date: undefined
   Timestamp: 1693985897
   Steamid:
   Claimed: 0


 - Username: R11T17
   Date: undefined
   Timestamp: 1693960309
   Steamid:
   Claimed: 0


 - Username: Deificwhell6260
   Date: undefined
   Timestamp: 1693818835
   Steamid:
   Claimed: 0


 - Username: I Sayko RL I
   Date: undefined
   Timestamp: 1693767238
   Steamid:
   Claimed: 0


 - Username: mQC4867
   Date: undefined
   Timestamp: 1693755784
   Steamid:
   Claimed: 0

 */