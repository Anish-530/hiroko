const Discord = require('discord.js');
const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'butterfly',
    category: 'image fun',
    description: 'is that a butterfly?',
    aliases: ['btf'],
    usage: 'hey butterfly [mention someone]',
    run: async(bot, message, args)=>{
        try{
            const boyfriend = message.author;
            const girlfriend = message.mentions.users.first() || bot.user;
            const boyfriendAvatarURL = boyfriend.displayAvatarURL({ format: 'png', size: 256 });
            const girlfriendAvatarURL = girlfriend.displayAvatarURL({ format: 'png', size: 256 });
            const base = await loadImage('./butterfly.jpg');
            const boyfriendAvatarData = await request.get(boyfriendAvatarURL);
            const boyfriendAvatar = await loadImage(boyfriendAvatarData.body);
            const girlfriendAvatarData = await request.get(girlfriendAvatarURL);
            const girlfriendAvatar = await loadImage(girlfriendAvatarData.body);
            const canvas = createCanvas(base.width, base.height);
            const ctx = canvas.getContext('2d');
            
            ctx.drawImage(base, 0, 0);
            ctx.rotate(20 * Math.PI * 2, true);
            ctx.drawImage(boyfriendAvatar, 40, 10, 97, 97);
            ctx.rotate(20 * Math.PI * 2, true);
            ctx.rotate(4 * Math.PI * 2, true);
            ctx.drawImage(girlfriendAvatar, 200, 5, 50, 50);
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), `Is ${girlfriend.username} a butterfly?.jpg`);
            message.channel.send(attachment)
        } catch(err){
            console.log(err)
            return message.channel.send('Oops! Looks like something went wrong!')
        }
    }
}