const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'find',
    category: 'games',
    description: 'Find me with your smortest brain ;)',
    aliases: ['chase', 'grab'],
    usage: 'hey find <enter the room>',
    run: async(bot, message, args)=>{
        const v = args.slice(0).join(" ");
        if(!v) return message.channel.send('I can see you don\'t want to play 0_0')
        const arr = ["Street","Room","Basement"]
        const sl = arr[Math.floor(Math.random() * arr.length)]
        if(v === sl) {
            return message.channel.send('You found me out AAAAAAAAAAaa >~< *runs*')
        }
        else if (v !== sl) {
            return message.channel.send('*gets away with greater speed*')
        }
        else {
            return message.channel.send('Seems like you can\'t find me ;)')
        }
    }
}