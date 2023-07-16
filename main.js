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
        console.log("Refreshing application")
        publishCommands(commands, process.env.TOKEN, process.env.guildID, process.env.clientID)
        client.login(process.env.TOKEN)
        client.on('ready', (e) => {console.log(`${e.user.tag} is ready for use`)})
    } catch (err){
        console.log(err)
    }
}


let res;
client.on('interactionCreate', async (e) => {
    if (!e.isChatInputCommand) {
        return
    }
    switch (e.options.get('switch').value) {
        case "ac_on":
            res = await fetch("http://10.50.0.111:5000/homekit/ac-cool-25c-60min")
            .then(r=>r.json())
            .then(r=>e.reply(`Success: ${r.result ? ":white_check_mark: " : ":x:"}\nApi Response: ${JSON.stringify(r)}`))
            .catch(err => e.reply("Failed to get response from server")) 
            break
        case "ac_off": 
            res = await fetch("http://10.50.0.111:5000/homekit/ac-off")
            .then(r=>r.json())
            .then(r=>e.reply(`Success: ${r.result ? ":white_check_mark: " : ":x:"}\nApi Response: ${JSON.stringify(r)}`))
            .catch(err => e.reply("Failed to get response from server")) 
            break
    }       
})
main();

