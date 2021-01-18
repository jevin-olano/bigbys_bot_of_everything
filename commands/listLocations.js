const fs = require('fs')
const Discord = require('discord.js');
module.exports = {
	name: 'listLocations',
	description: 'Print out the list of all notable locations',
	execute(message) {
		if(fs.existsSync('./commands/noteLists/LocationNames.txt')){
            const nameBuf = fs.readFileSync('./commands/noteLists/LocationNames.txt', 'utf8');
            const nameArray = nameBuf.toString().split('\n');
            const descBuf = fs.readFileSync('./commands/noteLists/LocationDescs.txt', 'utf8');
            const descArray = descBuf.toString().split('\n');

            const exampleEmbed = new Discord.MessageEmbed().setTitle('Notable Locations We Know Of').setColor('#3f9153');
            for (let i=1; i<nameArray.length; i++) {
                exampleEmbed.addFields( { name: nameArray[i], value: descArray[i] });
            }
            message.react("🗺️");
            message.channel.send({ embed: exampleEmbed });
        }
        else{
            message.reply("Your map is empty!");
        }       
	},
};