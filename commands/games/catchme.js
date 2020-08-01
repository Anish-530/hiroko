const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'catchme',
    category: 'games',
    description: 'Catch me with your greatest speed',
    aliases: ['chase', 'grab'],
    usage: 'hey catchme',
    run: async(bot, message, args)=>{
        const v = args.slice(0).join(" ");
        const ca = Math.floor(Math.random() * 500)
        if(!v){
            return message.channel.send("Hmm, seems like I got away this time :)")
        }
        if(isNaN(v)){
            return message.channel.send("Do you think that\'s what speed is?")
        }
        if(v === ca){
            return message.channel.send("Ah~ >o<, You caught me, your speed match with my speed")
        }
        else if(ca > 400 || ca < 499){
            return message.channel.send("You were too close, but yeah, *runs faster and gets away*")
        }
        else if(ca > 1 || ca < 100){
            return message.channel.send("You can never catch me *flees*")
        }
    }
}