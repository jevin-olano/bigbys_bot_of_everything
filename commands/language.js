const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
	name: 'language',
    description: 'Outputs info on the chosen language.',
	execute(message) {
        const args = message.content
        .slice(1)
        .trim()
        .split(/ +/g);
        languageInfo(args[1], message);
    },
}

async function languageInfo(input, message) {
    let langURL = "http://www.dnd5eapi.co/api/languages/";
    let langName = input;
    langName = langName.toLowerCase();
    let apiURL = langURL.concat(langName);

    let getLang = async () => {
        let response = await axios.get(apiURL);
        let langStuff = response.data;
        return langStuff;
    }

    let valLang = await getLang();

    const langEmbed = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle(`${valLang.name}`)
        .setThumbnail("https://media-waterdeep.cursecdn.com/attachments/thumbnails/7/836/350/464/04-17.png")
        .addFields(
            {name: `Typical Speakers`, value: `${valLang.type}`},
            {name: `Script`, value: `${valLang.script}`},
            {name: `Description`, value: `${valLang.desc}`},
        )

    message.channel.send(langEmbed)
}