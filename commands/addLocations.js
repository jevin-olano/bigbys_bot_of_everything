const fs = require('fs')
module.exports = {
	name: 'addLocation',
	description: 'Add a city, dungeon, or place to the noted list of Locations',
	execute(message) {
        let writedata = message.content.slice(12);
        if(writedata.includes("::")){ 
            writedata = writedata.split("::", 2);
            fs.appendFile('./commands/noteLists/LocationNames.txt', "\n" + (writedata[0]).trim(), err => {
                if (err) { console.error(err); return; }
            })
            message.react("👍");

            fs.appendFile('./commands/noteLists/LocationDescs.txt', "\n" + (writedata[1]).trim(), err => {
                if (err) { console.error(err); return; }
            })
            message.react("👍");
        }
        else{
            message.react("👎");
            message.reply("Please use the correct \' :: \' format. (e.g. \'Candlekeep :: The largest library in the world.\')");
        }

        // let writedata = "\n" + message.content.slice(13);
        // fs.appendFile('./commands/noteLists/LocationNames.txt', writedata, err => {
        //     if (err) { console.error(err); return; }
        // })
        // message.react("👍");
	},
};
