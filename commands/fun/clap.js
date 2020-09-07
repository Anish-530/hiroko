const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'clap',
    category: 'fun',
    description: 'Displays \'claps\' between text you provide',
    aliases: [],
    usage: 'hey clap <your text>',
    run: async(bot, message, args)=>{
        const aa = args.slice(0).join(' ').split('').join('👏');
        if(!aa) return message.channel.send("Give me something to clap between them!")
        try{
        const bb = aa.split('👏').join('👏');
        const cc = '👏' + bb + '👏';
        message.channel.send(cc, {
            allowedMentions: {
              parse: []
            }
          });
        }catch(err){
          return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
        }
    }
}