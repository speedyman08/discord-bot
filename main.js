import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { publishCommands } from "./commands/publishCommands.js";
import { handleAc } from "./commands/ac.js"
import { commands } from "./commands/commands.js";
dotenv.config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const main = async () => {
  try {
    console.log("Refreshing application");
    publishCommands(
      commands,
      process.env.TOKEN,
      process.env.guildID,
      process.env.clientID
    );
    client.login(process.env.TOKEN);
    client.on("ready", (e) => {
      console.log(`${e.user.tag} is ready for use`);
    });
  } catch (err) {
    console.log(err);
  }
};


client.on("interactionCreate", async (e) => {
  if (!e.isChatInputCommand) {
    return;
  }
    handleAc(e);
});
main();
