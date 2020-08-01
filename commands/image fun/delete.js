const Discord = require('discord.js');
const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'delete',
    category: 'image fun',
    description: 'delete someone permanently',
    aliases: [],
    usage: 'hey delete [mention someone]',
    run: async(bot, message, args)=>{
        try{
            const del = message.mentions.users.first() || message.author
                const dURL = del.displayAvatarURL({ format: 'png', size: 256 });
                const de = await loadImage('./deletereal.png');
                const dDATA = await request.get(dURL);
                const dava = await loadImage(dDATA.body);
                const canvas = createCanvas(de.width, de.height);
                const ctx = canvas.getContext('2d');
                ctx.drawImage(de, 0, 0);
                ctx.fillStyle = '#000000';
                var size1 = 21;
                var size2 = 19.5;
                var name = bot.users.cache.get(message.author.id).tag;
                do{
                    ctx.font = `${size1 -= 8}px sans-serif`;
                } while(ctx.measureText(name).width > canvas.width - 225);
                ctx.fillText(`Do you want to delete ${del.username} permanently?`, 55, 53);
                ctx.drawImage(dava, 55, 62, 115, 115);
                do{
                    ctx.font = `${size2 -= 8}px sans-serif`;
                } while(ctx.measureText.width > canvas.width - 225);
                ctx.fillText(`C:/User/${del.username}/Discord`, 283, 140);
                ctx.drawImage(dava, 55, 62, 115, 115);
                const dipy = new Discord.MessageAttachment(canvas.toBuffer(), `Delete ${del.username} permanently?.jpg`);
                await message.channel.send(dipy);    
        } catch(err){
            console.log(err);
            return message.channel.send('Oops! Looks like something went wrong');
        }
    }
}