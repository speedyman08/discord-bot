import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { publishCommands } from "./publishCommands.js";
import { handleAc } from "./commands/ac.js";
dotenv.config();

const commands = [
  {
    name: "ac",
    description: "Air conditioner",
    type: 1,
    options: [
      {
        name: "switch",
        description: "on or off",
        type: 3,
        required: true,
        choices: [
          {
            name: "on",
            value: "ac_on",
          },
          {
            name: "off",
            value: "ac_off",
          },
        ],
      },
    ],
  },
];

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
