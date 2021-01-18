const fs = require('fs')
const Discord = require('discord.js');

module.exports = {
	name: 'help',
	description: 'List all available commands.',
	execute(message) {
		const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
		const attachment = new Discord.MessageAttachment("./gang.jpg", "gang.jpg");
		const exampleEmbed = new Discord.MessageEmbed().setTitle('General Help and Commands').setColor('#000000').attachFiles(attachment).setThumbnail("attachment://gang.jpg");
		exampleEmbed.addFields( { name: '&help',  value: 'Lists all available general commands' });
		exampleEmbed.addFields( { name: '&help-m', value: 'Lists all available music-related commands' });
		exampleEmbed.addFields( { name: '&help-n', value: 'Lists all available notetaking commands' });
		exampleEmbed.addFields( { name: '&help-c', value: 'Lists all available D&D-player commands' });
		exampleEmbed.addFields( { name: '&joke',  value: 'AGAP will tell you a joke.' });
		
		// for (const file of commandFiles) {
		// 	const command = require(`./${file}`);
		// 	// str += `${command.name}\nDescription: ${command.description} \n\n`;
		// 	exampleEmbed.addFields( { name: `&${command.name}`, value: `${command.description}` });
		// }
	
		message.channel.send(exampleEmbed);
	},
};