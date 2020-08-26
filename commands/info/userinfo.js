const Discord = require('discord.js');
const moment = require('moment')
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'userinfo',
    category: 'info',
    description: 'Display the info of an user',
    timeout: 10000,
    aliases: ['info'],
    usage: 'hey userinfo [mention someone]',
    run: async(bot, message, args)=>{
        const flags = {
            DISCORD_EMPLOYEE: 'Discord Employee',
            DISCORD_PARTNER: 'Discord Partner',
            BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
            BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
            HYPESQUAD_EVENTS: 'HypeSquad Events',
            HOUSE_BRAVERY: 'House of Bravery',
            HOUSE_BRILLIANCE: 'House of Brilliance',
            HOUSE_BALANCE: 'House of Balance',
            EARLY_SUPPORTER: 'Early Supporter',
            TEAM_USER: 'Team User',
            SYSTEM: 'System',
            VERIFIED_BOT: 'Verified Bot',
            VERIFIED_DEVELOPER: 'Verified Bot Developer'
        };
        const member = message.mentions.members.last() || message.member;
        const roles = member.roles.cache
            .sort((a, b) => b.position - a.position)
            .map(role => role.toString())
            .slice(0, -1);
        const userFlags = member.user.flags.toArray();
        const statuser = member.user.presence.status;
        const embed = new MessageEmbed()
            embed.setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
            embed.setColor(member.displayHexColor || 0x2f3136)
            if(statuser === "offline") {
            embed.addField('User', [
                `**❯ Username:** ${member.user.username}`,
                `**❯ Tag:** #${member.user.discriminator}`,
                `**❯ Nickname:** ${message.guild.members.cache.get(member.id).displayName}`,
                `**❯ ID:** ${member.id}`,
                `**❯ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
                `**❯ Avatar:** [Link to ${member.user.username}'s avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
                `**❯ Account Creation Detail:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
                `**❯ Status:** ⚫ ${statuser}`,
                `**❯ Game:** ${member.user.presence.game || 'Not playing a game right now'}`,
                `\u200b`
            ])
        }
        else if(statuser === "online") {
            embed.addField('User', [
                `**❯ Username:** ${member.user.username}`,
                `**❯ Tag:** #${member.user.discriminator}`,
                `**❯ Nickname:** ${message.guild.members.cache.get(member.id).displayName}`,
                `**❯ ID:** ${member.id}`,
                `**❯ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
                `**❯ Avatar:** [Link to ${member.user.username}'s avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
                `**❯ Account Creation Detail:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
                `**❯ Status:** 🟢 ${statuser}`,
                `**❯ Game:** ${member.user.presence.game || 'Not playing a game right now'}`,
                `\u200b`
            ])
        }
        else if(statuser === "dnd") {
            embed.addField('User', [
                `**❯ Username:** ${member.user.username}`,
                `**❯ Tag:** #${member.user.discriminator}`,
                `**❯ Nickname:** ${message.guild.members.cache.get(member.id).displayName}`,
                `**❯ ID:** ${member.id}`,
                `**❯ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
                `**❯ Avatar:** [Link to ${member.user.username}'s avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
                `**❯ Account Creation Detail:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
                `**❯ Status:** 🔴 ${statuser}`,
                `**❯ Game:** ${member.user.presence.game || 'Not playing a game right now'}`,
                `\u200b`
            ])
        }
        else if(statuser === "idle") {
            embed.addField('User', [
                `**❯ Username:** ${member.user.username}`,
                `**❯ Tag:** #${member.user.discriminator}`,
                `**❯ Nickname:** ${message.guild.members.cache.get(member.id).displayName}`,
                `**❯ ID:** ${member.id}`,
                `**❯ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
                `**❯ Avatar:** [Link to ${member.user.username}'s avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
                `**❯ Account Creation Detail:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
                `**❯ Status:** 🟡 ${statuser}`,
                `**❯ Game:** ${member.user.presence.game || 'Not playing a game right now'}`,
                `\u200b`
            ])
        }
            embed.addField('Member', [
                `**❯ Highest Role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
                `**❯ Server Join Date:** ${moment(member.joinedAt).format('LL LTS')}`,
                `**❯ Hoist Role:** ${member.roles.hoist ? member.roles.hoist.name : 'None'}`,
                `**❯ Roles [${roles.length}]:** ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None'}`,
                `\u200b`
            ]);
        return message.channel.send(embed);
    }
}