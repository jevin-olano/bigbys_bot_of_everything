import axios from 'axios';
import Discord from 'discord.js';

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

export {conditionInfo}