const fs = require('fs')
const Discord = require('discord.js');
module.exports = {
	name: 'listQuests',
	description: 'Print out the entire quest board',
	execute(message) {
		if(fs.existsSync('./commands/noteLists/EpisodeNames.txt')){
            const newbuf = fs.readFileSync('./commands/noteLists/EpisodeNames.txt', 'utf8');
            const bufArray = newbuf.toString().split('\n');
            const exampleEmbed = new Discord.MessageEmbed()
                          .setTitle('The Beregost Branch Quest Board')
                          .setColor("#e02f10")
                          .setDescription(newbuf.toString())
                          .setThumbnail("https://static.wikia.nocookie.net/witcher/images/b/b3/Notice_board.png/revision/latest/scale-to-width-down/340?cb=20081205150541%22")
                          ;

            // let exampleEmbed = new Discord.MessageEmbed();
            // exampleEmbed = {
            //     color: "#e02f10",
            //     title: 'The Beregost Branch Quest Board',      
            //     description: newbuf.toString(),
            //     thumbnail: "https://static.wikia.nocookie.net/witcher/images/b/b3/Notice_board.png/revision/latest/scale-to-width-down/340?cb=20081205150541%22",
            // };
            
            // bufArray.forEach(entry => {
            //     exampleEmbed.addField(entry, 'looped field');
            // });
            message.react("⚔️");
            message.react("🛡️");
            message.channel.send({ embed: exampleEmbed });
        }
        else{
            message.reply("The quest board is empty!");
        }    
	},
};

