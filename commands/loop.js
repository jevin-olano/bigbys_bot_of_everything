module.exports = {
	name: 'loop',
	description: 'Loops the current song 10 times',
	execute(message) {
		const serverQueue = message.client.queue.get(message.guild.id);
        if (!serverQueue) return message.channel.send('Please play a song first.');
        message.react('👍');
		for(var i = 0; i < 9; i++){
            serverQueue.songs.push(serverQueue.songs[i]);
        }
	},
};