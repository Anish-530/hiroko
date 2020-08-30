const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'kick',
    category: 'moderation',
    description: 'Kick an user',
    aliases: [],
    usage: 'hey kick <mention the user you want to kick>',
    run: async(bot, message, args)=>{
        if (!message.member.hasPermission('KICK_MEMBERS')) return message.reply('Sorry! Your roles are too low to Kick someone :(').then(message => message.delete({ timeout: 2000 }));
        if(!message.member.guild.me.hasPermission(['KICK_MEMBERS'])) return message.channel.send("I don\'t have the permission to \`KICK MEMBERS\`.\nPlease provide me the following permission to use this command")
        if (!args[0]) return message.reply('You need to Mention whom you want to kick :) . Ex: hey kick @someone').then(message => message.delete({ timeout: 3000 }));

        const userf = message.mentions.users.first() || message.guild.members.cache.get(args[0]);
        if(userf.id === message.author.id) return message.reply('Uh! You can\'t kick yourself, you know? :/', {
            allowedMentions: {
              parse: []
            }
          });
        if (message.mentions.members.first() !== undefined) {
            if (message.mentions.members.first().id === bot.user.id) return message.channel.send("Why do you want to kick me 😶?") 
        }
        if (userf) {
            const member = message.guild.member(userf);
            let reon = args.slice(1).join(" ")
            if(!reon) reon = "No reason was provided"
            if (member) {
                member.kick(reon).then(() => {
                    const kickem = new Discord.MessageEmbed()
                    kickem.setAuthor("Kick command used by " + message.guild.members.cache.get(message.author.id).displayName, message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
                    kickem.setDescription(`**${userf.tag}** was successfully kicked from **${message.guild.name}** 😶.\nReason for kick : **${reon}**`)
                    kickem.setColor(0xf94343)
                    kickem.setTimestamp(new Date())
                    kickem.setFooter("Hiroko", bot.user.avatarURL())
                    message.channel.send(kickem);
                    message.react('👍');
                }).catch(err => {
                    message.channel.send(`Looks like something wrong happened. You can try again later!`)
                    message.react('👎');
                    console.log(err);
                });

            } else {
                message.reply("The user isn\'t in this server").then(message => message.delete({ timeout: 2000 }));
            }
        } else {
            message.reply('That user is not in the server :( ').then(message => message.delete({ timeout: 2000 }));
        }
    }
}