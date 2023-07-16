import { EmbedBuilder } from "discord.js";
export const handleAc = async (e) => {
  let res;
  let embed;
  const urlOff = "http://10.50.0.111:500/homekit/ac-off"  
  if (process.env.whitelist.includes(e.user.id)) {
  switch (e.commandName) {
    case "ac-on":
        res = await fetch(`http://10.50.0.111:5000/homekit/ac-${e.options.get("mode").value}-${e.options.get("temperature").value}-${e.options.get("time").value}min`)
              .then((r) => r.json())
              .then((r) =>{
                embed = new EmbedBuilder()
                .setTitle(`${r.result ? ":white_check_mark: Success": ":x: Fail"}`)
                .setDescription(`${r.result ? `AC turned on for ${e.options.get("time").value} minutes` : ""}`)
                .setColor(`${r.result ? "Green":"Red"}`)
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
            break
    case "ac-off" : 
    
      res = await fetch(urlOff)
              .then((r) => r.json())
              .then((r) =>{
                embed = new EmbedBuilder()
                .setTitle(`${r.result ? ":white_check_mark: Success": ":x: Fail"}`)
                .setDescription(`${r.result ? "AC turned off" : ""}`)
                .setColor(`${r.result ? "Green":"Red"}`)
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
    embed = new EmbedBuilder()
      .setTitle(":x:  Not whitelisted")
      .setColor("Red")
      e.reply({embeds: [embed]})
  }
}