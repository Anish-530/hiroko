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
        if(!definition) return message.channel.send("Give a word to search for atleast :/")
        const screammm = await message.channel.send("<a:plexiOffline:733764404587397150>")
        try{
        ud.term(definition, (error, entries, tags, sounds) => {
            if (error) {
              return screammm.edit(`Sorry, Looks like I was unable to find the meaning of the word **${definition}**`)
            } else {
              let ur = new Discord.MessageEmbed()
              .setDescription(`**WORD : **${entries[0].word}\n\n**DEFINATION : **\n${entries[0].definition}\n\n**EXAMPLE : **\n${entries[0].example}\n\n**VOTINGS : ** 👍 = ${entries[0].thumbs_up}  •  👎 = ${entries[0].thumbs_down}`)
              .setColor(0x2f3136)
              .setTitle('Urban Dictionary')
              .setTimestamp(new Date())
              .setFooter(`Requested By ${message.guild.members.cache.get(message.author.id).displayName}`, message.author.displayAvatarURL({ dynamic: true }))
              return screammm.edit('\t', ur)
            }
          })
        }catch(err){
          return screammm.edit("\t",'Oops! Looks like something went wrong, You can try again Later.')
        }
    }
}