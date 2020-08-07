const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
const { manageAPI } = require('tenorjs/src/Tools/Utilities');
module.exports={
    name: 'invite',
    category: 'guild',
    description: 'Create an instant invite of the server, where the command is used',
    timeout: 10000,
    aliases: ['link','inv','serverinvite','servinv'],
    usage: 'hey invite <Max uses of the link>',
    run: async(bot, message, args)=>{
        let max = message.content.toLowerCase().substring(11);
        if(isNaN(max)) return message.channel.send("That\'s not a number, you have provided")
        if(!max) return message.channel.send("Please specify the number of invite uses you want for your invite link.\n**Example** : \`hey invite 23\`\n**Note** : \`You can write 0 for infinite uses *hey invite 0*\`")
            let invite = await message.channel.createInvite( 
            {
              maxAge: 0,
              maxUses: max
            },
          )
          .catch(console.log);
          
            message.reply(invite ? `Here's your invite: ${invite} ` : "There has been an error during the creation of the invite.");
    }
}