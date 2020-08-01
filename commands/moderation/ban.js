const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'ban',
    category: 'moderation',
    description: 'Ban an user',
    aliases: [],
    usage: 'hey ban <mention the user you want to ban>',
    run: async(bot, message, args)=>{
        if (!message.member.hasPermission(['BAN_MEMBERS', 'ADMINISTRATOR'])) return message.reply('Sorry! Your roles are too low to ban someone :(').then(message => message.delete({ timeout: 5000 }));
                
        const userb = message.mentions.users.first();
        if (!userb) return message.reply('You need to mention whom you want to ban!. Ex: hey ban @Someone').then(message => message.delete({ timeout: 6000 }));
        else if (userb) {
            const memberb = message.guild.member(userb);
            if (memberb) {
                memberb.ban({ ression: 'You were banned!' }).then(() => {
                    let uban = new Discord.MessageEmbed()
                    uban.setAuthor("Command used by " + message.author.username, message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
                    uban.setDescription(`**${userb.tag}** was successfully banned from **${message.guild.name}** 🤕`)
                    uban.setColor(0xf94343)
                    uban.setTimestamp(new Date())
                    uban.setFooter("Hiroko", bot.user.avatarURL())
                    message.channel.send(uban);
                    message.react('👍');
                }).catch(err => {
                    message.reply('Hey! Sorry I was unable to ban the member')
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