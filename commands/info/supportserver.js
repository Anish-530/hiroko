const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'supportserver',
    category: 'info',
    description: 'Join our support server now',
    aliases: ['ss', 'support','botserver'],
    usage: 'hey supportserver',
    run: async(bot, message, args)=>{
        message.channel.send('https://discord.gg/ZKfWu4H Thank You for Joining');
    }
}