const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'spam',
    category: 'fun',
    description: 'spam an user\'s DM <if you have enough hirostreaks>',
    aliases: [],
    usage: 'hey spam <mention someone>',
    run: async(bot, message, args)=>{
        const userData = await bot.models.user.findByID(message.author.id)
        if(!userData) await bot.models.user.create({ _id: message.author.id })
        let streaks = userData.streaks
        message.reply(`You have ${streaks} left`)
    }
}