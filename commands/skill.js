const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
	name: 'skill',
    description: 'Outputs general info on the specified skill. (e.g. \'&class acrobatics\'))',
	execute(message) {
        const args = message.content
        .slice(1)
        .trim()
        .split(/ +/g);
        skillInfo(args[1], message);
    },
}

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