const { MessageEmbed } = require("discord.js");

  const prefix = ("P");
  

module.exports = {
  name: "help",
  aliases: ["h"],
  description: "Display all commands and descriptions",
  cooldown: 3,
  edesc: "Type help to get a short preview of all Commands, Type help <COMMANDNAME> to get extended information about this one command!",
  execute(message) {
    let commands = message.client.commands.array();
     
    let helpEmbed = new MessageEmbed()
    .setFooter(message.author.username, message.author.displayAvatarURL)
    .setColor('RANDOM')
    .setTitle("Help Command")
    .setImage("https://cdn.discordapp.com/attachments/806536956737355788/810923065092472843/20-17-22-7d20.gif")
    .setDescription(`[  Support  ](https://discord.gg/DHySR7jxrB) - [  Invite  ](https://discord.com/api/oauth2/authorize?client_id=912442458409943091&permissions=8&scope=bot)

\`prefix\` : \`m!\`


🎶__Music Command__
\`filter(fi)\`  -  \`loop(l)\`
\`lyrics(ly)\`  -  \`np\`
\`pause\`  -  \`play(p)\`
\`queue(qu)\`  -  \`radio\`
\`remove\`  -  \`resume(r)\`
\`search\`  -  \`shuffle(mix)\`
\`skip(s)\`  -  \`skipto(st)\`
\`stop\`  -  \`volume(vol)\`


`)
    
       

    helpEmbed.setTimestamp();

    return message.channel.send(helpEmbed).catch(console.error);
  }
};
