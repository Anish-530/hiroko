const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'snipe',
    category: 'miscellaneous',
    description: 'Snipes a deleted message',
    aliases: ['s','catch'],
    usage: 'hey snipe',
    run: async(bot, message, args)=>{
        const msg = bot.snipes.get(message.channel.id)
        if(!msg) return message.channel.send("I see, There are no messages currently deleted")
        const sni = new MessageEmbed()
        sni.setAuthor(`Deleted by ${msg.author.tag}`, msg.author.displayAvatarURL({ dynamic: true, size: 256 }))
        sni.setColor(0x2f3136)
        sni.setDescription(msg.content)
        sni.setTimestamp(new Date())
        if(msg.image) return message.channel.send("I see, There are no messages currently deleted")
        message.channel.send(sni)
    }
}