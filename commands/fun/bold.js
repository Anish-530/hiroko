const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'bold',
    category: 'fun',
    description: 'make something bold',
    aliases: [],
    usage: 'hey bold <your text>',
    run: async(bot, message, args)=>{
        let bo = message.content.toLowerCase().substring(8);
        try{
        if(!bo) {
            return message.channel.send("Give me something to make it bold!");
        }
        message.channel.send(`**${bo}**`, {
            allowedMentions: {
              parse: []
            }
          });
        }catch(err){
          return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
        }
    }
}
