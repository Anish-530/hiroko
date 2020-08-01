const Discord = require('discord.js');
const moment = require('moment')
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'userinfo',
    category: 'info',
    description: 'Display the full info of an user',
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
            embed.addField('User\n <a:PG_line:733777240474517684><a:PG_line:733777240474517684>', [
                `**<a:right:733770305599701003> Username:** ${member.user.username}`,
                `**<a:right:733770305599701003> Tag:** #${member.user.discriminator}`,
                `**<a:right:733770305599701003> ID:** ${member.id}`,
                `**<a:right:733770305599701003> Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
                `**<a:right:733770305599701003> Avatar:** [Link to ${member.user.username}'s avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
                `**<a:right:733770305599701003> Account Creation Detail:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
                `**<a:right:733770305599701003> Status:** <a:plexiOffline:733764404587397150> ${statuser}`,
                `**<a:right:733770305599701003> Game:** ${member.user.presence.game || 'Not playing a game right now'}`,
                `\u200b`
            ])
        }
        else if(statuser === "online") {
            embed.addField('User\n <a:PG_line:733777240474517684><a:PG_line:733777240474517684>', [
                `**<a:right:733770305599701003> Username:** ${member.user.username}`,
                `**<a:right:733770305599701003> Tag:** #${member.user.discriminator}`,
                `**<a:right:733770305599701003> ID:** ${member.id}`,
                `**<a:right:733770305599701003> Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
                `**<a:right:733770305599701003> Avatar:** [Link to ${member.user.username}'s avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
                `**<a:right:733770305599701003> Account Creation Detail:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
                `**<a:right:733770305599701003> Status:** <a:plexiOnline:733764280536662026> ${statuser}`,
                `**<a:right:733770305599701003> Game:** ${member.user.presence.game || 'Not playing a game right now'}`,
                `\u200b`
            ])
        }
        else if(statuser === "dnd") {
            embed.addField('User\n <a:PG_line:733777240474517684><a:PG_line:733777240474517684>', [
                `**<a:right:733770305599701003> Username:** ${member.user.username}`,
                `**<a:right:733770305599701003> Tag:** #${member.user.discriminator}`,
                `**<a:right:733770305599701003> ID:** ${member.id}`,
                `**<a:right:733770305599701003> Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
                `**<a:right:733770305599701003> Avatar:** [Link to ${member.user.username}'s avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
                `**<a:right:733770305599701003> Account Creation Detail:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
                `**<a:right:733770305599701003> Status:** <a:plexiDnd:733764473000689745> ${statuser}`,
                `**<a:right:733770305599701003> Game:** ${member.user.presence.game || 'Not playing a game right now'}`,
                `\u200b`
            ])
        }
        else if(statuser === "idle") {
            embed.addField('User\n <a:PG_line:733777240474517684><a:PG_line:733777240474517684>', [
                `**<a:right:733770305599701003> Username:** ${member.user.username}`,
                `**<a:right:733770305599701003> Tag:** #${member.user.discriminator}`,
                `**<a:right:733770305599701003> ID:** ${member.id}`,
                `**<a:right:733770305599701003> Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
                `**<a:right:733770305599701003> Avatar:** [Link to ${member.user.username}'s avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
                `**<a:right:733770305599701003> Account Creation Detail:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
                `**<a:right:733770305599701003> Status:** <:statusIdle:733765872275161219> ${statuser}`,
                `**<a:right:733770305599701003> Game:** ${member.user.presence.game || 'Not playing a game right now'}`,
                `\u200b`
            ])
        }
            embed.addField('Member \n <a:PG_line:733777240474517684><a:PG_line:733777240474517684><a:PG_line:733777240474517684>', [
                `**<a:right:733770305599701003> Highest Role:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
                `**<a:right:733770305599701003> Server Join Date:** ${moment(member.joinedAt).format('LL LTS')}`,
                `**<a:right:733770305599701003> Hoist Role:** ${member.roles.hoist ? member.roles.hoist.name : 'None'}`,
                `**<a:right:733770305599701003> Roles [${roles.length}]:** ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None'}`,
                `\u200b`
            ]);
        return message.channel.send(embed);
    }
}