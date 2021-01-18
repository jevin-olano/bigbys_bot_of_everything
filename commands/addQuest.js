const fs = require('fs')
module.exports = {
	name: 'addQuest',
	description: 'Add an episode to the quest board',
	execute(message) {
		let writedata = "\n" + message.content.slice(10);
        fs.appendFile('./commands/noteLists/EpisodeNames.txt', writedata, err => {
            if (err) { console.error(err); return; }
        })
        message.react("👍");
	},
};
