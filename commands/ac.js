import { EmbedBuilder } from "discord.js";
export const handleAc = async (e) => {
    let res;
    let embed;
    const url = "http://10.50.0.111:5000/homekit/ac-cool-25c-60min"
    if (e.commandName === "ac" && process.env.whitelist.includes(e.user.id)) {
        switch (e.options.get("switch").value) {
          case "ac_on":
            res = await fetch(url)
              .then((r) => r.json())
              .then((r) =>{
                embed = new EmbedBuilder()
                .setTitle(`${r.result ? ":white_check_mark: Success": ":x: Fail"}`)
                .setDescription(`${r.result ? "AC turned on" : ""}`)
                .setColor(`${r.result ? "Green":"Red"}`)
                console.log(embed)
                e.reply(
                {
                    embeds: [embed]
                }
                )
            })
              .catch(() =>{
                embed = new EmbedBuilder()
                .setTitle(":x: Failed to get response from API")
                .setColor("Red")
                e.reply({embeds: [embed]})
            });
            break;
          case "ac_off":
            res = await fetch(url)
              .then((r) => r.json())
              .then((r) =>{
                embed = new EmbedBuilder()
                .setTitle(`${r.result ? ":white_check_mark: Success": ":x: Fail"}`)
                .setDescription(`${r.result ? "AC turned off" : ""}`)
                .setColor(`${r.result ? "Green":"Red"}`)
                console.log(embed)
                e.reply(
                {
                    embeds: [embed]
                }
                )
            })
              .catch(() =>{
              embed = new EmbedBuilder()
              .setTitle(":x: Failed to get response from API")
              .setColor("Red")
              e.reply({embeds: [embed]})
            });
            break;
        }
      } else {
        e.reply("Not enough permissions to do this lol")
      }
}