import axios from 'axios';
import Discord from 'discord.js';

async function skillInfo(input, message) {
    let skillsName = input;
    skillsName = skillsName.toLowerCase();
    let skillsURL = "http://www.dnd5eapi.co/api/skills/";
    let apiURL = skillsURL.concat(skillsName);

    let getSkills = async () => {
        let response = await axios.get(apiURL);
        let skillsStuff = response.data;
        return skillsStuff;
    }

    let skillsVal = await getSkills();

    const skillEmbed = new Discord.MessageEmbed()
        .setColor('YELLOW')
        .setTitle(`${skillsVal.name}`)
        .setThumbnail("https://media-waterdeep.cursecdn.com/attachments/thumbnails/3/852/250/341/college-of-swords.png")
        .addFields(
            {name: `Ability Score`, value: `${skillsVal.ability_score.name}`},
            {name: `Description`, value: `${skillsVal.desc}`},
        )

    message.channel.send(skillEmbed);
}

export {skillInfo}