const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'uptime',
    category: 'info',
    description: 'Check the uptime of the bot',
    aliases: ['ut'],
    usage: 'hey uptime',
    run: async(bot, message, args)=>{
        const nm = await message.channel.send("**Calculating....**")
        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let upime = `${days} day(s), ${hours} hour(s), ${minutes} minute(s) and ${seconds} second(s)`;
        let uy = "⏫ BOT-UPTIME : ";
        let upup = new Discord.MessageEmbed()
        upup.setColor(0x2f3136)
        upup.setDescription(`\`\`\`js\n${uy} ${upime}\`\`\``)
        return nm.edit("\t", upup)
    }
}