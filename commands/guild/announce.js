const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'announce',
    category: 'guild',
    description: 'A simple, yet very effective announce command',
    aliases: ['ac'],
    usage: 'hey announce',
    run: async(bot, message, args)=>{
        try {
            if (!message.member.hasPermission('MANAGE_MESSAGES'))
                return message.channel.send("You don\'t have the permission to use this command.");
            let questionMessage;
            let collected;
            let messageFilter = (m) => m.author.id === message.author.id;
            let chan;
            let color;
            let title;
            let description;
            let image;
            let thumbnail;
            let footer;
            let format;
            async function verifyChannel() {
                return new Promise(async (resolve, reject) => {
                    collected = await message.channel.awaitMessages(
                        messageFilter,
                        { max: 1, time: 60000 },
                    );
                    if (collected.size === 0) reject(`Timeout`);
                    else if (collected.first().mentions.channels.size === 0) {
                        if (
                            collected.first().content.toLowerCase() === 'cancel'
                        ) {
                            await questionMessage.delete();
                            await collected.first().delete();
                            reject(`Exiting`);
                        } else {
                            const erEmbed = new MessageEmbed()
                                .setColor(0x2f3136)
                                .setTitle(`Error!`)
                                .setDescription(
                                    `Mention a channel for me to send the announcement there!`,
                                )
                                .setTimestamp();
                            let error = await message.channel.send(erEmbed);
                            await collected.first().delete();
                            error.delete({ timeout: 5000 });
                            resolve(verifyChannel());
                        }
                    } else {
                        await questionMessage.delete();
                        await collected.first().delete();
                        resolve(collected.first().mentions.channels.first().id);
                    }
                });
            }
            const chanEmbed = new MessageEmbed()
                .setColor(0x2f3136)
                .setTitle(`Step 1: Channel`)
                .setDescription(
                    `Please mention the channel you would like me, to announce in to be sent in, or write \`cancel\` if you wish to exit setup.`,
                )
                .setFooter(`Step 1 of 8`)
                .setTimestamp();
            questionMessage = await message.channel.send(chanEmbed);
            try {
                chan = await verifyChannel();
            } catch (e) {
                if (e === `Exiting`) {
                    const cEmbed = new MessageEmbed()
                        .setColor(0x2f3136)
                        .setTitle(`Cancelled!`)
                        .setDescription(`Your announcement setup has been cancelled.`)
                        .setFooter('This message gets deleted after 10 seconds')
                        .setTimestamp();
                    await message.delete();
                    return message.channel.send(cEmbed).then(message => message.delete({ timeout: 10000 }));
                } else if (e === `Timeout`) {
                    const tEmbed = new MessageEmbed()
                        .setColor(0x2f3136)
                        .setTitle(`Timed out!`)
                        .setDescription(
                            `Your announcement setup has timed out. Please run the command again.`,
                        )
                        .setTimestamp();
                    await questionMessage.delete();
                    await message.channel.send(tEmbed);
                    return message.delete();
                }
            }
            const colorEmbed = new MessageEmbed()
                .setColor(0x2f3136)
                .setTitle(`Step 2: Color`)
                .setDescription(
                    `Tell me a color name or give me a hex code of a color, for your announcement to be, write \`skip\` if you don't want a color, or \`cancel\` if you wish to exit the setup.`,
                )
                .addField(`Example:`, `\`red\` or \`#cb42f5\``, true)
                .setFooter(`Step 2 of 8`)
                .setTimestamp();
            questionMessage = await message.channel.send(colorEmbed);
            collected = await message.channel.awaitMessages(messageFilter, {
                max: 1,
                time: 90000,
            });
            if (collected.size === 0) {
                const tEmbed = new MessageEmbed()
                    .setColor(0x2f3136)
                    .setTitle(`Timed out!`)
                    .setDescription(
                        `Your announcement setup has timed out. Please run the command again.`,
                    )
                    .setTimestamp();
                await questionMessage.delete();
                await message.channel.send(tEmbed);
                return message.delete();
            }
            if (collected.first().content.toLowerCase() === 'skip')
                color = 0x2f3136;
            else if (collected.first().content.toLowerCase() === 'cancel') {
                const cEmbed = new MessageEmbed()
                    .setColor(0x2f3136)
                    .setTitle(`Cancelled!`)
                    .setDescription(`Your announcement setup has been cancelled.`)
                    .setTimestamp();
                await collected.first().delete();
                await questionMessage.delete();
                await message.delete();
                return message.channel.send(cEmbed).then(message => message.delete({ timeout: 10000 }));
            } else color = collected.first().content;
            await collected.first().delete();
            await questionMessage.delete();

            const titEmbed = new MessageEmbed()
                .setColor(0x2f3136)
                .setTitle(`Step 3: Title`)
                .setDescription(
                    `Tell me a **title** for the announcement, write \`skip\` if you don't want a title, or \`cancel\` if you wish to exit setup.`,
                )
                .setFooter(`Step 3 of 8`)
                .setTimestamp();
            questionMessage = await message.channel.send(titEmbed);
            collected = await message.channel.awaitMessages(messageFilter, {
                max: 1,
                time: 90000,
            });
            if (collected.size === 0) {
                const tEmbed = new MessageEmbed()
                    .setColor(0x2f3136)
                    .setTitle(`Timed out!`)
                    .setDescription(
                        `Your announcement setup has timed out. Please run the command again.`,
                    )
                    .setTimestamp();
                await questionMessage.delete();
                await message.channel.send(tEmbed);
                return message.delete();
            }
            if (collected.first().content.toLowerCase() === 'skip') title = '';
            else if (collected.first().content.toLowerCase() === 'cancel') {
                const cEmbed = new MessageEmbed()
                    .setColor(0x2f3136)
                    .setTitle(`Cancelled!`)
                    .setDescription(`Your announcement setup has been cancelled.`)
                    .setTimestamp();
                await collected.first().delete();
                await questionMessage.delete();
                await message.delete();
                return message.channel.send(cEmbed);
            } else title = collected.first().content;
            await collected.first().delete();
            await questionMessage.delete();
            const desEmbed = new MessageEmbed()
                .setColor(0x2f3136)
                .setTitle(`Step 4: Description`)
                .setDescription(
                    `Tell me the **description** for your announcement, write \`skip\` if you don't want a description, or \`cancel\` if you wish to exit setup.`,
                )
                .setFooter(`Step 4 of 8`)
                .setTimestamp();
            questionMessage = await message.channel.send(desEmbed);
            collected = await message.channel.awaitMessages(messageFilter, {
                max: 1,
                time: 90000,
            });
            if (collected.size === 0) {
                const tEmbed = new MessageEmbed()
                    .setColor(0x2f3136)
                    .setTitle(`Timed out!`)
                    .setDescription(
                        `Your announcement setup has timed out. Please run the command again.`,
                    )
                    .setTimestamp();
                await questionMessage.delete();
                await message.channel.send(tEmbed);
                return message.delete();
            }
            if (collected.first().content.toLowerCase() === 'skip')
                description = '';
            else if (collected.first().content.toLowerCase() === 'cancel') {
                const cEmbed = new MessageEmbed()
                    .setColor(0x2f3136)
                    .setTitle(`Cancelled!`)
                    .setDescription(`Your announcement setup has been cancelled.`)
                    .setTimestamp();
                await collected.first().delete();
                await questionMessage.delete();
                await message.delete();
                return message.channel.send(cEmbed);
            } else description = collected.first().content;
            await collected.first().delete();
            await questionMessage.delete();
            const deEmbed = new MessageEmbed()
            .setColor(0x2f3136)
            .setTitle(`Step 5: Description Text Format`)
            .setDescription(`Tell me the **text format** of your description, you want, for your announcement, write \`skip\` if you want your description, normal without formatted text, or \`cancel\` if you wish to exit setup.\n\nExample of every text format :-\n1. **Bold**\n2. *Italic*\n3. \`Block Text\`\n4. \`\`\`Code Block\`\`\`\n5. __Underline__\n6. ***Italic Bold***`)
            .setFooter(`Step 5 of 8`)
            .setTimestamp();
        questionMessage = await message.channel.send(deEmbed);
        collected = await message.channel.awaitMessages(messageFilter, {
            max: 1,
            time: 90000,
        });
        if (collected.size === 0) {
            const tmbed = new MessageEmbed()
                .setColor(0x2f3136)
                .setTitle(`Timed out!`)
                .setDescription(
                    `Your announcement setup has timed out. Please run the command again.`,
                )
                .setTimestamp();
            await questionMessage.delete();
            await message.channel.send(tmbed);
            return message.delete();
        }
        if (collected.first().content.toLowerCase() === 'bold'){
            format = `**${description}**`;
        }
        else if (collected.first().content.toLowerCase() === 'italic'){
            format = `*${description}*`;
        }
        else if (collected.first().content.toLowerCase() === 'block text'){
            format = `\`${description}\``;
        }
        else if (collected.first().content.toLowerCase() === 'code block'){
            format = `\`\`\`${description}\`\`\``;
        }
        else if (collected.first().content.toLowerCase() === 'underline'){
            format = `__${description}__`;
        }
        else if (collected.first().content.toLowerCase() === 'italic bold'){
            format = `***${description}***`;
        }
        else if (collected.first().content.toLowerCase() === 'skip')
            format = `${description}`;
        else if (collected.first().content.toLowerCase() === 'cancel') {
            const cmbed = new MessageEmbed()
                .setColor(0x2f3136)
                .setTitle(`Cancelled!`)
                .setDescription(`Your announcement setup has been cancelled.`)
                .setTimestamp();
            await collected.first().delete();
            await questionMessage.delete();
            await message.delete();
            return message.channel.send(cmbed);
        } else description = collected.first().content;
        await collected.first().delete();
        await questionMessage.delete();
            const imageEmbed = new MessageEmbed()
                .setColor(0x2f3136)
                .setTitle(`Step 6: Image`)
                .setDescription(
                    `Provide me an **URL** of an **image** for your announcement to have, write \`skip\` if you don't want to use an **image**, or \`cancel\` if you wish to exit setup.`,
                )
                .setFooter(`Step 6 of 8`)
                .setTimestamp();
            questionMessage = await message.channel.send(imageEmbed);
            collected = await message.channel.awaitMessages(messageFilter, {
                max: 1,
                time: 90000,
            });
            if (collected.size === 0) {
                const tEmbed = new MessageEmbed()
                    .setColor(0x2f3136)
                    .setTitle(`Timed out!`)
                    .setDescription(
                        `Your announcement setup has timed out. Please run the command again.`,
                    )
                    .setTimestamp();
                await questionMessage.delete();
                await message.channel.send(tEmbed);
                return message.delete();
            }
            if (collected.first().content.toLowerCase() === 'skip') image = '';
            else if (collected.first().content.toLowerCase() === 'cancel') {
                const cEmbed = new MessageEmbed()
                    .setColor(0x2f3136)
                    .setTitle(`Cancelled!`)
                    .setDescription(`Your announcement setup has been cancelled.`)
                    .setTimestamp();
                await collected.first().delete();
                await questionMessage.delete();
                await message.delete();
                return message.channel.send(cEmbed);
            } else image = collected.first().content;
            await collected.first().delete();
            await questionMessage.delete();

            const thumbEmbed = new MessageEmbed()
                .setColor(0x2f3136)
                .setTitle(`Step 7: Thumbnail`)
                .setDescription(
                    `Please select an **URL** of an **image** for your annoucement, to have a **thumbnail**, write \`skip\` if you don't want a **thumbnail**, or \`cancel\` if you wish to exit setup.`,
                )
                .setFooter(`Step 7 of 8`)
                .setTimestamp();
            questionMessage = await message.channel.send(thumbEmbed);
            collected = await message.channel.awaitMessages(messageFilter, {
                max: 1,
                time: 90000,
            });
            if (collected.size === 0) {
                const tEmbed = new MessageEmbed()
                    .setColor(0x2f3136)
                    .setTitle(`Timed out!`)
                    .setDescription(
                        `Your announcement setup has timed out. Please run the command again.`,
                    )
                    .setTimestamp();
                await questionMessage.delete();
                await message.channel.send(tEmbed);
                return message.delete();
            }
            if (collected.first().content.toLowerCase() === 'skip')
                thumbnail = '';
            else if (collected.first().content.toLowerCase() === 'cancel') {
                const cEmbed = new MessageEmbed()
                    .setColor(0x2f3136)
                    .setTitle(`Cancelled!`)
                    .setDescription(`Your announcement setup has been cancelled.`)
                    .setTimestamp();
                await collected.first().delete();
                await questionMessage.delete();
                await message.delete();
                return message.channel.send(cEmbed);
            } else thumbnail = collected.first().content;
            await collected.first().delete();
            await questionMessage.delete();

            const footEmbed = new MessageEmbed()
                .setColor(0x2f3136)
                .setTitle(`Step 8: Footer`)
                .setDescription(
                    `Provide me a **footer**, for your announcement to have, write \`skip\` if you don't want a **footer**, or \`cancel\` if you wish to exit setup.`,
                )
                .setFooter(`Step 8 of 8`)
                .setTimestamp();
            questionMessage = await message.channel.send(footEmbed);
            collected = await message.channel.awaitMessages(messageFilter, {
                max: 1,
                time: 90000,
            });
            if (collected.size === 0) {
                const tEmbed = new MessageEmbed()
                    .setColor(0x2f3136)
                    .setTitle(`Timed out!`)
                    .setDescription(
                        `Your announcement setup has timed out. Please run the command again.`,
                    )
                    .setTimestamp();
                await questionMessage.delete();
                await message.channel.send(tEmbed);
                return message.delete();
            }
            if (collected.first().content.toLowerCase() === 'skip') footer = '';
            else if (collected.first().content.toLowerCase() === 'cancel') {
                const cEmbed = new MessageEmbed()
                    .setColor(0x2f3136)
                    .setTitle(`Cancelled!`)
                    .setDescription(`Your announcement setup has been cancelled.`)
                    .setTimestamp();
                await collected.first().delete();
                await questionMessage.delete();
                await message.delete();
                return message.channel.send(cEmbed);
            } else footer = collected.first().content;
            await collected.first().delete();
            await questionMessage.delete();

            const fEmbed = new MessageEmbed()
                .setColor(0x2f3136)
                .setTitle(`Success!`)
                .setDescription(`Your announcement has been created!`)
                .setTimestamp();
            await message.channel.send(fEmbed);
            const embed = new MessageEmbed()
                .setColor(`${color.toUpperCase()}`)
                .setTitle(title)
                .setDescription(format)
                .setThumbnail((url = thumbnail))
                .setFooter(footer)
                .setImage((url = image));
            await bot.channels.cache.get(chan).send(embed);
            message.delete();
        } catch (e) {
            console.log(e);
            return message.channel.send(`Oops, Looks like there\'s an error here : \`${e.message}\``);
        }
    }
}