const Discord = require('discord.js');
const { createCanvas, loadImage } = require('canvas');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'fakenitro',
    category: 'image fun',
    description: 'gift someone a fake nitro',
    aliases: ['fn', 'nitro', 'fake'],
    usage: 'hey fakenitro',
    run: async(bot, message, args)=>{
        try {
            const fake = await loadImage('./fakenitro1.png');
            const canvas = createCanvas(fake.width, fake.height);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(fake, 0, 0);
            ctx.fillStyle = '#8a8b8f';
            var size1 = 30;
            var name = bot.users.cache.get(message.author.id).tag;
            do{
                ctx.font = `${size1 -= 5}px sans-serif`;
            } while(ctx.measureText(name).width > canvas.width - 225);
            ctx.fillText(`${name} has gifted you Nitro for 1 month!`, 20, 115);

            const fakenit = new Discord.MessageAttachment(canvas.toBuffer(), 'nani.jpg');
            message.channel.send(fakenit)
        } catch(err) {
            if(err) {
                console.log(err);
                return message.channel.send(`Sorry, ${message.author} I was unable to generate a fake nitro`);
            }
        }
    }
}