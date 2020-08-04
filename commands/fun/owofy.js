const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'owofy',
    category: 'fun',
    description: 'owo-fy something',
    aliases: ['owo'],
    usage: 'hey owo <text>',
    run: async(bot, message, args)=>{
        let ow = args.join(' OwO ')
        if(!ow) {
            return message.channel.send("Give me something to OwO-ify");
        }
        message.channel.send(ow + " OwO");
    }
}
