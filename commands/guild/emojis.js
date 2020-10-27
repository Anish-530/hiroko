//will fix this entirely
const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'emojis',
    category: 'guild',
    description: 'displays every emoji of the guild, where the command is used',
    aliases: ['emojilist'],
    usage: 'hey emojis',
    run: async(bot, message, args)=>{
        try{
        let Emojis = "";
        let EmojisAnimated = "";
        let EmojiCount = 0;
        let Animated = 0;
        let OverallEmojis = 0;
        function Emoji(id){
            return bot.emojis.cache.get(id).toString()
        }
        message.guild.emojis.cache.forEach(emoji => {
            OverallEmojis++;
            if(emoji.animated) {
                Animated++;
                EmojisAnimated+=Emoji(emoji.id)
            }else {
                EmojiCount++;
                Emojis+=Emoji(emoji.id)
            }
        })
        let emn = new Discord.MessageEmbed()
        emn.setTitle(`Emojis of [ ${message.guild.name} ] server`)
        emn.setThumbnail(message.guild.iconURL({ dynamic: true, format: 'png', size: 512 }))
        emn.setDescription(`**Animated [${Animated}]**:\n${EmojisAnimated}\n\n**Standard [${EmojiCount}]**:\n${Emojis}`)
        emn.setColor(0x2f3136)
        trimString = (EmojisAnimated, max) => ((EmojisAnimated.length > max) ? `${EmojisAnimated.slice(0, max - 3)}...` : EmojisAnimated);
        trimstring = (Emojis, max) => ((Emojis.length > max) ? `${Emojis.slice(0, max - 3)}...` : Emojis);
        if(emn.length >= 2048) {
            emn.setDescription(`
            **Animated [${Animated}]**:\n${EmojisAnimated.length < 6 ? EmojisAnimated.join(', ') : EmojisAnimated.length > 6 ? trimString(EmojisAnimated, 2047) : trimString(EmojisAnimated, 2047)}\n
            **Standard [${EmojiCount}]**:\n${Emojis.length < 6 ? Emojis.join(', ') : Emojis.length > 6 ? trimstring(Emojis, 2047) : trimstring(Emojis, 2047)}`)
        }
        message.channel.send(emn);
        console.log(emn.length)
        }catch(err){
            return message.channel.send(`The Error occuring currently is : ${err.message}`)
        }
    }
}
