module.exports = {
	name: 'makePlaylist',
	description: 'Allows you to set your playlist name. Do not use spaces. (e.g. my_spoopy_playlist)',
	execute(message) {
        const args = message.content.split(" "); 

        //the thingy resets everything you call this so i need to put
        //something in the bigsby thing ahhhhhhhh
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

        // for testing
        for(let i = 0; i < playlistQueue.length; i++){
            var q = playlistQueue[i][0];
            message.channel.send(q);
        }
        
	},
};

// playlistQueue:[
// [ playlist_name , song , song ,  ,  , ... ],
// [ playlist_name , song , song ,  ,  , ... ],
// [ playlist_name , song , song ,  ,  , ... ],
// .... ]