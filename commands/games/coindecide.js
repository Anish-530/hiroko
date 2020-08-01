const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'coindecide',
    category: 'games',
    description: 'Flip the coin to either get a heads or a tails',
    aliases: ['cd', 'coi', 'decide'],
    usage: 'hey coindecide',
    run: async(bot, message, args)=>{
        const ans = ['heads','tails']
        const b = ans[Math.floor(Math.random() * ans.length)]
        message.channel.send(`It\'s a \`${b}\``);
    }
}