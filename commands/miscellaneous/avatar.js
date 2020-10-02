const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'avatar',
    category: 'miscellaneous',
    description: 'Display your avatar or the avatar of an user',
    aliases: ['av'],
    usage: 'hey avatar [mention someone or use their ID]',
    run: async(bot, message, args)=>{
        try{
        const mentionedddMember11 = message.mentions.users.first() || message.guild.members.cache.get(args[0]) || message.author;
        const member = message.guild.member(mentionedddMember11);
        var guildID = bot.guilds.cache.get(message.guild.id).id;
        let em = new MessageEmbed()
        em.setImage(bot.guilds.resolve(guildID).members.resolve(mentionedddMember11).user.avatarURL({ dynamic: true, format: 'png', size: 512 }))
        em.setColor(0x2f3136)
        em.addField(message.guild.members.cache.get(member.id).displayName + '\'s Avatar', [
            `**❯** [Link to ${message.guild.members.cache.get(member.id).displayName}'s avatar](${bot.guilds.resolve(guildID).members.resolve(mentionedddMember11).user.avatarURL({ dynamic: true, format: 'png', size: 512 })})`
        ])
        em.setFooter(`Oh! Btw Nice pfp! ngl 😏`)
        message.channel.send(em);
    }catch(err){
        console.log(err)
        if(err) return message.channel.send('I was unable to find that member :(');
    }
    }
}