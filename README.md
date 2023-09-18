
# MinecraftPocketServerAPI

The `minecraft-pocket-server-api` Node.js library is a powerful tool for both developers and Minecraft enthusiasts. It provides a simple and efficient way to obtain detailed information about a Minecraft Bedrock Edition server using only its IP address and port. With this library, you can access vital server statistics, player data, and more, making it an essential component for any Minecraft server monitoring or management system.

### Key Features:

**Server Information:** Retrieve essential details about the Minecraft Bedrock server, including its version, serverId, serverName, address, port, privateServer, password, location.

**Player Data:** Obtain the number of online players and the maximum number of players that the server can accommodate, enabling you to monitor player activity in real-time.

**Server Status**: Quickly check if the server is online and responsive, helping you ensure the availability of your Minecraft world.

**Server Votes**: Get a complete list of people who voted for your server.

---
[Apache License](https://github.com/JblusItsMe/minecraftPocketServerAPI/blob/main/LICENSE)


## Documentation
```javascript
const API = require('minecraft-pocket-server-api');
const api = new API('your-api-key');
```
[Read our full documentation](https://github.com/JblusItsMe/minecraftPocketServerAPI/wiki)


## Installation

Install with npm

```bash
  npm install minecraft-pocket-server-api
```

## API Reference

#### Get all data

```http
  .getAll(){}
  .getAllVotes(){}
  .getAllVotesPrevious(){}
  .getAllVotesCurrent(){}
```

#### Get item

```http
  .getVotes(){}
  .getVotersPrevious(){}
  .getVotersCurrent(){}
  .getId(){}
  .getName(){}
  .getAddress(){}
  .getPort(){}
  .isPrivate(){}
  .getPassword(){}
  .getLocation(){}
  .getHostName(){}
  .isOnline(){}
  .getPlayers(){}
  .getMaxPlayers(){}
  .getVersion(){}
  .getPlatform(){}
  .getUptime(){}
  .getScore(){}
  .getRank(){}
  .getVoteCount(){}
  .getFavorited(){}
  .getComments(){}
```


## Demo

[Test folder](https://github.com/JblusItsMe/minecraftPocketServerAPI/tree/main/test)

