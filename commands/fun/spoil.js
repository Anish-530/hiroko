const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'spoil',
    category: 'fun',
    description: 'spoil something',
    aliases: ['sp', 'sl', 'spoil'],
    usage: 'hey spoil <your Text>',
    run: async(bot, message, args)=>{
    const aaa = args.slice(0).join(' ').split('').join('||||');
    try{
    if(!aaa) return message.channel.send("Give me something to spoil it")
    const bbb = aaa.split('|| ||').join('|| ||');
    const ccc = '||' + bbb + '||';
    message.delete()
    message.channel.send(ccc, {
        allowedMentions: {
          parse: []
        }
      });
    }catch(err){
      return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
    }
    }
}