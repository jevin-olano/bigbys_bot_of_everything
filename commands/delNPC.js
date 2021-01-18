const fs = require('fs')
module.exports = {
	name: 'delNPC',
	description: 'Delete a specified NPC from the list of notable people',
	execute(message) {
		if(fs.existsSync('./commands/noteLists/NPCnames.txt')){
            var data = message.content.slice(8).split("\n").shift();
            var NPClist = fs.readFileSync('./commands/noteLists/NPCnames.txt', 'utf8').split('\n');
            var DESlist = fs.readFileSync('./commands/noteLists/NPCdescs.txt', 'utf8').split('\n');
            for(let l = 0; l < NPClist.length; l++){
                if(NPClist[l] === data){
                    message.react("👍");
                    NPClist.splice(l, 1).shift();           DESlist.splice(l, 1).shift();
                    NPClist = NPClist.join('\n');           DESlist = DESlist.join('\n');
                    const NPCstring = NPClist.toString();   const DESstring = DESlist.toString();
                    fs.writeFile('./commands/noteLists/NPCnames.txt', NPCstring, err => {
                        if (err) { console.error(err); return; }
                    });
                    fs.writeFile('./commands/noteLists/NPCdescs.txt', DESstring, err => {
                        if (err) { console.error(err); return; }
                    });
                }
                else if(l === NPClist.length){
                    message.reply("There is no NPC under that name!");
                    message.react("👎");
                }
            }
        }
        else{
            message.reply("The NPC list is empty!")
        }
	},
};
