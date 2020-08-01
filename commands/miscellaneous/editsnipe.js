const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'editsnipe',
    category: 'miscellaneous',
    description: 'Snipe a message which was edited recently',
    aliases: ['es', 'edit'],
    usage: 'hey editsnipe',
    run: async(bot, message, args)=>{
        const msm = bot.edits.get(message.channel.id)
        if(!msm) return message.channel.send("There are no messages that were edited recently")
        const edi = new MessageEmbed()
        edi.setAuthor(`Edited by ${msm.author.tag}`, msm.author.displayAvatarURL({ dynamic: true, size: 256 }))
        edi.setColor(0x2f3136)
        edi.setDescription(msm.content)
        edi.setTimestamp(new Date())
        message.channel.send(edi)
    }
}