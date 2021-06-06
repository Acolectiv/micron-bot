if (Number(process.version.slice(1).split(".")[0]) < 12) throw new Error("Node 12.0.0 or higher is required. You need to update your Node.js to the required release, or a newer one.");

const { Client, Collection } = require("discord.js");
const client = new Client();

client.commands = new Collection();
client.aliases = new Collection();
client.config = require("./config");

["aliases", "commands"].forEach(x => (client[x] = new Collection()));

// Loading handlers
["command", "event"].forEach(handler => {
    require(`./handlers/${handler}`)(client);
});

client.login(client.config.bot_token).then(() => {
    console.log(`we're online`)
});