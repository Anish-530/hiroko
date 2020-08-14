const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'sayd',
    category: 'fun',
    description: 'Make the Hiroko say something\, and delete the message immediately',
    aliases: [],
    usage: 'hey sayd <your Text>',
    run: async(bot, message, args)=>{
        const sad = args.slice(0).join(' ');
        if(sad) {
        message.channel.send(sad, {
            allowedMentions: {
              parse: []
            }
          });
        if(message.author.id === message.author.id){
            message.delete()
        }
        }
        else if(!sad) {
        return message.reply("What do you want me to say? 🤷‍♀️");
        }
    }
}