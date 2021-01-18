const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
	name: 'condition',
    description: 'Outputs info on the chosen status condition.)',
	execute(message) {
        const args = message.content
        .slice(1)
        .trim()
        .split(/ +/g);
        conditionInfo(args[1], message);
    },
}

async function conditionInfo(input, message) {
    let conditionsName = input;
    conditionsName = conditionsName.toLowerCase();
    let conditionsURL = "http://www.dnd5eapi.co/api/conditions/";
    let apiURL = conditionsURL.concat(conditionsName);

    let getConditions = async () => {
        let response = await axios.get(apiURL);
        let conditionsStuff = response.data;
        return conditionsStuff;
    }

    let conditionsVal = await getConditions();

    const conditionEmbed = new Discord.MessageEmbed()
        .setColor("PURPLE")
        .setTitle(`${conditionsVal.name}`)
        .setDescription( `${conditionsVal.desc}`)
        .setThumbnail("https://media-waterdeep.cursecdn.com/attachments/thumbnails/3/292/850/914/c5-10.png")

    message.channel.send(conditionEmbed)
}