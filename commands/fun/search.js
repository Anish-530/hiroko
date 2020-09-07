const Discord = require('discord.js');
const Tenor = require("tenorjs").client({
    "Key": "JLH9C6HHQDVR", // https://tenor.com/developer/keyregistration
    "Filter": "high", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
    "MediaFilter": "basic", // either minimal or basic, not case sensitive
    "DateFormat": "D/MM/YYYY - H:mm:ss A" // Change this accordingly
});
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'search',
    category: 'fun',
    description: 'search for a gif on the web',
    aliases: [],
    usage: 'hey search <provide something to search>',
    run: async(bot, message, args)=>{
        let arv = message.content.toLowerCase().substring(11);
        if(!arv) {return message.channel.send("**You have to give me something to search! **. Example : `hey search anime hugs`");}
        const searchh = await message.channel.send(`**Searching for** \`${arv}\` **gif....**`, {
            allowedMentions: {
              parse: []
            }
          });
        try{
        Tenor.Search.Random(arv, "1").then(Results1q => {
            Results1q.forEach(Post1q => {
                var mediax1q = Post1q.media[0];
                console.log(mediax1q.gif);
                var gif1q = mediax1q.gif
                console.log(gif1q)
                let kiq = new Discord.MessageEmbed()
                kiq.setColor(0x2f3136)
                kiq.setDescription(`**${message.guild.members.cache.get(message.author.id).displayName}** Here is your **${arv}** gif!`)
                kiq.setImage(gif1q.url)
                kiq.setTimestamp(new Date())
                kiq.setFooter("Hiroko", bot.user.avatarURL())
                return searchh.edit("\t", kiq)
            });
        })
    }catch(err){
        return searchh.edit("\t",'Oops! Looks like something went wrong, You can try again Later.')
      }
    }
}
