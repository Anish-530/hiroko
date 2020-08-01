const Discord = require('discord.js');
const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'rip',
    category: 'image fun',
    description: 'Laugh one someone\'s grave',
    aliases: ['rest', 'peace'],
    usage: 'hey rip [mention someone]',
    run: async(bot, message, args)=>{
        try{
            const r = message.author;
            const rr = message.mentions.users.first() || bot.user;
            const rURL = r.displayAvatarURL({ format: 'png', size: 256 });
            const rrURL = rr.displayAvatarURL({ format: 'png', size: 256 });
            const ri = await loadImage('./rip.jpg');
            const rDATA = await request.get(rURL);
            const rava = await loadImage(rDATA.body);
            const rrDATA = await request.get(rrURL);
            const rrava = await loadImage(rrDATA.body);
            const canvas = createCanvas(ri.width, ri.height);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(ri, 0, 0);
            ctx.rotate(-18.06 * (Math.PI / 180));
            ctx.drawImage(rava, 210, 300, 130, 130);
            ctx.rotate(13.55 * (Math.PI / 180));
            ctx.rotate(1 * (Math.PI / 180));
            ctx.drawImage(rrava, 90, 160, 130, 130);
            const ripy = new Discord.MessageAttachment(canvas.toBuffer(), `R.I.P ${rr.username}.jpg`);
            message.channel.send(ripy)

        }catch(err){
            console.log(err);
            return message.channel.send('*dies instead x_x*');
        }
    }
}