const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'nick',
    category: 'guild',
    description: 'change the nickname of a member',
    aliases: ['rename'],
    usage: 'hey nick <mention someone> <the name>',
    run: async(bot, message, args)=>{
        let namer = args.slice(1).join(" ")
        if(!message.member.hasPermission("MANAGE_NICKNAMES")) return message.reply("Sorry, Your roles are too low to use this command :(");
        if(!message.member.guild.me.hasPermission("MANAGE_NICKNAMES")) return message.reply("I don't have the permission to change nicknames :(");
        if(!args[0]) return message.channel.send("Mention a user, who's nickname you want to be changed");
        const uuser = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
        if(uuser.id === message.author.id) return message.channel.send("You can change your name manually, you know?")
        else if(!uuser) return message.reply("I was unable to find that member!");
        else if(uuser === message.guild.me) return message.channel.send("Why are you trying to change my name ;-;");
        if(!namer) {
            return message.channel.send("What shall i name "+`${uuser} ?`, {
                allowedMentions: {
                  parse: []
                }
              });
        }
        if(!uuser.kickable) return message.channel.send('Looks like you are trying to change a member\'s, \nname whose role is either higher than you or you are equal to their role')
        uuser.setNickname(namer)
        await message.react('👍')
    }
}