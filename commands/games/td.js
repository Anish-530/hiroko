const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'td',
    category: 'games',
    description: 'Truth and Dare',
    aliases: ['truthdare', 'dt', 'truth', 'dare'],
    usage: 'hey td',
    run: async(bot, message, args)=>{
        let responses1 = [
            "Truth you go!",
            "Dare you go",
            "Truth bruh!",
            "Got a dare, lol",
            "HAHAHA DARE",
            "Truth mate",
            "Hey dare for you lol",
            "Man you got truth",
            "Die with the dare lol",
            "Tell a truth lmao",
        ]
        return message.reply(responses1[Math.floor(Math.random() * responses1.length)]);
    }
}
