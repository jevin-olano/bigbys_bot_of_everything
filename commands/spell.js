const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
	name: 'spell',
    description: 'Outputs a spell card for the chosen spell. (e.g. \'&spell dancing-lights)\'))',
	execute(message) {
        const args = message.content
        .slice(1)
        .trim()
        .split(/ +/g);
        spellInfo(args[1], message);
    },
}

async function spellInfo(input, message) {
    let spellName = input;
    spellName = spellName.toLowerCase();
    let baseapiURL = "https://www.dnd5eapi.co/api/spells/";
    let basewikidotURL = "http://dnd5e.wikidot.com/spell:";
    let apiURL = baseapiURL.concat(spellName);
    let wikidotURL = basewikidotURL.concat(spellName);
    let getSpell = async () => {
        let response = await axios.get(apiURL);
        let spell = response.data;
        return spell;
    }
    let spellValue = await getSpell();

    const spellEmbed = new Discord.MessageEmbed()
        .setColor(`RED`)
        .setTitle(`${spellValue.name}`)
        .setURL(wikidotURL)
        .setDescription(`Level ${spellValue.level} ${spellValue.school.index}`)
        .setThumbnail("https://www.gmbinder.com/images/zB4Gz1T.png")
        .addFields(
            {name: `Casting time`, value: `${spellValue.casting_time}`},
            {name: `Range`, value: `${spellValue.range}`},
            {name: `Components`, value: `${spellValue.components}`},
            {name: `Duration`, value: `${spellValue.duration} (concentration: ${spellValue.concentration})`},
            {name: `Description`, value: `${spellValue.desc}`},
            {name: "At higher levels", value: `${spellValue.higher_level}`}
        )

    message.channel.send(spellEmbed)
}