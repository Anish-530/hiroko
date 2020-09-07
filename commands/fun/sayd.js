const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'sayd',
    category: 'fun',
    description: 'Make the Hiroko say something\, and delete the message immediately',
    aliases: [],
    usage: 'hey sayd <your Text>',
    run: async(bot, message, args)=>{
      if(!message.member.guild.me.hasPermission(['MANAGE_MESSAGES'])) return message.channel.send("I don\'t have the permission to \`MANAGE MESSAGES\`.\nPlease provide me the following permission to use this command")
        const sad = args.slice(0).join(' ');
        try{
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
      }catch(err){
        return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
      }
    }
}