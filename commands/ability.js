const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
	name: 'ability',
    description: 'Outputs info on the chosen abbreviated ability score. (e.g. \'&ability str\')',
	execute(message) {
        const args = message.content
        .slice(1)
        .trim()
        .split(/ +/g);
        abilityInfo(args[1], message);
    },
}

async function abilityInfo(input, message) {
    let abScoreName = input;
    abScoreName = abScoreName.toLowerCase();
    let asURL = "http://www.dnd5eapi.co/api/ability-scores/";
    let apiURL = asURL.concat(abScoreName);

    let getAS = async () => {
        let response = await axios.get(apiURL);
        let AS = response.data;
        return AS;
    }

    let valAS = await getAS();

    const asEmbed = new Discord.MessageEmbed()
        .setColor('BLUE')
        .setTitle(`${valAS.full_name}`)
        .setDescription(`${valAS.desc}`)

    message.channel.send(asEmbed)
};