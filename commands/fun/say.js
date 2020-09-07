const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'say',
    category: 'fun',
    description: 'Make Hiroko say something',
    aliases: [],
    usage: 'hey say <your text>',
    run: async(bot, message, args)=>{
        const sa = args.slice(0).join(' ');
        try{
        if(sa) {
            message.channel.send(sa, {
                allowedMentions: {
                  parse: []
                }
              });
            }
            else if(!sa) {
            return message.reply("What do you want me to say? 🤷‍♀️");
            }
          }catch(err){
            return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
          }
    }
}