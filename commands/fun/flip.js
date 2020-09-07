const Discord = require('discord.js');
const flip = require('flip-text');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'flip',
    category: 'fun',
    description: 'Flips the text you provided!',
    aliases: [],
    usage: 'hey flip <your text>',
    run: async(bot, message, args)=>{
        let fl = args.slice(0).join(' ');
        try{
        if(!fl) return message.channel.send("Give me something to flip. I don\'t want to flip myself 🤷‍♀️")
        else if(fl) {
        let flipm = flip(fl)
        message.delete()
        message.channel.send(flipm);
        }
    }catch(err){
        return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
    }
}
}