const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'botinvite',
    category: 'info',
    description: 'Gives you the Hiroko\'s invite Link, to invite it to other servers',
    aliases: ['botinv', 'botlink'],
    usage: 'hey botinvite',
    run: async(bot, message, args)=>{
        const inv = new Discord.MessageEmbed()
        inv.setThumbnail(bot.user.avatarURL())
        inv.addField('Invite me', 
        `**<a:right:733770305599701003> :** [My invite link](https://discordapp.com/oauth2/authorize?client_id=722729985512833076&scope=bot&permissions=1584917759)`)
        return message.channel.send(inv);
    }
}