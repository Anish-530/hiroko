const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'unban',
    category: 'moderation',
    description: 'Unban an user',
    aliases: [],
    usage: 'hey unban <mention the user you want to unban or put their ID here>',
    run: async(bot, message, args)=>{
        if(!message.member.hasPermission(["BAN_MEMBERS"])) return message.reply("Your roles are too low to use this commaned :(").then(message => message.delete({ timeout: 6000 }));
        if(!message.member.guild.me.hasPermission(['BAN_MEMBERS'])) return message.channel.send("I don\'t have the permission to \`UNBAN MEMBERS\`.\nPlease provide me the following permission to use this command")
        if(!args[0]) return message.reply("You need to mention the user, whom you want to **unban**.\nEx: \`hey unban ID-of-the-user-you-want-to-unban\`").then(message => message.delete({ timeout: 6000 }));
    
    
        let bannedMember;
        

        try{                                                            
            bannedMember = await bot.users.fetch(args[0])
        }catch(e){
            if(!bannedMember) return message.channel.send("I want you to copy the ID of the user to unban!")
        }
    
        
        try {
                await message.guild.fetchBan(args[0])
            } catch(e){
                message.channel.send('This user is not banned.');
                return;
            }
    
        let reason = args.slice(1).join(" ")
        if(!reason) reason = "No reason was provided"
        try {
            message.guild.members.unban(bannedMember, {reason: reason})
            let uban1 = new Discord.MessageEmbed()
            uban1.setAuthor("Unban command used by " + message.author.username, message.author.displayAvatarURL({ dynamic: true, format: 'png' }))
            uban1.setDescription(`**${bannedMember.tag}** was successfully unbanned 🎉.\nReason why **${bannedMember.tag}** was banned : ${reason}`)
            uban1.setColor(0x2ac075)
            uban1.setTimestamp(new Date())
            uban1.setFooter("Hiroko", bot.user.avatarURL())
            message.channel.send(uban1)
            message.react('👍');
        } catch(e) {
            if(e) return message.reply('Seems like I was unable to unban that user. You can try again later')
            message.react('👎');
            console.log(e.message)
        }
    }
}