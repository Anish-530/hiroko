const Discord = require('discord.js');
const fs = require('fs');
const W = require('../../Wasted')
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'kill',
    category: 'interaction',
    description: 'kill someone',
    aliases: [],
    usage: 'hey kill [user]',
    run: async(bot, message, args)=>{
        const mentionedddMember1112 = message.mentions.users.first()
        const wasted = W
        const waster = wasted[Math.floor(Math.random() * wasted.length)];
        message.channel.send ({files: ["./images/" + wasted + ".gif"]})
        }
    }