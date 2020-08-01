const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'pog',
    category: 'fun',
    description: 'Reacts to your message with POG',
    aliases: [],
    usage: 'hey pog',
    run: async(bot, message, args)=>{
        message.react('🇵');
        message.react('🇴');
        message.react('🇬');
    }
}