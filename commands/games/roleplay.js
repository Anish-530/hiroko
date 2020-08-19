const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'roleplay',
    category: 'games',
    description: 'Wanna roleplay with Hiroko? Yes, you absolutely can',
    aliases: ['rp'],
    usage: 'hey rp',
    run: async(bot, message, args)=>{
        message.channel.send('*HAHAHAHAHA* I am Hiroko, and my master has commanded to kill you,\nI am here to fulfill my master\'s dreams *evil laughs*\n\`React with 1 if you want to fight back, else React with 2 if you want to die.\`')
        message.react(':one:').then(() => message.react(':two:'));

        const filter = (reaction, user) => {
            return [':one:', ':two:'].includes(reaction.emoji.name) && user.id === message.author.id;
        };

        message.awaitReactions(filter, { max: 1, time: 60000, errors: ['time'] })
            .then(collected => {
                const reaction = collected.first();

                if (reaction.emoji.name === ':one:') {
                    message.reply('You chose to fight');
                } else {
                    message.reply('You chose to die');
                }
            })
            .catch(collected => {
                message.reply('**You are dead!**');
            });
    }
}