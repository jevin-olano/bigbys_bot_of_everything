const fs = require('fs')
const Discord = require('discord.js');

module.exports = {
	name: 'help-n',
	description: 'List all available commands for your notetaking needs.',
	execute(message) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('Noteworthy Help and Commands').setColor('#874608');
        exampleEmbed.addFields( { name: '&addNPC ________',     value: 'Take note of an interesting NPC and a brief dxescription' });
        exampleEmbed.addFields( { name: '&addLocation ________',value: 'Take note of an amazing new place and a brief description' });
        exampleEmbed.addFields( { name: '&addQuest ________',   value: 'Take note of your most recent quest' });
        exampleEmbed.addFields( { name: '&delNPC ________',     value: 'Remove an NPC from your notes' });
        exampleEmbed.addFields( { name: '&delLocation ________',value: 'Remove a location from your notes' });
        exampleEmbed.addFields( { name: '&delQuest ________',   value: 'Remove an quest from the board' });
        exampleEmbed.addFields( { name: '&listNPC',             value: 'See a list of all your noteworthy people' });
        exampleEmbed.addFields( { name: '&listLocations',       value: 'See a list of all your noteworthy locations' });
        exampleEmbed.addFields( { name: '&listQuests',          value: 'Check out the Beregost quest board' });
        exampleEmbed.addFields( { name: '&help',                value: 'Lists all general available commands' });

		// for (const file of commandFiles) {
		// 	exampleEmbed.addFields( { name: '&', value: `${command.description}` });
		// }
	
		message.channel.send(exampleEmbed);
	},
};