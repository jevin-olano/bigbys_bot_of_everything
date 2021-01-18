const fs = require('fs')
module.exports = {
	name: 'addNPC',
	description: 'Add an NPC to the list of notable people',
	execute(message) {
        let writedata = message.content.slice(8);

        if(writedata.includes("::")){ 
            writedata = writedata.split("::", 2);
            fs.appendFile('./commands/noteLists/NPCnames.txt', "\n" + (writedata[0]).trim(), err => {
                if (err) { console.error(err); return; }
            })
            message.react("👍");

            fs.appendFile('./commands/noteLists/NPCdescs.txt', "\n" + (writedata[1]).trim(), err => {
                if (err) { console.error(err); return; }
            })
            message.react("👍");
        }
        else{
            message.react("👎");
            message.reply("Please use the correct \' :: \' format. (e.g. \'Ameha :: Foehn\'s mother. Possesed by Abbadon.\')");
        }
            



        // fs.appendFile('./commands/noteLists/NPCnames.txt', writedata, err => {
        //     if (err) { console.error(err); return; }
        // })
        // message.react("👍");
	},
};


//(e.g. \'&addNPC Ameha :: Foehns mom and possessed by Abbadon, it who hunders\')