const fs = require('fs')
const Discord = require('discord.js');

module.exports = {
    name: 'help-m',
	description: 'List all available commands for your bardic flair.',
	execute(message) {
		const exampleEmbed = new Discord.MessageEmbed().setTitle('Musical Help and Commands').setColor('#bb27cf');
        // exampleEmbed.addFields( { name: '&ban',      value: 'Ban a player (it does not work)' });
        // exampleEmbed.addFields( { name: '&userinfo', value: 'Get information about a user. (this also does not work)' });
        exampleEmbed.addFields( { name: '&play',     value: "Play a song in your channel and/or queue it!" });
        exampleEmbed.addFields( { name: '&stop',     value: 'Stop all songs and clears the queue!' });
        exampleEmbed.addFields( { name: '&loop',     value: 'Loops the current song 10 times' });
        exampleEmbed.addFields( { name: '&skip',     value: 'Skips the song and moves to the next in queue!' });
        exampleEmbed.addFields( { name: '&queue',    value: 'See what songs are in the queue' });
        exampleEmbed.addFields( { name: '&purge',    value: 'Delete the last messages in all chats.' });
        exampleEmbed.addFields( { name: '&help',     value: 'Lists all general available commands' });

		// for (const file of commandFiles) {
		// 	exampleEmbed.addFields( { name: '&', value: `${command.description}` });
		// }
	
		message.channel.send(exampleEmbed);
	},
};