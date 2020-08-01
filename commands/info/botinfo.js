const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'botinfo',
    category: 'info',
    description: 'displays information about the bot',
    aliases: ['bot'],
    usage: 'hey bot',
    run: async(bot, message, args)=>{
        let ts = (bot.uptime / 1000);
        let d = Math.floor(ts / 86400);
        let h = Math.floor(ts / 3600);
        ts %= 3600;
        let m = Math.floor(ts / 60);
        let s = Math.floor(ts % 60);
        let up = `**${d}** *day(s)*, **${h}** *hour(s)*, **${m}** *minute(s)* and **${s}** *second(s)*`;
        let inf = new Discord.MessageEmbed()
        inf.setTitle(`\n\n💥**INFORMATION ABOUT HIROKO**💥`)
        inf.setDescription("**🤖Developer** : `ANISH` "+ ` <@${671355502399193128}>\n\n`+`**🟢Online on Total servers : ${bot.guilds.cache.size}\n\n🎧Listening to Total Users : ${bot.users.cache.size}\n\n📅Bot created on : 3rd May, on 6th of Friday, 2020\n\n🔼Bot-Uptime : ${up}**`)
        inf.setThumbnail(bot.user.avatarURL())
        inf.setTimestamp(new Date())
        inf.setColor(0x2f3136)
        inf.setFooter("Hiroko")
        message.channel.send(inf);
    }
}