
const Discord = require('discord.js');
const { Collection ,Client, MessageEmbed } = require('discord.js');
const { MessageAttachment } = require("discord.js")
const express = require('express');

const fs = require('fs');
const bot = new Client({
    disableEveryone: true,
    ws: { intents: ["GUILDS", "GUILD_MESSAGES"] }
})

bot.commands = new Collection();
bot.aliases = new Collection();
bot.categories = fs.readdirSync("./commands/");
const Timeout = new Set();
["command"].forEach(handler => {
    require(`./handlers/${handler}`)(bot);
});

const request = require('request');
const {MessageCollector} = require('discord.js-collector');
const path = require('path');
const ms = require('ms')

const filter = m => m.content.includes('discord');



const PREFIX = 'hey ';


bot.on('ready', () => { 
    bot.user.setActivity(`hey help`, {type: "LISTENING"});
})

bot.on("error", async(err) => {
    console.log(err)
    })
bot.on('message', async message => {
if(message.author.bot) return;
if(!message.content.toLowerCase().startsWith(PREFIX)) return;
if(!message.guild) {
    const t = new Discord.MessageEmbed()
    t.setTitle('STOP WHERE YOU ARE! ✋')
    t.setColor(0xf94343)
    t.setDescription('🤷‍♀️ | You can\'t use commands inside DMs')
    t.setTimestamp(new Date())
    t.setFooter('You may stop using commands in DMs')
    return message.channel.send(t);
}
if(!message.member) message.member = await message.guild.fetchMember(message);
const args = message.content.slice(PREFIX.length).trim().split(/ +/g);
const com = args.shift().toLowerCase();
if(com.length == 0 ) return;
const command = bot.commands.get(com) || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(com));
if(command){
    if(command.timeout){
        if(Timeout.has(`${message.author.id}${command.name}`)){
            let um = new Discord.MessageEmbed()
            um.setTitle("Hold Up ✋!")
            um.setDescription(`You have to wait more ${ms(command.timeout)}, to use this command again`)
            um.addField('Why?', 'Because this system was installed, in order not to flood the chat with bot commands everywhere', true)
            um.setFooter(`This message gets deleted after 10s`)
            um.setTimestamp(new Date())
            um.setColor(0xf94343)
            return message.reply(um).then(message => message.delete({ timeout: 10000 }));
        } else {
            Timeout.add(`${message.author.id}${command.name}`)
            setTimeout(() => {
                Timeout.delete(`${message.author.id}${command.name}`)
            }, command.timeout);
        }
    }
    command.run(bot, message, args)
    
    let em;
    bot.channels.cache.get('831613440480641064').send(
        em = new Discord.MessageEmbed()
        .setTitle(`Command used!`)
        .setDescription(`**Name:** \`\`\`${command.name}\`\`\`\n**User:** \`\`\`${message.author.tag} - (${message.author.id})\`\`\`\n**Guild:** \`\`\`${message.guild.name} - (${message.guild.id})\`\`\`\n**Channel: **\`\`\`${message.channel.name} - (${message.channel.id})\`\`\``)
        .setTimestamp(new Date())
        .setColor('#2f3136')
        .setFooter(bot.user.username, bot.user.avatarURL())
    )
}

})
bot.snipes = new Map();
bot.on('messageDelete', function(message, channel){
    if(message.author.bot) return;
    bot.snipes.set(message.channel.id, {
        content:message.content,
        author:message.author,
        image:message.attachments.first() ? message.attachments.first().proxyURL : null
    })
})
bot.edits = new Map();
bot.on('messageUpdate', function(message,channel){
    if(message.author.bot) return;
    bot.edits.set(message.channel.id, {
        content:message.content,
        author:message.author
    })
})




bot.login(process.env.token);
