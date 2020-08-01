const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'sayd',
    category: 'fun',
    description: 'Make the bot say anything and delete your message with which you commanded',
    aliases: [],
    usage: 'hey sayd <Your Text>',
    run: async(bot, message, args)=>{
        const sad = args.slice(0).join(' ');
        if(sad) {
        message.channel.send(sad);
        if(message.author.id === message.author.id){
            message.delete()
        }
        }
        else if(!sad) {
        return message.reply("What do you want me to say? 🤷‍♀️");
        }
    }
}