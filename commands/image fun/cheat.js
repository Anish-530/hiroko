const Discord = require('discord.js');
const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'cheat',
    category: 'image fun',
    description: 'Cheat? Nah! it\'s something else',
    aliases: [],
    usage: 'hey cheat <your text>',
    run: async(bot, message, args)=>{
        try{
            const de = await loadImage('./cheat.jpg');
            const canvas = createCanvas(de.width, de.height);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(de, 0, 0);
            ctx.fillStyle = '#000000';
            var size1 = 50;
            var name = args.slice(2).join(' ');
            if(!args[0]) return message.channel.send('You have to provide me something atleast to write it in the cheat paper.\nExample : \`hey cheat AHAHHAHA dumbass\`')
            do{
                ctx.font = `${size1 -= 8}px sans-serif`;
            } while(ctx.measureText(name).width > canvas.width - 225);
            ctx.rotate(23 * Math.PI / 180);
            ctx.fillText(`${name}`, 530, 300);
            const dipy = new Discord.MessageAttachment(canvas.toBuffer(), `Cheat.jpg`);
            await message.channel.send(dipy);
        }catch(err){
            console.log(err);
            return message.channel.send("Oops! Looks like something went wrong")
        }
    }
}