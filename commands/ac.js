export const handleAc = async (e) => {
    let res;
    if (e.commandName === "ac" && process.env.whitelist.includes(e.user.id)) {
        switch (e.options.get("switch").value) {
          case "ac_on":
            res = await fetch("http://10.50.0.111:5000/homekit/ac-cool-25c-60min")
              .then((r) => r.json())
              .then((r) =>
                e.reply(
                  `Success: ${
                    r.result ? ":white_check_mark: " : ":x:"
                  }\nApi Response: ${JSON.stringify(r)}`
                )
              )
              .catch((err) =>
                e.reply(`Failed to get response from server\nError: ${err}`)
              );
            break;
          case "ac_off":
            res = await fetch("http://10.50.0.111:5000/homekit/ac-off")
              .then((r) => r.json())
              .then((r) =>
                e.reply(
                  `Success: ${
                    r.result ? ":white_check_mark: " : ":x:"
                  }\nApi Response: ${JSON.stringify(r)}`
                )
              )
              .catch((err) =>
                e.reply(`Failed to get response from server\nError: ${err}`)
              );
            break;
        }
      } else {
        e.reply("Not enough permissions to do this lol")
      }
}