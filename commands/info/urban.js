const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
const ud = require('urban-dictionary')
module.exports={
    name: 'urban',
    category: 'info',
    description: 'Search for a word in the urban dictionary',
    aliases: ['urbandict', 'ud'],
    usage: 'hey urban <word>',
    run: async(bot, message, args)=>{
        var definition = args.slice(0).join(' ');
        ud.term(definition, (error, entries, tags, sounds) => {
            if (error) {
              console.error(error.message)
            } else {
              console.log(entries[0].word)
              console.log(entries[0].definition)
              console.log(entries[0].example)
            }
          })
           
          // Promise example.
          ud.term(definition).then((result) => {
            const entries = result.entries
            console.log(entries[0].word)
            console.log(entries[0].definition)
            console.log(entries[0].example)
          }).catch((error) => {
                return message.channel.send(`Sorry, Looks like there\'s are error stopping me. Error: ${error.message}`)
          })
    }
}