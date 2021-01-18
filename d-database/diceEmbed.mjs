import Discord from 'discord.js';
import axios from 'axios';

async function rollDice(input, message) {
    let diceRoll = input;
    diceRoll = diceRoll.toLowerCase();
    let baseURL = "https://rolz.org/api/?";
    let updatedURL = baseURL.concat(diceRoll);
    let finalURL = updatedURL.concat(".json")
    let getRoll = async () => {
        let response = await axios.get(finalURL);
        let roll = response.data;
        return roll;
    }
    let rollValue = await getRoll();

    let rollNum = `${rollValue.result}`

    if (rollNum === "1") {
        const rollEmbed = new Discord.MessageEmbed()
            .setColor(`RED`)
            .setTitle(`You rolled a ${rollValue.result}!`)
            .setDescription(`Die-by-die breakdown: ${rollValue.details}`)
            .setThumbnail("https://www.tribality.com/wp-content/uploads/2020/05/cardslinger-e1589495544623.png")
            .addFields(
                {name: "\u200b", value: "I'm gonna need you to roll 4d6 and drop the lowest roll. For reasons."}
            )
        message.channel.send(rollEmbed)
    } else if (rollNum === "2") {
        const rollEmbed = new Discord.MessageEmbed()
            .setColor(`RED`)
            .setTitle(`You rolled a ${rollValue.result}!`)
            .setDescription(`Die-by-die breakdown: ${rollValue.details}`)
            .setThumbnail("https://www.tribality.com/wp-content/uploads/2020/05/cardslinger-e1589495544623.png")
            .addFields(
                {name: "\u200b", value: "fuck halfling luck :smiling_imp:"}
            )
        message.channel.send(rollEmbed)
    } else if (rollNum === "20") {
        const rollEmbed = new Discord.MessageEmbed()
            .setColor(`RED`)
            .setTitle(`You rolled a ${rollValue.result}!`)
            .setDescription(`Die-by-die breakdown: ${rollValue.details}`)
            .setThumbnail("https://www.tribality.com/wp-content/uploads/2020/05/cardslinger-e1589495544623.png")
            .addFields(
                {name: "\u200b", value: ":star_struck: you're just so good at the game :star_struck:"}
            )
        message.channel.send(rollEmbed)
    } else {
        const rollEmbed = new Discord.MessageEmbed()
            .setColor(`RED`)
            .setTitle(`You rolled a ${rollValue.result}!`)
            .setDescription(`Die-by-die breakdown: ${rollValue.details}`)
            .setThumbnail("https://www.tribality.com/wp-content/uploads/2020/05/cardslinger-e1589495544623.png")
        message.channel.send(rollEmbed)
    }

}

export {rollDice}