module.exports = {
	name: 'listPlaylists',
	description: 'Displays all existing playist names',
	execute(message) {
        // const serverQueue = message.client.queue.get(message.guild.id);
        let playlistQueue = []; //stores all playlist
        let playlist_name = []; //stores all songs in each playlist

        //check if this playlist already exists
        if (playlistQueue.length == 0){
            playlist_name[0] = args[1]; // sets first element to playlist name
            playlistQueue[0] = playlist_name;
            return;
        }
        
		for(let i = 0; i < playlistQueue.length; i++){
            if(playlistQueue[i][0] == args[1])
                return message.channel.send('This playlist already exists. Use &listSongs to show display the playlist.');
        }
        // creates a new array for the playlist and pushes it at end of playlistQueue
        playlist_name[0] = args[1];
        playlistQueue.push(playlist_name);
        message.react('👍');
	},
};

// playlistQueue:[
// [ playlist_name , song , song ,  ,  , ... ],
// [ playlist_name , song , song ,  ,  , ... ],
// [ playlist_name , song , song ,  ,  , ... ],
// .... ]