const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const path = require('path');
const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'nani',
    category: 'image fun',
    description: 'nani an user',
    aliases: [],
    usage: 'hey nani [mention someone]',
    run: async(bot, message, args)=>{

        try {
            const boyfriend = message.author;
            const girlfriend = message.mentions.users.first() || bot.user;
            const boyfriendAvatarURL = boyfriend.displayAvatarURL({ format: 'png', size: 256 });
            const girlfriendAvatarURL = girlfriend.displayAvatarURL({ format: 'png', size: 256 });
            const base = await loadImage('./nani.jpg');
            const boyfriendAvatarData = await request.get(boyfriendAvatarURL);
            const boyfriendAvatar = await loadImage(boyfriendAvatarData.body);
            const girlfriendAvatarData = await request.get(girlfriendAvatarURL);
            const girlfriendAvatar = await loadImage(girlfriendAvatarData.body);
            const canvas = createCanvas(base.width, base.height);
            const ctx = canvas.getContext('2d');
            
            ctx.drawImage(base, 0, 0);
            ctx.rotate(20 * Math.PI * 2, true);
            ctx.drawImage(boyfriendAvatar, 80, 5, 80, 80);
            ctx.rotate(20 * Math.PI * 2, true);
            ctx.rotate(4 * Math.PI * 2, true);
            ctx.drawImage(girlfriendAvatar, 65, 200, 135, 135);
            const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'nani.jpg');
            message.channel.send(attachment)
        }catch(err){
            return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
          }
    }
}
