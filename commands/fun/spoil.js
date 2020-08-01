const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'spoil',
    category: 'fun',
    description: 'spoil something',
    aliases: ['sp', 'sl', 'spoil'],
    usage: 'hey spoil <Your Text>',
    run: async(bot, message, args)=>{
    const aaa = args.slice(0).join(' ').split('').join('||||');
    if(!aaa) return message.channel.send("Give me something to make it a spoiler")
    const bbb = aaa.split('|| ||').join('|| ||');
    const ccc = '||' + bbb + '||';
    message.channel.send(ccc);
    }
}