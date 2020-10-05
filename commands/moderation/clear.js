const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'clear',
    category: 'moderation',
    description: 'Clears messages as per as the amount passed',
    aliases: ['del'],
    usage: 'hey clear <number of messages you want to clear>',
    run: async(bot, message, args)=>{
        if(!message.member.hasPermission(['MANAGE_MESSAGES'])) return message.channel.send("You don\'t have the permission to use this command.\nYou need \`MANAGE_MESSAGES\` permission, to use this command.");
        if(!message.member.guild.me.hasPermission(['MANAGE_MESSAGES'])) return message.channel.send("I don\'t have the permission to \`MANAGE_MESSAGES\`.\nPlease provide me the following permission to use this command")
        const amount = parseInt(args[0]);
        try{
        if (isNaN(amount)) {
            return message.reply('that doesn\'t seem to be a valid number.');
        } else if (amount < 2 || amount > 100) {
            return message.reply('I cannot clear messages greater than 100 or less than 1. Sorry :(');
        }
        if(amount) {
            message.channel.bulkDelete(amount);
            message.channel.send("Successfully cleared `" + `${amount}` + "` messages :)").then(message => message.delete({ timeout: 2000 }));
        }
    }catch(err){
        return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
      }
    }
}
