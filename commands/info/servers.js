const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'servers',
    category: 'info',
    description: 'Shows the guilds name, in which hiroko is',
    aliases: [],
    usage: 'hey servers',
    run: async(bot, message, args)=>{
	if(message.author.id !== "671355502399193128") return;
        try{
            bot.guilds.cache.forEach(guild => {
                var memberCount = guild.members.cache.filter(member => !member.user.bot).size;
                message.channel.send(`**${guild.name}** has \`${memberCount}\` members`)
                })
        }catch(err){
            message.channel.send(err.message);
        }
    }
}