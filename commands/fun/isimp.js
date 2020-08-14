const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'isimp',
    category: 'fun',
    description: 'Simp for someone',
    aliases: [],
    usage: 'hey isimp [mention someone]',
    run: async(bot, message, args)=>{
        let embb = new Discord.MessageEmbed()
        const mentioneddMember = message.mentions.members.first()
        if (!mentioneddMember) return message.reply("I couldn\'t find the member you simp for. Sorry :(").then(message => message.delete({ timeout: 2000 }));
        if (mentioneddMember === message.guild.me) return message.reply("You sure you simp for me? ummmm.....Alright then...")
        if (mentioneddMember.id === message.author.id) return message.reply("Who the hell simps for themselves?")
        if (mentioneddMember) {
            embb.setAuthor(`${message.author.username}`, message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
            embb.setThumbnail(mentioneddMember.user.displayAvatarURL({ dynamic: true, format: 'png' }))
            embb.setColor(0xffa500)
            embb.setDescription(`
**simps for** ${mentioneddMember.user.username}`)
        }
        message.channel.send(embb, {
            allowedMentions: {
              parse: []
            }
          });
    }
}