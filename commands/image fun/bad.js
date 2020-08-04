const Discord = require('discord.js');
const { createCanvas, loadImage } = require('canvas');
const request = require('node-superfetch');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'bad',
    category: 'image fun',
    description: 'make yourself or anyone bad (get or make affected)',
    aliases: [],
    usage: 'hey bad [user]',
    run: async(bot, message, args)=>{
        try{
            const bad = message.mentions.users.first() || message.author
            const bURL = bad.displayAvatarURL({ format: 'png', size: 256 });
            const ba = await loadImage('./affect.jpg');
            const bDATA = await request.get(bURL);
            const bava = await loadImage(bDATA.body);
            const canvas = createCanvas(ba.width, ba.height);
            const ctx = canvas.getContext('2d');
            ctx.drawImage(ba, 0, 0);
            ctx.drawImage(bava, 170, 360, 190, 150);
            const bady = new Discord.MessageAttachment(canvas.toBuffer(), `Bad boi ${bad.username}.jpg`);
            await message.channel.send(bady);  
        }catch(err){
            console.log(err);
            return message.channel.send('Oops! Look\'s like something went wrong.\nYou can get more details about the command by typing \`hey help [command name]\`')
        }
    }
}