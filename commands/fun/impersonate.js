const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'impersonate',
    category: 'fun',
    description: 'Impersonate someone',
    aliases: ['im'],
    usage: 'hey impersonate <Mention someone or Use their ID> <message>',
    run: async(bot, message, args)=>{
        const mentionedddMember11 = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        const member = message.guild.member(mentionedddMember11);
        var guildID = bot.guilds.cache.get(message.guild.id).id;
        if(!member) return message.channel.send("Whom do you want to impersonate?\nYou can mention them, or you can use their ID.\nExample :- `hey impersonate 722729985512833076 <Your message>` OR\n`hey impersonate @Hiroko <Your message>`")
        const sad = args.slice(1).join(' ');
        try{
        let em = new Discord.MessageEmbed()
        em.setAuthor(`${message.guild.members.cache.get(member.id).displayName} Says...`, bot.guilds.resolve(guildID).members.resolve(mentionedddMember11).user.avatarURL({ dynamic: true, format: 'png' }))
        em.setColor(0x2f3136)
        em.setDescription(sad)
        message.channel.send(em)
        if(message.author.id === message.author.id){
            message.delete()
        }
    }catch(err){
        console.log(err)
        message.channel.send(`The Error is : ${err.message}`)
    }
    }
}