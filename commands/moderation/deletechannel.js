const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'deletechannel',
    category: 'moderation',
    description: 'delete a channel',
    aliases: ['dc', 'delchannel'],
    usage: 'hey deletechannel <channel name>',
    run: async(bot, message, args)=>{
        if(!message.member.hasPermission(['ADMINISTRATOR', 'MANAGE_CHANNELS', 'KICK_MEMBERS', 'BAN_MEMBERS'])) return message.channel.send("Sorry, your roles are too low to execute this command!")
        if(!message.member.guild.me.hasPermission(['ADMINISTRATOR', 'MANAGE_CHANNELS', 'KICK_MEMBERS', 'BAN_MEMBERS'])) return message.channel.send("I don\'t have the permission to Manage channels :(")
        const fetchedChannel = message.guild.channels.cache.find(r => r.name === args.join('-'));
        if(!fetchedChannel) return message.channel.send("Provide me a valid channel name to delete it!\n`Example : hey delchannel waifu warzone`")
        fetchedChannel.delete();
            let cha1 = new Discord.MessageEmbed()
            cha1.setTitle("Delete Channel :")
            cha1.setDescription(`The channel ***#${args.join('-')}*** was successfully deleted by **${message.author.username}**`)
            cha1.setColor(0x33a1ee)
            cha1.setTimestamp(new Date())
            cha1.setFooter("Hiroko", bot.user.displayAvatarURL())
            message.channel.send(cha1);
    }
}
