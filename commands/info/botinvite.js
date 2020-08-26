const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'botinvite',
    category: 'info',
    description: 'Provides you with Hiroko\'s invite link',
    aliases: ['botinv', 'botlink'],
    usage: 'hey botinvite',
    run: async(bot, message, args)=>{
        const inv = new Discord.MessageEmbed()
        inv.setThumbnail(bot.user.avatarURL())
        inv.setColor(0x2f3136)
        inv.addField('Invite me', 
        `**❯ :** [My invite link](https://discordapp.com/oauth2/authorize?client_id=722729985512833076&scope=bot&permissions=1584917759)`)
        return message.channel.send(inv);
    }
}