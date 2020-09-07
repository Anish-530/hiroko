const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'uwufy',
    category: 'fun',
    description: 'uwu-fy the text you provide',
    aliases: ['uwu'],
    usage: 'hey uwu <your text>',
    run: async(bot, message, args)=>{
        let ow = args.join(' UwU ')
        try{
        if(!ow) {
            return message.channel.send("Give me something to UwU-ify");
        }
        message.channel.send(ow + " UwU", {
            allowedMentions: {
              parse: []
            }
          });
        }catch(err){
          return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
        }
    }
}
