const Discord = require('discord.js');


exports.run = function(client, message) {
 
    const embed = new Discord.RichEmbed()
        .setDescription("**NosP**")
        .setImage("https://hizliresim.com/9Nlo68")
        .setThumbnail("https://hizliresim.com/9Nlo68")
        .setColor(0x00AE86)
        .addField("Lakabı", "NosP (NosP NoSpace Bosluk Yok Anlamına Gelir", true)
        .addField("Yetenekleri", `
        *Havanın hayatımızdaki en büyük rolünü
   *Anlatmaya gerek yok bence :D Discorddada bu geçerlidir ;)
   `, true)
   .addField("NosP Sahibi", `Batuhan Erova 27#3873`, true)
   .addField("Merhaba Ben Nosp", "Naber :D")
   

   message.channel.send(embed)
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'Nosp', 
  description: 'Nosp hakkında bilgi verir',
  usage: 'Nosp'
};