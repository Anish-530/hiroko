const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: '8ball',
    category: 'fun',
    description: 'ask hiroko or the 8ball anything',
    aliases: ['hiroko'],
    usage: 'hey 8ball <question>',
    run: async(bot, message, args)=>{
        let ball = [
            "Hmmmm",
            "Ask later",
            "Yes",
            "No",
            "Ok",
            "Well",
            "Maybe not?",
            "Maybe Yes?",
            "Ask me some other time",
            "Sorry, I can't choose",
            "Go with a yes",
            "Go with a no",
            "Ask Trump about this",
            "Seriously?",
            "Nope",
            "Yep",
            "WTF",
            "WTH",
            "Later",
            "What if no?",
            "What if yes?",
            "Well, no",
            "Well, yes",
            "Noting that down",
            "Don\'t ask me",
            "Ask someone else",
            "No you",
            "bruh -_-",
            "OwO",
            "UwU",
            "0_0",
            "Please?",
            "I don\'t know",
            "Sorry",
            "Huh?",
            "nah!",
            "Go get some rest",
            "Are you nuts?",
            "Jesus Christ",
            "Ask google",
            "Hmm?",
            "My A.I. brain stopped",
            "Sorry, am retarded",
            "Whattttt?",
            "Oh hell no",
            "Hell yeah",
            "I am speechless",
            "Go have something to eat",
            "Uhh?",
            "Yes!",
            "No!",
            "Wtf yes",
            "Wtf no",
            "ok yes",
            "ok no",
        ]
        if(!args[1]) {
            return message.reply("You need to ask me a question!");
        }
        message.channel.send(ball[Math.floor(Math.random() * ball.length)], {
            allowedMentions: {
              parse: []
            }
          });
    }
}