import { Client, GatewayIntentBits} from "discord.js"
import dotenv from "dotenv"
import { publishCommands } from "./publishCommands.js";

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
                        value: "ac_on"
                    },
                    {
                        name: "off",
                        value: "ac_off"
                    }
                ]
            }
        ]
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
    switch (e.options.get('switch').value) {
        case "ac_on": 
            fetch("http://10.50.0.111:5000/homekit/ac-cool-25c-60min")
            console.log("AC on")
            e.reply("AC on")
            break
        case "ac_off": 
            fetch("http://10.50.0.111:5000/homekit/ac-off")
            console.log("AC off")
            e.reply("AC off")
            break
    }
})
main();