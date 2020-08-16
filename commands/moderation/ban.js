const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'ban',
    category: 'moderation',
    description: 'Ban an user',
    aliases: [],
    usage: 'hey ban <mention the user you want to ban>',
    run: async(bot, message, args)=>{
        if (!message.member.hasPermission(['BAN_MEMBERS'])) return message.reply('Sorry! Your roles are too low to ban someone :(').then(message => message.delete({ timeout: 5000 }));
        if(!message.member.guild.me.hasPermission(['BAN_MEMBERS'])) return message.channel.send("I don\'t have the permission to \`BAN MEMBERS\`.\nPlease provide me the following permission to use this command")  
        const userb = message.mentions.users.first();
        if (!userb) return message.reply('You need to mention the user, whom you want to **ban**.\nEx: \`hey ban @the-user-you-want-to-ban\`').then(message => message.delete({ timeout: 6000 }));
        if(userb.id === message.author.id) return message.reply('Uh! You can\'t ban yourself, you know? :/', {
            allowedMentions: {
              parse: []
            }
          });
        else if (userb) {
            const memberb = message.guild.member(userb);
            let reason = args.slice(1).join(" ")
            if(!reason) reason = "No reason was provided"
            if (memberb) {
                memberb.ban(reason).then(() => {
                    let uban = new Discord.MessageEmbed()
                    uban.setAuthor("Ban command used by " + message.author.id, message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
                    uban.setDescription(`**${userb.tag}** was successfully banned from **${message.guild.name}** 🤕.\nReason for banning **${userb.tag}** : ${reason}`)
                    uban.setColor(0xf94343)
                    uban.setTimestamp(new Date())
                    uban.setFooter("Hiroko", bot.user.avatarURL())
                    message.channel.send(uban);
                    message.react('👍');
                }).catch(err => {
                    message.channel.send('Seems like, I was unable to ban that user. You can try again later')
                    message.react('👎');
                    console.log(err);
                });

            } else {
                message.reply("The user isn\'t in this server").then(message => message.delete({ timeout: 5000 }));
            }
        } else {
            message.reply('That user is not in the server :( ').then(message => message.delete({ timeout: 5000 }));
        }
    }
}