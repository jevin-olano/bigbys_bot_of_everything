// import fs from 'fs';
// import Discord from 'discord.js';
// const client = new Discord.Client();

// import {writeNPC, readNPC, deleteNPC} from './commands/notesNPC.mjs';
// import {writeLocation, readLocation, deleteLocation} from './commands/notesLocation.mjs';
// import {writeEpisode, readEpisode, deleteEpisode} from './commands/writeEpisode.mjs';
// import {prefix, token} from './prefixNotes.mjs';

// client.commands = new Discord.Collection();

// const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

// for (const file of commandFiles) {
//     import command from `./commands/${file}`;
// 	client.commands.set(command.name, command);
// }

// client.on('ready', () => { console.log('I am ready!'); });
// client.once('reconnecting', () => {console.log('Reconnecting!'); });
// client.once('disconnect', () => { console.log('Disconnect!');});

// client.on('message', async message => {
//     if (message.content === 'ping') {
//         message.reply('pong');
//     }
//     // NPC list and notes
//     else if(message.content.startsWith(`${prefix}listNPC`)){
//         message.reply(readNPC());
//     }
//     else if(message.content.startsWith(`${prefix}addNPC`)){
//         writeNPC(message);
//     }
//     else if(message.content.startsWith(`${prefix}delNPC`)){
//         deleteNPC(message);
//     }
//     // Locations list and notes
//     else if(message.content.startsWith(`${prefix}listLocations`)){
//         message.reply(readLocation());
//     }
//     else if(message.content.startsWith(`${prefix}addLocation`)){
//         writeLocation(message);
//     }
//     else if(message.content.startsWith(`${prefix}delLocation`)){
//         deleteLocation(message);
//     }
//     // Episode List
//     else if(message.content.startsWith(`${prefix}listQuests`)){
//         message.reply(readEpisode());
//     }
//     else if(message.content.startsWith(`${prefix}addQuest`)){
//         writeEpisode(message);
//     }
//     else if(message.content.startsWith(`${prefix}delQuest`)){
//         deleteEpisode(message);
//     }

//     // music baby
//     const args = message.content.slice(prefix.length).split(/ +/);
// 	const commandName = args.shift().toLowerCase();
// 	const command = client.commands.get(commandName);

// 	if (message.author.bot) return;
// 	if (!message.content.startsWith(prefix)) return;

// 	try {
// 		if(commandName == "ban" || commandName == "userinfo") {
// 			command.execute(message, client);
// 		} else {
// 			command.execute(message);
// 		}
// 	} catch (error) {
// 		console.error(error);
// 		message.reply('There was an error trying to execute that command!');
// 	}
// });


// // if (message.content.startsWith('${prefix}write')) {
// //     write(message);
// //     return;
// // } 
// // else if (message.content.startsWith('${prefix}read')) {
// //     skip(message);
// //     return;
// // }
// // else {
// //     message.channel.send("You need to enter a valid command!");
// // }

// // THIS  MUST  BE  THIS  WAY

// client.login("ODAwMTA1MjQzMTMxOTA0MDIw.YANSEw.S8c8NUNLAAokIxMD3n0RPrPyqM0");