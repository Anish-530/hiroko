const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'info',
    category: 'info',
    description: 'displays information about the bot',
    aliases: ['bot','botinfo'],
    usage: 'hey info',
    run: async(bot, message, args)=>{
        const embed = new MessageEmbed()
        .setThumbnail(message.guild.iconURL({ dynamic: true, format: 'png' }))
        .setAuthor(`${bot.user.username} (v6.8.0)`, bot.user.displayAvatarURL())
        .setColor(0x2f3136)
        .addField(`Information about ${bot.user.username}`, [
            `❯ [Invite Link](https://discordapp.com/oauth2/authorize?client_id=722729985512833076&scope=bot&permissions=1584917759)
             ❯ [Support Server](https://discord.gg/ZKfWu4H)
             ❯ [Patreon](https://www.patreon.com/LynxAwish)
             ❯ [Official Website](https://heyhiroko.glitch.me/)`
        ])
        .setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed);
    }
}