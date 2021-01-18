const fs = require('fs')
const Discord = require('discord.js');
const axios = require('axios');
const Client = require('./client/Client');
const {
	prefix,
	token,
} = require('./config.json');

// const {writeNPC, readNPC, deleteNPC} = ('./noteLists/notesNPC.mjs');
// const {writeLocation, readLocation, deleteLocation} = ('./noteLists/notesLocation.mjs');
// const {writeEpisode, readEpisode, deleteEpisode} = ('./noteLists/notesEpisodes.mjs');

// const {helpEmbed} = './d-database/helpEmbed.js';
// const {rollDice} = './d-database/diceEmbed.js';
// const {classInfo} = './d-database/classEmbed.js';
// const {spellInfo} = './d-database/spellEmbed.js';
// const {conditionInfo} = './d-database/condEmbed.js';
// const {skillInfo} = './d-database/skillEmbed.js';
// const {abilityInfo} = './d-database/asEmbed.js';
// const {languageInfo} = './d-database/langEmbed.js';
// const {tellJoke} = './d-database/jokeEmbed.js';

const client = new Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	client.commands.set(command.name, command);
}

console.log(client.commands);

client.once('ready', () => {
	console.log('Ready!');
});

client.once('reconnecting', () => {
	console.log('Reconnecting!');
});

client.once('disconnect', () => {
	console.log('Disconnect!');
});

client.on('message', async message => {

	if (message.content === 'ping') {
        message.reply('pong');
	}
		
	//split(/ +/);
	const args = message.content.slice(prefix.length).split(/ +/);
	let commandName = args.shift().toLowerCase();

		 if(message.content.includes("addNPC"))			{ commandName = "addNPC"; }
	else if(message.content.includes("addQuest"))		{ commandName = "addQuest"; }
	else if(message.content.includes("addLocation"))	{ commandName = "addLocation"; }

	else if(message.content.includes("delNPC"))			{ commandName = "delNPC"; }
	else if(message.content.includes("delQuest"))		{ commandName = "delQuest"; }
	else if(message.content.includes("delLocation"))	{ commandName = "delLocation"; }

	else if(message.content.includes("listNPC"))		{ commandName = "listNPC"; }
	else if(message.content.includes("listQuests"))		{ commandName = "listQuests"; }
	else if(message.content.includes("listLocations"))	{ commandName = "listLocations"; }
	else if(message.content.includes("makePlaylist"))	{ commandName = "makePlaylist"; }
	
	const command = client.commands.get(commandName)

	if (message.author.bot) return;
	if (!message.content.startsWith(prefix)) return;

	try {
		if(commandName == "ban" || commandName == "userinfo") {
			command.execute(message, client);
		} 
		else{
			command.execute(message);
		}
	} catch (error) {
		console.error(error);
		message.reply('There was an error trying to execute that command!');
	}
});


client.login(token);