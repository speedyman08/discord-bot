import { Client, GatewayIntentBits} from "discord.js"
import dotenv from "dotenv"
import { publishCommands } from "./publishCommands.js";

dotenv.config();

const commands = [
    {
        name: "ping",
        description: "do i have to explain",
    }
]


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
})

const main = async () => {
    try {
        console.log("Application commands are being sent")
        publishCommands(commands, process.env.TOKEN, process.env.guildID, process.env.clientID)
        client.login(process.env.TOKEN)
        client.on('ready', (e) => {console.log(`${e.user.tag} is ready for use`)})
    } catch (err){
        console.log(err)
    }
}

client.on('interactionCreate', async (e) => {
    if (!e.isChatInputCommand) {
        return
    }
    if (e.commandName === "ping") {
        await e.reply("pong")
        console.log("Command executed")
    }
})
main();