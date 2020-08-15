const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'megay',
    category: 'fun',
    description: 'Calculate your gayness',
    aliases: ['gay'],
    usage: 'hey megay [mention someone]',
    run: async(bot, message, args)=>{
        let em2 = new MessageEmbed()
        const mentioneddMemberr = message.mentions.members.first()
        const memberr1 = message.mentions.users.first() || message.author;
        let responses2 = [
            "0",
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
            "31",
            "32",
            "33",
            "34",
            "35",
            "36",
            "37",
            "38",
            "39",
            "40",
            "41",
            "42",
            "43",
            "44",
            "45",
            "46",
            "47",
            "48",
            "49",
            "50",
            "51",
            "52",
            "53",
            "54",
            "55",
            "56",
            "57",
            "58",
            "59",
            "60",
            "61",
            "62",
            "63",
            "64",
            "65",
            "66",
            "67",
            "68",
            "69",
            "70",
            "71",
            "72",
            "73",
            "74",
            "75",
            "76",
            "77",
            "78",
            "79",
            "80",
            "81",
            "82",
            "83",
            "84",
            "85",
            "86",
            "87",
            "88",
            "89",
            "90",
            "91",
            "92",
            "93",
            "94",
            "95",
            "96",
            "97",
            "98",
            "99",
            "100",
            "101"
        ]
        if (mentioneddMemberr === message.guild.me) return message.channel.send("AM NOT GAY!!😡")
        let Responseg = responses2[Math.floor(Math.random() * (responses2.length) - 1)];
        em2.setTitle(memberr1.username + "\'s rate of gayness 👌")
        em2.setDescription("You are **" + Responseg + "**% gay 🏳️‍🌈")
        em2.setColor(0x2f3136)
        em2.setThumbnail(memberr1.displayAvatarURL({ dynamic: true, format: 'png' }))
        if (Responseg === "100") {
            em2.setFooter("👀 Hmm...A man of gay I see")
        }
        else if (Responseg === "1") {
            em2.setFooter("Ahh well a little gay are anyhow! 🤷‍♀️")
        }
        else if (Responseg === "50") {
            em2.setFooter("Ok Half gay atleast! 😁")
        }
        else if (Responseg === "2") {
            em2.setFooter("Go on and turn into a gay! 😏")
        }
        else if (Responseg === "0") {
            em2.setFooter("Ok you aren\'t a gay, Now calm tf down 😒")
        }
        else if (Responseg === "99") {
            em2.setFooter("No offence! 🙌")
        }
        else if (Responseg === "69") {
            em2.setFooter("GODLEVEL! ✌")
        }
        message.channel.send(em2);
    }
}