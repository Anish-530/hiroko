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
    name: 'dmhelp',
    category: 'info',
    description: 'get a list of all the commands straight to your DMs',
    aliases: ['dh'],
    usage: 'hey dmhelp',
    run: async(bot, message, args)=>{
        message.react('📧');
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
                            value: `\`hey emojis\`\n\`hey finduser\`\n\`hey invite\`\n\`hey nick\`\n`
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
                            value: `\`hey angry\`\n\`hey baka\`\n\`hey blush\`\n\`hey carry\`\n\`hey confused\`\n\`hey cry\`\n\`hey dab\`\n\`hey drink\`\n\`hey explode\`\n\`hey greet\`\n\`hey handhold\`\n\`hey highfive\`\n\`hey hug\`\n\`hey kiss\`\n\`hey laugh\`\n\`hey lick\`\n\`hey nom\`\n\`hey pat\`\n\`hey poke\`\n\`hey pout\`\n\`hey punch\`\n\`hey scream\`\n\`hey shoot\`\n\`hey slap\`\n\`hey sniff\`\n\`hey stare\`\n\`hey tickle\`\n\`hey wag\`\n\`hey wave\`\n`
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
  
          const msg = await message.author.send(pages[defaultPage]);
  
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
        }
    }
}