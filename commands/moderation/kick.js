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

        const user = message.mentions.users.first();

        if (user) {
            const member = message.guild.member(user);

            if (member) {
                member.kick('You were kicked! :( ').then(() => {
                    message.reply(`Successfully Kicked ${user.tag}`).then(message => message.delete({ timeout: 3000 }));
                    message.react('👍');
                }).catch(err => {
                    message.reply('Hey! Sorry I was unable to kick the member')
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