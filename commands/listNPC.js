const fs = require('fs');
const Discord = require('discord.js');
module.exports = {
	name: 'listNPC',
	description: 'Print out all noted NPCs',
	execute(message) {
		if(fs.existsSync('./commands/noteLists/NPCnames.txt')){
            const nameBuf = fs.readFileSync('./commands/noteLists/NPCnames.txt', 'utf8');
            const nameArray = nameBuf.toString().split('\n');
            const descBuf = fs.readFileSync('./commands/noteLists/NPCdescs.txt', 'utf8');
            const descArray = descBuf.toString().split('\n');

            const exampleEmbed = new Discord.MessageEmbed().setTitle('Notable NPCs We\'ve Met').setColor('#81bdeb');
            for (let i=1; i<nameArray.length; i++) {
                exampleEmbed.addFields( { name: nameArray[i], value: descArray[i] });
            }
            message.react("👸🏼");
            message.channel.send({ embed: exampleEmbed });
        }
        else{
            message.reply("Your NPC list does not exist");
        }      
	},
};
