import axios from 'axios';
import Discord from 'discord.js';

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
}

export {abilityInfo}