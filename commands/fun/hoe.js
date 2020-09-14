const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'hoe',
    category: 'fun',
    description: 'epic',
    aliases: [],
    usage: 'hey hoe',
    run: async(bot, message, args)=>{
        const rep = [
        "whachu doin baby girl",
        "what you want bitch",
        "fuck you",
        "hey daddy uwu~",
        "wanna got out?",
        "let's get a room",
        "push it more in senpai~"
        ]
        let Responsegc = Responsegc[Math.floor(Math.random() * (rep.length))];
        message.reply(`${rep}`);
    }
}