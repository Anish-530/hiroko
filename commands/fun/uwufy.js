const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'uwufy',
    category: 'fun',
    description: 'uwu-fy something',
    aliases: ['uwu'],
    usage: 'hey uwu <text>',
    run: async(bot, message, args)=>{
        let ow = args.join(' UwU ')
        if(!ow) {
            return message.channel.send("Give me something to UwU-ify");
        }
        message.channel.send(ow + " UwU");
    }
}
