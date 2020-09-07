const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'ping',
    category: 'info',
    description: 'Check the ping of Hiroko',
    aliases: ['p','botping'],
    usage: 'hey ping',
    run: async(bot, message, args)=>{
        try {
            const m = await message.channel.send("Getting Information....")
            const pingg = m.createdTimestamp - message.createdTimestamp;
            const pi = new Discord.MessageEmbed()
            if(pingg >= 0 && pingg < 500) {
            pi.setColor(0xa1ee33)
            pi.addField("⏳ Took me: ", `**${pingg}ms** to interact with you`)
            return m.edit(`🟢 Pong! :3`, pi);
            }
            else if(pingg > 500 && pingg <= 10000) {
            pi.setColor(0xf94343)
            pi.addField("⏳ Took me: ", `**${pingg}ms** to interact with you`)
            return m.edit(`🔴 Pong! :3`, pi);
            }

        }catch(err){
            return m.edit("\t",'Oops! Looks like something went wrong, You can try again Later.')
        }
    }
}