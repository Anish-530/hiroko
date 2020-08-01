const Discord = require('discord.js');
const Tenor = require("tenorjs").client({
    "Key": "JLH9C6HHQDVR", // https://tenor.com/developer/keyregistration
    "Filter": "off", // "off", "low", "medium", "high", not case sensitive
    "Locale": "en_US", // Your locale here, case-sensitivity depends on input
    "MediaFilter": "minimal", // either minimal or basic, not case sensitive
    "DateFormat": "D/MM/YYYY - H:mm:ss A" // Change this accordingly
});
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'kill',
    category: 'interaction',
    description: 'kill someone',
    aliases: [],
    usage: 'hey kill <member>',
    run: async(bot, message, args)=>{
        const mentionedddMember1112 = message.mentions.users.first()
        if (mentionedddMember1112.id === message.guild.me.id) return message.channel.send(`*Dies x_x*`)
        if (mentionedddMember1112.id === message.author.id) {
            Tenor.Search.Random("anime wasted", "1").then(Results1112 => {
                Results1112.forEach(Post1112 => {
                    var mediax1112 = Post1112.media[0];
                    console.log(mediax1112.gif);
                    var gif1112 = mediax1112.gif
                    console.log(gif1112)
                    let ki112 = new Discord.MessageEmbed()
                    
                    ki112.setColor(0x2f3136)
                    ki112.setDescription(`**${message.author.username}** killed themselves 🤕`)
                    ki112.setImage(gif111.url)
                    ki112.setTimestamp(new Date())
                    ki112.setFooter("Hiroko", bot.user.avatarURL())
                    return slapp.edit("\t", ki112)
                });
            }).catch(console.error); 
        }
        else if(mentionedddMember1112) {
        const slapp2 = await message.channel.send("**Killing...**")
        Tenor.Search.Random("anime wasted", "1").then(Results111 => {
            Results111.forEach(Post1112 => {
                var mediax1112 = Post1112.media[0];
                console.log(mediax11122.gif);
                var gif1112 = mediax111.gif
                console.log(gif1112)
                let ki112 = new Discord.MessageEmbed()
                
                ki112.setColor(0x2f3136)
                ki112.setDescription(`**${message.author.username}** killed **${mentionedddMember1112.username}** 🤕`)
                ki112.setImage(gif111.url)
                ki112.setTimestamp(new Date())
                ki112.setFooter("Hiroko", bot.user.avatarURL())
                return slapp.edit("\t", ki112)
            });
        }).catch(console.error); 
            }
        }
    }