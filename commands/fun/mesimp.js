const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'mesimp',
    category: 'fun',
    description: 'Calculate your simpness',
    aliases: ['simp'],
    usage: 'hey mesimp [mention someone]',
    run: async(bot, message, args)=>{
        let em4 = new MessageEmbed()
        const mentioneddMemberr1 = message.mentions.members.first()
        const memberr2 = message.mentions.users.first() || message.author;
        let responses3 = [
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
        if (mentioneddMemberr1 === message.guild.me) return message.channel.send("Unfortunately, I don\'t simp for anyone 🤷‍♀️")
        let Responsegg = responses3[Math.floor(Math.random() * (responses3.length) - 1)];
        em4.setTitle(memberr2.username + "\'s rate of simpness 👌")
        em4.setDescription("You are **" + Responsegg + "**% simp 🏳️‍")
        em4.setColor(0xa958a5)
        em4.setThumbnail(memberr2.displayAvatarURL({ dynamic: true, format: 'png' }))
        if (Responsegg === "100") {
            em4.setFooter("👀 You simp so much! Woah")
        }
        else if (Responsegg === "1") {
            em4.setFooter("However you do simp, better admit it 🤷‍♀️")
        }
        else if (Responsegg === "50") {
            em4.setFooter("Well, you simp half 😁")
        }
        else if (Responsegg === "2") {
            em4.setFooter("Do it again and simp more 😏")
        }
        else if (Responsegg === "0") {
            em4.setFooter("How tf you don\'t simp? Impossible! 😒")
        }
        else if (Responsegg === "99") {
            em4.setFooter("OK SIMPER 🙌")
        }
        else if (Responsegg === "69") {
            em4.setFooter("GODLEVEL SIMPING!AAAAAAAAAAAAAAAAAA! ✌")
        }
        message.channel.send(em4);
    }
}