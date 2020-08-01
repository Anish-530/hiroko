const Discord = require('discord.js');
const flip = require('flip-text');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'flip',
    category: 'fun',
    description: 'flip what you say!',
    aliases: [],
    usage: 'hey flip <text>',
    run: async(bot, message, args)=>{
        let fl = args.slice(0).join(' ');
        if(!fl) return message.channel.send("Give me something to flip. I don\'t want to flip myself 🤷‍♀️")
        else if(fl) {
        let flipm = flip(fl)
        message.delete()
        message.channel.send(flipm);
        }
    }
}