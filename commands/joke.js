const axios = require('axios');
const Discord = require('discord.js');

module.exports = {
	name: 'joke',
    description: 'AGAP will tell you a joke.',
	execute(message) {
        const args = message.content
        .slice(1)
        .trim()
        .split(/ +/g);
        tellJoke(message);
    },
}

async function tellJoke(message) {
    let getJoke = async () => {
        let response = await axios.get("https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious,racist,sexist,explicit&type=twopart");
        let joke = response.data;
        return joke;
    }
    let jokeValue = await getJoke();

    const attachment = new Discord.MessageAttachment("./blood.jpg", "blood.jpg")
    
    const jokeEmbed = new Discord.MessageEmbed()
        .setColor(`RED`)
        .setTitle(`AGAP says ...`)
        .setDescription(`${jokeValue.setup} \n \n ${jokeValue.delivery}`)
        .attachFiles(attachment)
        .setThumbnail("attachment://blood.jpg")
    
    message.channel.send(jokeEmbed)
}