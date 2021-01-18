import Discord from 'discord.js';
import axios from 'axios';

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

export {tellJoke}