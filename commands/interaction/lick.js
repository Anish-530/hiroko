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
    name: 'lick',
    category: 'interaction',
    description: 'Lick someone',
    aliases: [],
    usage: 'hey lick <member>',
    run: async(bot, message, args)=>{
        if (!args[0]) { return message.channel.send("*You can lick me UwU*") }
        const mentionedddMember111 = message.mentions.users.first()
        if (mentionedddMember111.id === message.guild.me.id) { return message.channel.send(`*>w<*`) }
        else if (mentionedddMember111.id === message.author) { return message.channel.send("Do you taste good?") }
        const slapp = await message.channel.send("**Licking...**")
        Tenor.Search.Random("anime lick", "1").then(Results111 => {
            Results111.forEach(Post111 => {
                var mediax111 = Post111.media[0];
                console.log(mediax111.gif);
                var gif111 = mediax111.gif
                console.log(gif111)
                let ki11 = new Discord.MessageEmbed()
                
                ki11.setColor(0x2f3136)
                ki11.setDescription(`>W< **${message.author.username}** licks **${mentionedddMember111.username}** 👀`)
                ki11.setImage(gif111.url)
                ki11.setTimestamp(new Date())
                ki11.setFooter("Hiroko", bot.user.avatarURL())
                return slapp.edit("\t", ki11)
            });
        }).catch(console.error); 
        }
    }