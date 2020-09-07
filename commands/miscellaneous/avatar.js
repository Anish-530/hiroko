const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'avatar',
    category: 'miscellaneous',
    description: 'Display your avatar or the avatar of an user',
    aliases: ['av'],
    usage: 'hey avatar [mention someone]',
    run: async(bot, message, args)=>{
        try{
        const memberr = message.mentions.users.first() || message.author || message.guild.users.cache.get(args[0]);
        let em = new MessageEmbed()
        em.setImage(memberr.displayAvatarURL({ dynamic: true, format: 'png', size: 512 }))
        em.setColor(0x2f3136)
        em.addField(message.guild.members.cache.get(memberr.id).displayName + '\'s Avatar', [
            `**❯** [Link to ${message.guild.members.cache.get(memberr.id).displayName}'s avatar](${memberr.displayAvatarURL({ dynamic: true })})`
        ])
        em.setFooter(`Oh! Btw Nice pfp! ngl 😏`)
        message.channel.send(em);
    }catch(err){
        return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
      }
    }
}
