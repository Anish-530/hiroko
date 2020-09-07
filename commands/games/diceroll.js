const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'diceroll',
    category: 'games',
    description: 'Roll a dice',
    aliases: ['dr', 'dice', 'roll'],
    usage: 'hey diceroll [a number]',
    run: async(bot, message, args)=>{
        const di = ['1','2','3','4','5','6']
        try{
        const rolled = di[Math.floor(Math.random() * di.length)]
        if(!args[0]){
        let cm = await message.channel.send(`**Rolling the dice 🎲**`)
        return cm.edit(`It\'s a \`${rolled}\``);
        }
        if(isNaN(args[0])) return message.channel.send(`\`${args[0]}\` is not a number`)
        if(args[0] > 6 || args[0] < 1) {
            return message.reply(`Did you invent a new dice that contains number above \`${args[0]}\``)
        }
        if(args[0]) {
            if(args[0] === rolled) {
                return message.reply(`You got the correct number, your choice \`${agrs[0]}\` is equal to s\`${rolled}\``)
            }
            else if(args[0] !== rolled) {
                return message.reply(`Sorry, but \`${args[0]}\` didn\'t match with \`${rolled}\`..wrong number`)
            }
        }
    }catch(err){
        return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
      }
    }
}