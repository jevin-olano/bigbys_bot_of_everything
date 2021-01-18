const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
	name: 'weapon',
    description: 'Outputs info on the chosen weapon. (e.g. \'&weapon club\'))',
	execute(message) {
        const args = message.content
        .slice(1)
        .trim()
        .split(/ +/g);
        weaponInfo(args[1], message);
    },
}

async function weaponInfo(input, message) {
    let weaponName = input;
    weaponName = weaponName.toLowerCase();
    let baseURL = "http://www.dnd5eapi.co/api/equipment/";
    let apiURL = baseURL.concat(weaponName);

    let getWeapon = async () => {
        let response = await axios.get(apiURL);
        let weapon = response.data;
        return weapon;
    }

    let weaponValue = await getWeapon();

    const weaponEmbed = new Discord.MessageEmbed()
    .setColor('GRAY')
    .setTitle(`${weaponValue.name}`)
    .setThumbnail("https://i.pinimg.com/originals/9c/39/46/9c39468476ab8de87df717fed81a4339.png")
    .setDescription(`A ${weaponValue.index} deals ${weaponValue.damage.damage_dice} ${weaponValue.damage.damage_type.index} damage.`)
    .addFields(
        {name: `Category`, value: `${weaponValue.category_range}`, inline: false},
        {name: `Weight`, value: `${weaponValue.weight}`, inline: true},
        {name: `Cost`, value: `${weaponValue.cost.quantity} ${weaponValue.cost.unit}`, inline: true}
    )

    message.channel.send(weaponEmbed)
}