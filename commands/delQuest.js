const fs = require('fs')
module.exports = {
	name: 'delQuest',
	description: 'Delete a specified quest from the quest board',
	execute(message) {
		if(fs.existsSync('./commands/noteLists/EpisodeNames.txt')){
            var data = message.content.slice(10).split("\n").shift();
            var NPClist = fs.readFileSync('./commands/noteLists/EpisodeNames.txt', 'utf8').split('\n');
            for(let l = 1; l < NPClist.length; l++){
                if(NPClist[l] === data){
                    NPClist.length < 0 ? message.reply("The quest board is empty!") : message.react("👍");
                    NPClist.splice(l, 1).shift();
                    NPClist = NPClist.join('\n');
                    const NPCstring = NPClist.toString();
                    fs.writeFile('./commands/noteLists/EpisodeNames.txt', NPCstring, err => {
                        if (err) { console.error(err); return; }
                    });
                }
                else if(l === NPClist.length-1){
                    message.reply("There is no quest under that name!");
                    message.react("👎");
                }
            }
        }
        else{
            message.reply("The quest board is empty!");
        }
	},
};
