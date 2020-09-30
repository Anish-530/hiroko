const { MessageEmbed } = require('discord.js')
const os = require('os')
module.exports = {
    name: 'stats',
    category: 'info',
    description: 'check Hiroko\'s stats',
    aliases: [],
    usage: 'hey stats',
    run: async (bot, message, args) => {
        let totalSeconds = (bot.uptime / 1000);
        let days = Math.floor(totalSeconds / 86400);
        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds %= 3600;
        let minutes = Math.floor(totalSeconds / 60);
        let seconds = Math.floor(totalSeconds % 60);
        let ime = `day(s) ----- [${days}] d\nhour(s) ----- [${hours}] h\nminute(s) ----- [${minutes}] m\nsecond(s) ----- [${seconds}] s`;
        const embed = new MessageEmbed()
        try{
            embed.setThumbnail(message.guild.iconURL({ dynamic: true, format: 'png' }))
            embed.setAuthor(`${bot.user.username}\'s Stats (v6.8.0)`, bot.user.displayAvatarURL())
            embed.setColor(0x2f3136)
            embed.addFields(
                {
                    name: 'Total Servers 🌐',
                    value: `${bot.guilds.cache.size}`,
                    inline: true
                },
                {
                    name: 'Total Channels 📺',
                    value: `${bot.channels.cache.size}`,
                    inline: true
                },
                {
                    name: 'Total Users 👥',
                    value: `${bot.users.cache.size}`,
                    inline: true
                },
                {
                    name: 'Ping ⏳',
                    value: `${Math.round(bot.ws.ping)}ms`,
                    inline: true
                },
                {
                    name: 'Developed On 👨‍💻',
                    value: 'Wednesday\nMay 3, 2020',
                    inline: true
                },
                {
                    name: 'Total Cores ⚡',
                    value: `${os.cpus().length}`,
                    inline: true
                },
                {
                    name: 'Developer 💻',
                    value: `Awish`,
                    inline: true
                },
                {
                    name: 'Created with 🐱‍💻',
                    value: `\`\`\`js\nVS Code 12\nNode.js 12\`\`\``,
                    inline: true
                },
                {
                    name: 'Command executed in 🕹',
                    value: `\`\`\`fix\n${message.guild.name}\'s server\`\`\``,
                    inline: true
                },
                {
                    name: 'Bot-Uptime 🕚',
                    value: `\`\`\`js\n${ime}\`\`\``,
                    inline: true
                },
                {
                    name: 'Vote For me 🔼',
                    value: `[Here](https://top.gg/bot/722729985512833076/vote)`,
                    inline: true
                }
            )
            embed.setFooter(`Requested By ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))

        await message.channel.send(embed)
        }catch(err){
            return message.channel.send(`Oops! Looks like something went wrong, You can try again Later.`)
        }
    }
}
