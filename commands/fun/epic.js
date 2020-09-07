const Discord = require('discord.js');
const {MessageEmbed} = require('discord.js');
module.exports={
    name: 'epic',
    category: 'fun',
    description: 'check your epicness',
    aliases: [],
    usage: 'hey epic [mention someone]',
    run: async(bot, message, args)=>{
        let em2c = new MessageEmbed()
        const mentioneddMemberrc = message.mentions.members.first()
        const memberrc = message.mentions.users.first() || message.author;
        let responsesr = [
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
        if (mentioneddMemberrc === message.guild.me) return message.channel.send("A perfect 100% for me tho 😂")
        try{
        let Responsegc = responsesr[Math.floor(Math.random() * (responsesr.length))];
        em2c.setTitle(message.guild.members.cache.get(memberrc.id).displayName + "\'s rate of epicness 🤩")
        em2c.setDescription("You are **" + Responsegc + "**% Epic 💥")
        em2c.setColor(0x2f3136)
        em2c.setThumbnail(memberrc.displayAvatarURL({ dynamic: true, format: 'png' }))
        if (Responsegc === "100") {
            em2c.setFooter("👀 Epicness overloaded!!!!!!!!!!!!!!!!!")
        }
        else if (Responsegc === "1") {
            em2c.setFooter("Ahh well a little epic are anyhow! 🤷‍♀️")
        }
        else if (Responsegc === "50") {
            em2c.setFooter("Ok Half epic atleast! 😁")
        }
        else if (Responsegc === "2") {
            em2c.setFooter("Go on and turn Epic! 😏")
        }
        else if (Responsegc === "0") {
            em2c.setFooter("Not very epic 😒")
        }
        else if (Responsegc === "99") {
            em2c.setFooter("EPIC! 🙌")
        }
        else if (Responsegc === "69") {
            em2c.setFooter("GODLEVEL EPICNESS! ✌")
        }
        message.channel.send(em2c);
        }catch(err){
            return message.channel.send('Oops! Looks like something went wrong, You can try again Later.')
          }
    }
}
