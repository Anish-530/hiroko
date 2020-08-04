const Discord = require('discord.js');
const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'simp',
    category: 'image fun',
    description: 'Call someone a simp',
    aliases: [],
    usage: 'hey simp [mention someone]',
    run: async(bot, message, args)=>{
        try{
            const si = message.mentions.users.first() || message.author
            const siURL = si.displayAvatarURL({ format: 'png', size: 256 });
            const sim = await loadImage('./si.jpeg');
            const sDATA = await request.get(siURL);
            const sava = await loadImage(sDATA.body);
            const canvas = createCanvas(sim.width, sim.height);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(sim, 0, 0);
            ctx.rotate(-19.06 * (Math.PI / 180));
            ctx.beginPath();
            ctx.arc(270, 330, 155, 0, Math.PI * 2, true); //155 3rd option
            ctx.closePath();
            ctx.clip();
            ctx.drawImage(sava, 110, 155, 360, 360);
            const simk = new Discord.MessageAttachment(canvas.toBuffer(), `You are a Simp.jpg`);
            await message.channel.send(simk); 
        } catch(err){
            console.log(err)
            return message.channel.send('Oops! Looks like something went wrong!')
        }
    }
}