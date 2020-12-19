const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'dmhelp',
    category: 'info',
    description: 'get a list of all the commands',
    aliases: [],
    usage: 'hey dmhelp',
    run: async(bot, message, args)=>{
        try {
        let help = new Discord.MessageEmbed()
        .setTitle('For more information about a command, or how to use it. Use \`hey help [command name]\`.')
        .setAuthor('We are aware that some of the commands may not work, or do possibly crash. However this will be fixed real soon. Thank you.')
        .addFields(
            {
                name: '😂 | FUN',
                value: `\`\`\`hey 8ball, hey bold,\nhey clap, hey epic,\nhey flip, hey hey,\nhey isimp, hey megay,\nhey meme, hey mesimp,\nhey owofy, hey pog,\nhey sayd(say delete), hey say,\nhey search, hey spoil,\nhey table, hey uwufy\`\`\``
            },
            {
                name: '🎮 | GAMES',
                value: `\`\`\`hey coindecide\nhey diceroll\nhey rps\nhey td\`\`\``
            },
            {
                name: '✨ | GUILD',
                value: `\`\`\`hey emojis\nhey finduser\nhey invite\nhey nick\`\`\``
            },
            {
                name: '⛰ | IMAGE FUN',
                value: `\`\`\`hey bad, hey butterfly\nhey delete, hey fakenitro\nhey nani, hey rip\nhey simp\`\`\``
            },
            {
                name: '🤖 | INFO',
                value: `\`\`\`hey botinvite, hey dmhelp\nhey help, hey info\nhey ping, hey stats\nhey supportserver, hey time\nhey uptime, hey userinfo\`\`\``
            },
            {
                name: '🤝 | INTERACTION',
                value: `\`\`\`hey angry, hey baka, hey blush, hey carry, hey cry, hey confused, hey dab, hey drink, hey explode, hey greet, hey handhold, hey highfive, hey hug, hey kiss, hey laugh, hey lick, hey nom, hey pat, hey poke, hey pout, hey punch, hey scream, hey shoot, hey slap, hey sniff, hey stare, hey tickle, hey wag\`\`\``
            },
            {
                name: '🎲 | MISCELLANEOUS',
                value: `\`\`\`hey avatar\nhey editsnipe\nhey snipe\`\`\``
            },
            {
                name: '⚙ | MODERATION',
                value: `\`\`\`hey ban\nhey clear\nhey createchannel\nhey deletechannel\nhey kick\nhey unban\`\`\``
            }
        )
        .setDescription(`You can vote for me [here](https://top.gg/bot/722729985512833076/vote) | [Support Server](https://discord.gg/9VS3HU5)`)
        .setColor('#2f3136')
        .setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL())
        await message.author.send(help)
        await message.react('📨')
        }catch(err) {
            return message.channel.send('Looks like an error occured. Please run this command again later.')
        }
    }
}
