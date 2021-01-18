const Discord = require('discord.js');
module.exports = {
	name: 'queue',
	description: 'See what songs are in the queue',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
		if (!serverQueue) return message.channel.send('There is nothing in the queue.');
        message.react('👍');
		var q = []; // string to print queue
		// message.channel.send(q);
		if ((serverQueue.songs).length == 1){
			q.push(`1.${serverQueue.songs[0].title}`);
			// message.channel.send(`\n 1. ${serverQueue.songs[0].title}`);
		}
		else{
			for(var i = 0; i < (serverQueue.songs).length; i++){
				q.push('\n' + i + `. ${serverQueue.songs[i].title}`);
				// message.channel.send(`\n ${i+1}. ${serverQueue.songs[i].title}`);
			}
		}
		const exampleEmbed = new Discord.MessageEmbed().setTitle('Songs Queued').setColor("PURPLE").setThumbnail("https://i.pinimg.com/originals/78/58/8e/78588e955072639baeae93b9d5f09b80.png");
            for (let i=1; i<q.length; i++) {
                exampleEmbed.addFields( { name: q[i], value: `${serverQueue.songs[i].url}`} ); //"\u200b"
            }
            message.channel.send({ embed: exampleEmbed });
	},
};







// module.exports = {
// 	name: 'queue',
// 	description: 'See what songs are in the queue',
// 	execute(message) {
// 		const serverQueue = message.client.queue.get(message.guild.id);
// 		if (!serverQueue) return message.channel.send('There is nothing in the queue.');
//         message.react('👍');
//         var q = 'Songs Queued'; // string to print queue
// 		message.channel.send(q);
// 		if ((serverQueue.songs).length == 1){
// 			message.channel.send(`\n 1. ${serverQueue.songs[0].title}`);
// 		}
// 		else{
// 			for(var i = 0; i < (serverQueue.songs).length; i++){
// 				message.channel.send(`\n ${i+1}. ${serverQueue.songs[i].title}`);
// 			}
// 		}
// 	},
// };
