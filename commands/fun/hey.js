const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'hey',
    category: 'fun',
    description: 'Make Hiroko talk to you',
    aliases: ['hi','hello','hoi'],
    usage: 'hey hey',
    run: async(bot, message, args)=>{
        let responses = [
            "Hey There",
            "Yes? Want any help? do hey help :3",
            "Oh! Hewwo :3",
            "Why you call me? :p",
            "Can i help? :)",
            "Oops :p",
            "You can use hey help you know? :/",
            "Ok? Shall i help?",
            "Mhmm?",
            "Well! you called me lol :p",
            "ahh yes?",
            "use hey help for more commands lol :p",
            "Hey? wassup?",
            "AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA",
        ]
        try{
        let Response = responses[Math.floor(Math.random() * (responses.length))];
        message.reply(Response);
        }catch(err){
            return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
          }
    }
}
