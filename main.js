import { Client, GatewayIntentBits } from "discord.js";
import dotenv from "dotenv";
import { publishCommands } from "./publishCommands.js";
import { handleAc } from "./commands/ac.js"
import { commands } from "./commands/commands.js";
dotenv.config();

// const commands = [
//   {
//     name: "ac",
//     description: "Air conditioner",
//     type: 1,
//     options: [
//       {
//         name: "switch",
//         description: "on or off",
//         type: 3,
//         required: true,
//         choices: [
//           {
//             name: "on",
//             value: "ac_on",
//           },
//           {
//             name: "off",
//             value: "ac_off",
//           },
//         ],
//       },
//       {
//         name: "temperature",
//         description: "AC temperature",
//         type: 3,
//         required: true,
//         choices: [
//           {
//             name: "16c",
//             value: "16c"
//           },
//           {
//             name: "17c",
//             value: "17c"
//           },
//           {
//             name: "18c",
//             value: "18c"
//           },
//           {
//             name: "19c",
//             value: "19c"
//           },
//           {
//             name: "20c",
//             value: "20c"
//           },
//           {
//             name: "21c",
//             value: "21c"
//           },
//           {
//             name: "22c",
//             value: "22c"
//           },
//           {
//             name: "23c",
//             value: "23c"
//           },
//           {
//             name: "25c",
//             value: "25c"
//           },
//           {
//             name: "26c",
//             value: "26c"
//           },
//           {
//             name: "27c",
//             value: "27c"
//           },
//           {
//             name: "28c",
//             value: "28c"
//           },
//           {
//             name: "29c",
//             value: "29c"
//           },
//           {
//             name: "30c",
//             value: "30c"
//           },
//           {
//             name: "31c",
//             value: "31c"
//           },
//         ]
//       }
//     ],
//   },
// ];

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
