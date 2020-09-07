const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'pog',
    category: 'fun',
    description: 'Reacts to your message with P O G',
    aliases: [],
    usage: 'hey pog',
    run: async(bot, message, args)=>{
        try{
        await message.react('🇵');
        await message.react('🇴');
        await message.react('🇬');
        }catch(err){
            return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
          }
    }
}