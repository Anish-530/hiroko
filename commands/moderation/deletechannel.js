const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'deletechannel',
    category: 'moderation',
    description: 'delete a channel',
    aliases: ['dc', 'delchannel'],
    usage: 'hey deletechannel <channel name>',
    run: async(bot, message, args)=>{
        if(!message.member.hasPermission(['MANAGE_CHANNELS'])) return message.channel.send("You don\'t have the permission to use this command.\nYou need \`MANAGE_CHANNELS\` permission, to use this command.")
        if(!message.member.guild.me.hasPermission(['MANAGE_CHANNELS'])) return message.channel.send("I don\'t have the permission to \`MANAGE_CHANNELS\`.\nPlease provide me the following permission to use this command")
        const fetchedChannel = message.guild.channels.cache.find(r => r.name === args.join('-'));
        try{
        if(!fetchedChannel) return message.channel.send("Provide me a valid channel name to delete it!\n`Example : hey delchannel waifu warzone`")
        fetchedChannel.delete();
            let cha1 = new Discord.MessageEmbed()
            cha1.setTitle("Delete Channel :")
            cha1.setDescription(`The channel ***#${args.join('-')}*** was successfully deleted by **${message.guild.members.cache.get(message.author.id).displayName}**`)
            cha1.setColor(0x33a1ee)
            cha1.setTimestamp(new Date())
            cha1.setFooter("Hiroko", bot.user.displayAvatarURL())
            message.channel.send(cha1);
    }catch(err){
        return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
      }
}
}
