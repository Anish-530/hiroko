const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'rps',
    category: 'games',
    description: 'Play Rock, Paper or scissors with the Hiroko!',
    aliases: [],
    usage: 'hey rps <your choice>',
    run: async(bot, message, args)=>{
        const ss = args.slice(0).join(' ').toLowerCase();
        try{
        const rs = [
            "rock",
            "paper",
            "scissors"
        ]
        const ran = rs[Math.floor(Math.random() * rs.length)]
        if(!ss) return message.reply(`You have to choose an option from only \`Rock\`, \`paper\` or \`scissors\`. Example : \`hey rps rock\``);        
        if(!rs.includes(ss)) {
            return message.reply(`You have to choose an option from only \`Rock\`, \`paper\` or \`scissors\`. Example : \`hey rps rock\``);
        }
        if (ran === ss) return message.reply("It's a tie! We had the same choice.");
        
        switch (ss) {
            case 'rock': {
                if (ss === 'paper') return message.reply('I won!');
                else return message.reply('You won!');
            }
            case 'paper': {
                if (ss === 'scissors') return message.reply('I won!');
                else return message.reply('You won!');        
            }
            case 'scissors': {
                if (ss === 'rock') return message.reply('I won!');
                else return message.reply('You won!');
            }
            default: {
                return message.channel.send(`Only these responses are accepted: \`${rs.join(', ')}\``);
            }
        }
    }catch(err){
        return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
      }
    }
}