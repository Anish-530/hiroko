const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'createchannel',
    category: 'moderation',
    description: 'create a channel in your guild',
    aliases: [],
    usage: 'hey createchannel <channel name>',
    run: async(bot, message, args)=>{
        if(!message.member.hasPermission(['MANAGE_CHANNELS'])) return message.channel.send("Sorry, your roles are too low to execute this command!")
        if(!message.member.guild.me.hasPermission(['MANAGE_CHANNELS'])) return message.channel.send("I don\'t have the permission to \`MANAGE CHANNELS\`.\nPlease provide me the following permission to use this command")
        const vb = message.content.toLowerCase().substring(18);
        let dedle = args.join('-')
        if(!vb) return message.channel.send("Provide me a channel name to create it!\n`Example : hey createchannel waifu warzone`")
        try{
        message.guild.channels.create(`${vb}`).then(channel => {
            let cha = new Discord.MessageEmbed()
            cha.setTitle("Create Channel :")
            cha.setDescription(`The channel ***#${dedle}*** was successfully created by **${message.guild.members.cache.get(message.author.id).displayName}**`)
            cha.setColor(0x33a1ee)
            cha.setTimestamp(new Date())
            cha.setFooter("Hiroko", bot.user.displayAvatarURL())
            message.channel.send(cha);
        })
    }catch(err){
        return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
      }
    }
}
