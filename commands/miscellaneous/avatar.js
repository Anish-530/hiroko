const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'avatar',
    category: 'miscellaneous',
    description: 'Display your avatar or the avatar of an user',
    aliases: ['av'],
    usage: 'hey avatar [mention someone]',
    run: async(bot, message, args)=>{
        const memberr = message.mentions.users.first() || message.author;
        let em = new MessageEmbed()
        em.setImage(memberr.displayAvatarURL({ dynamic: true, format: 'png', size: 512 }))
        em.setColor(0x2f3136)
        em.addField(memberr.username + '\'s Avatar', [
            `**<a:right:733770305599701003> ** [Link to ${memberr.username}'s avatar](${memberr.displayAvatarURL({ dynamic: true })})`
        ])
        em.setFooter(`Oh! Btw Nice pfp! ngl 😏`)
        message.channel.send(em);
    }
}