const fs = require('fs')
const Discord = require('discord.js');

module.exports = {
	name: 'help-c',
	description: 'List all available commands to view the compendium of D&D.',
	execute(message) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('Compendium Help and Commands').setColor('#c44225');
        exampleEmbed.addFields( { name: '&roll ________',       value: 'Roll a die (or many! (max 60 in a single roll)' });
        exampleEmbed.addFields( { name: '&class ________',      value: 'Outputs basic info on the chosen class. (e.g. \'&class paladin\')' });
        exampleEmbed.addFields( { name: '&spell ________',      value: 'Outputs a spell card for the chosen spell. (e.g. \'&spell dancing-lights)\')'});
		exampleEmbed.addFields( { name: '&weapon ________',     value: 'Outputs info on the chosen weapon. (e.g. \'&weapon club\'))' });
		exampleEmbed.addFields( { name: '&skill ________',      value: 'Outputs general info on the specified skill. (e.g. \'&class acrobatics\'))' });
        exampleEmbed.addFields( { name: '&condition ________',  value: 'Outputs info on the chosen status condition.' });
        exampleEmbed.addFields( { name: '&ability ________',    value: 'Outputs info on the chosen abbreviated ability score. (e.g. \'&ability str\'' });
        exampleEmbed.addFields( { name: '&language _________',  value: 'Outputs info on the chosen language.' });
        exampleEmbed.addFields( { name: '&help',            	value: 'Lists all general available commands' });

		// for (const file of commandFiles) {
		// 	exampleEmbed.addFields( { name: '&', value: `${command.description}` });
		// }
	
		message.channel.send(exampleEmbed);
	},
};