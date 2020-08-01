/*const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'finduser',
    category: 'fun',
    description: 'finds users with same name or a part of the arg you provided in their name',
    aliases: ['fu', 'u', 'find'],
    run: async(bot, message, args)=>{
        
        if(!args.length) return message.channel.send('Please Input ID');
        const searchMember = message.guild.members.cache.find(member=>member.user.tag.toLowerCase().includes(args[0].toLowerCase())) || message.mentions.users.first();
        if (!searchMember) return message.reply(`ID : ${args[0]} Not Found.`);
        const user = searchMember.user || message.mentions.users.first();
        message.channel.send(`hug ${user}`);
    }
}*/