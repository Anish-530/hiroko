const Discord = require('discord.js');
const reactionPages = async (message, author, options, page, retries) => {
    const restartLoop = async () => { await reactionPages(message, author, options, page, retries); }
    const filter = (reaction, user) => {
        if (options.allowOtherUserReactions) {
            return Object.values(options.emojis).includes(reaction.emoji.name);
        } else {
            return Object.values(options.emojis).includes(reaction.emoji.name) && user.id === author.id;
        }
    }
    
    const collectorOptions = {
        max: 1,
        time: (options.timeLimit * 1000),
        errors: ['time']
    }
    
    message.awaitReactions(filter, collectorOptions)
        .then(async (collected) => {
            const reaction = collected.first();
const minPage = 0;
const maxPage = (options.pages.length - 1);


if (reaction.emoji.name === options.emojis.firstPage) {
    // head back to the first page
if (page === minPage) return restartLoop();

page = minPage;
message = await message.edit(options.pages[minPage]);
return restartLoop();
}

if (reaction.emoji.name === options.emojis.previousPage) {
    // move to the previous page
if (page === minPage) return restartLoop();

page--;
message = await message.edit(options.pages[page]);
return restartLoop();
}

if (reaction.emoji.name === options.emojis.stop) {
    // stop listening
return true;
}

if (reaction.emoji.name === options.emojis.delete) {
    // delete the message (also stops listening)
await message.delete();
const helpd = new Discord.MessageEmbed()
helpd.setThumbnail('https://i.imgur.com/JmFQNiz.gif')
helpd.setColor(0x2f3136)
helpd.setTitle('> Help command deleted!')
helpd.setDescription('> This message gets deleted after 10 seconds')
await message.channel.send(helpd).then(message => message.delete({ timeout: 10000 }));
return true;   
}

if (reaction.emoji.name === options.emojis.nextPage) {
    // move to the next page
if (page === maxPage) return restartLoop();

page++;
message = await message.edit(options.pages[page]);
return restartLoop();
}

if (reaction.emoji.name === options.emojis.lastPage) {
   // head forward to the last page
page = maxPage;
message = await message.edit(options.pages[maxPage]);
return restartLoop();      
}

        }).catch(async (error) => {
                if (retries >= options.maximumRetries) {
                    return true;
                } else {
                    retries++;
                    return restartLoop();
                }
        });
}
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'help',
    category: 'info',
    description: 'get a list of all the commands or get details of a specific command',
    aliases: [],
    usage: 'hey help [a specific command]',
    run: async(bot, message, args)=>{
        try{
        if(!args[0]) {
        const emojis = {
            firstPage: '⏮',
            previousPage: '◀',
            delete: '🗑',
            nextPage: '▶',
            lastPage: '⏭'
        }
  
        const pages = [
            {
                embed: {
                    color: 0x2f3136,
                    title: 'Use the :arrow_backward: or :arrow_forward: reactions to navigate through the pages and 🗑 to delete the embed.\nUse \`hey help [command]\` to get more information about a specific command.',
                    fields: [
                        {
                            name: '😂 | FUN',
                            value: `\`hey 8ball\`\n\`hey bold\`\n\`hey clap\`\n\`hey epic\`\n\`hey flip\`\n\`hey hey\`\n\`hey isimp\`\n\`hey megay\`\n\`hey meme\`\n\`hey mesimp\`\n\`hey owofy\`\n\`hey pog\`\n\`hey sayd(say delete)\`\n\`hey say\`\n\`hey search\`\n\`hey spoil\`\n\`hey table\`\n\`hey uwufy\`\n`
                        }
                    ]
                }
            },
            {
                embed: {
                    color: 0x2f3136,
                    title: 'Use the :arrow_backward: or :arrow_forward: reactions to navigate through the pages and 🗑 to delete the embed.\nUse \`hey help [command]\` to get more information about a specific command.',
                    fields: [
                        {
                            name: '🎮 | GAMES',
                            value: `\`hey coindecide\`\n\`hey diceroll\`\n\`hey rps\`\n\`hey td\``
                        }
                    ]
                }
            },
            {
                embed: {
                    color: 0x2f3136,
                    title: 'Use the :arrow_backward: or :arrow_forward: reactions to navigate through the pages and 🗑 to delete the embed.\nUse \`hey help [command]\` to get more information about a specific command.',
                    fields: [
                        {
                            name: '✨ | GUILD',
                            value: `\`hey announcement [New Update]\`\n\`hey emojis\`\n\`hey finduser\`\n\`hey invite\`\n\`hey nick\`\n`
                        }
                    ]
                }
            },
            {
                embed: {
                    color: 0x2f3136,
                    title: 'Use the :arrow_backward: or :arrow_forward: reactions to navigate through the pages and 🗑 to delete the embed.\nUse \`hey help [command]\` to get more information about a specific command.',
                    fields: [
                        {
                            name: '⛰ | IMAGE FUN',
                            value: `\`hey bad\`\n\`hey butterfly\`\n\`hey delete\`\n\`hey fakenitro\`\n\`hey nani\`\n\`hey rip\`\n\`hey simp\`\n`
                        }
                    ]
                }
            },
            {
                embed: {
                    color: 0x2f3136,
                    title: 'Use the :arrow_backward: or :arrow_forward: reactions to navigate through the pages and 🗑 to delete the embed.\nUse \`hey help [command]\` to get more information about a specific command.',
                    fields: [
                        {
                            name: '🤖 | INFO',
                            value: `\`hey botinvite\`\n\`hey dmhelp\`\n\`hey help\`\n\`hey info\`\n\`hey ping\`\n\`hey stats\`\n\`hey supportserver\`\n\`hey time\`\n\`hey uptime\`\n\`hey urban\`\n\`hey userinfo\`\n`
                        }
                    ]
                }
            },
            {
                embed: {
                    color: 0x2f3136,
                    title: 'Use the :arrow_backward: or :arrow_forward: reactions to navigate through the pages and 🗑 to delete the embed.\nUse \`hey help [command]\` to get more information about a specific command.',
                    fields: [
                        {
                            name: '🤝 | INTERACTION',
                            value: `\`hey angry\`\n\`hey annoyed [New Update]\`\n\`hey baka\`\n\`hey blush\`\n\`hey carry\`\n\`hey cry\`\n\`hey confused\`\n\`hey dab\`\n\`hey drink\`\n\`hey explode\`\n\`hey greet\`\n\`hey handhold\`\n\`hey highfive\`\n\`hey hug\`\n\`hey kiss\`\n\`hey laugh\`\n\`hey lick\`\n\`hey nom\`\n\`hey pat\`\n\`hey poke\`\n\`hey pout\`\n\`hey punch\`\n\`hey scream\`\n\`hey shoot\`\n\`hey slap\`\n\`hey sniff\`\n\`hey stare\`\n\`hey stare\`\n\`hey tickle\`\n\`hey wag\`\n\`hey wave\`\n`
                        }
                    ]
                }
            },
            {
                embed: {
                    color: 0x2f3136,
                    title: 'Use the :arrow_backward: or :arrow_forward: reactions to navigate through the pages and 🗑 to delete the embed.\nUse \`hey help [command]\` to get more information about a specific command.',
                    fields: [
                        {
                            name: '🎲 | MISCELLANEOUS',
                            value: `\`hey avatar\`\n\`hey editsnipe\`\n\`hey snipe\``
                        }
                    ]
                }
            },
            {
                embed: {
                    color: 0x2f3136,
                    title: 'Use the :arrow_backward: or :arrow_forward: reactions to navigate through the pages and 🗑 to delete the embed.\nUse \`hey help [command]\` to get more information about a specific command.',
                    fields: [
                        {
                            name: '⚙ | MODERATION',
                            value: `\`hey ban\`\n\`hey clear\`\n\`hey createchannel\`\n\`hey deletechannel\`\n\`hey kick\`\n\`hey unban\`\n`
                        }
                    ]
                }
            },
            {
                embed: {
                    color: 0x2f3136,
                    title: 'Use the :arrow_backward: or :arrow_forward: reactions to navigate through the pages and 🗑 to delete the embed.\nUse \`hey help [command]\` to get more information about a specific command.',
                    fields: [
                        {
                            name: 'This is the last page',
                            value: `\`\`\`More commands are being added everyday\`\`\``
                        },
                        {
                            name: 'Updates(10/2/2020)',
                            value: `\`\`\`Added an Announcement command (Use 'hey announcement' to trigger the command).\nAdded an annoyed interaction command (Use 'hey annoyed' to trigger the command)\`\`\``
                        },
                        {
                            name: 'Vote For me!',
                            value: `[Here](https://top.gg/bot/722729985512833076/vote)`,
                        }
                    ]
                }
            },
        ]
  
        const defaultPage = 0;
        
        const timeLimit = 150000;
        
        const maximumRetries = 3;
        
        const allowOtherUserReactions = false;
        let currentPage = 0;
        let currentRetries = 0;
  
          const msg = await message.channel.send(pages[defaultPage]);
  
          await msg.react(emojis.firstPage);
          await msg.react(emojis.previousPage);
          await msg.react(emojis.delete);
          await msg.react(emojis.nextPage);
          await msg.react(emojis.lastPage);
  
          const options = {
            emojis,
            pages,
            timeLimit,
            maximumRetries,
            allowOtherUserReactions
          }
          await reactionPages(msg, message.author, options, currentPage, currentRetries);
        }else {
            return getCMD(bot, message, args[0]);
        }


    function getCMD(bot, message, input) {
    const embed = new Discord.MessageEmbed()

    const cmd = bot.commands.get(input.toLowerCase()) || bot.commands.get(bot.aliases.get(input.toLowerCase()));
    
    let info = `No information found for command **${input.toLowerCase()}**`;

    if (!cmd) {
        return message.channel.send(embed.setColor("RED").setDescription(info).setFooter('This means that the command you entered was either not found\nor there was mistakes while writing the command\'s name, you can recheck your spelling')).then(message => message.delete({ timeout: 10000 }));
    }
    if (cmd.category) info += `**Category**: ${cmd.category}`;
    if (cmd.name) info = `**Command name**: ${cmd.name}`;
    if (cmd.aliases) info += `\n**Aliases**: ${cmd.aliases.map(a => `\`${a}\``).join(", ")}`;
    if(cmd.timeout) info += `\n**Cooldown**: ${cmd.timeout}s`
    if (cmd.description) info += `\n**Description**: ${cmd.description}`;
    if (cmd.usage) {
        info += `\n**Usage**: ${cmd.usage}`;
        embed.setFooter(`Syntax: <> = required, [] = optional, Note : If no aliases are provided, then that command has no aliases, i.e. no shortcut.`);
    }

    return message.channel.send(embed.setColor(0x2f3136).setDescription(info));
}
    }catch(err){
        return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
      }
}
}
