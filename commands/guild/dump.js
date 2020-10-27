const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'dump',
    category: 'guild',
    description: 'Dump the members, of a specific role',
    aliases: ['roleinfo', 'role', 'ri', 'aboutrole'],
    usage: 'hey dump <role name>',
    run: async(bot, message, args)=>{
        //will add break embed feature, so that, if the characters are above 2048 chars, the embed breaks
        try{
        const role = message.guild.roles.cache.find(
            (role) => role.name.toLowerCase() === args.join(' ') || role.id === args.join(' ')
        );
        if(!args.join(' ')) {
            return message.channel.send(`Provide me at least, with the name of the role`);
        }
        if (!role)
        return message.channel.send(`I am unable find any role by the name, \`${args.join(' ')}\``);
        const ListEmbed = new Discord.MessageEmbed()
        .setTitle(`Users with the \`${role.name}\``)
        .setColor(0x2f3136)
        .setThumbnail(message.guild.iconURL({ dynamic: true, format: 'png' }))
        .setDescription(role.members.map((m) => m.user.tag+` \`${m.user.id}\``).join(`\n`))
        message.channel.send(ListEmbed);
        }catch(err){
            message.channel.send(`Oops! Looks like there\'s an error : \`${err.message}\``)
        }
    }
}
