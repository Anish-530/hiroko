const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'hoe',
    category: 'fun',
    description: 'epic',
    aliases: [],
    usage: 'hey hoe',
    run: async(bot, message, args)=>{
        message.reply('whachu doin baby girl');
    }
}