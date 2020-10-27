const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'users',
    category: 'info',
    description: 'displays the number of users, Hiroko serves',
    aliases: [],
    usage: 'hey users',
    run: async(bot, message, args)=>{
        let em = new Discord.MessageEmbed()
        em.setColor(0x2f3136)
        em.setDescription(`Serving **${bot.users.cache.size}** users`)
        em.setTimestamp(new Date())
        em.setFooter("Hiroko", bot.user.avatarURL())
    return message.channel.send(em);
    }
}