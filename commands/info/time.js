const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'time',
    category: 'info',
    description: 'Check the current time',
    aliases: [],
    usage: 'hey time',
    run: async(bot, message, args)=>{
        let time1 = new MessageEmbed()
        time1.setTimestamp("The current `Time` and `day` is **" + new Date() + "**")
        time1.setFooter("Requested By " + message.author.username, message.author.displayAvatarURL())
        message.channel.send(time1);
    }
}