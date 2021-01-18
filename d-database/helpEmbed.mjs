import Discord from 'discord.js';

const attachment = new Discord.MessageAttachment("./gang.jpg", "gang.jpg")

const helpEmbed = new Discord.MessageEmbed()
	.setColor("DEFAULT")
	.setTitle("Help")
    .setDescription("Some useful commands!")
    .attachFiles(attachment)
	.setThumbnail("attachment://gang.jpg")
	.addFields(
        {name: "&help", value: "Shows this menu.", inline: false},
        {name: "&roll ____", value: "Roll a die (or many! There's a limit, but I'm not sure what it is)", inline: false},
        {name: "&class ____", value: "Outputs basic info on the chosen class. (e.g. '&class paladin')", inline: false},
        {name: "&spell ____", value: "Outputs a spell card for the chosen spell. (e.g. '&spell fireball') Be sure to hyphenate spaces! (e.g. '&spell dancing-lights)", inline: false},
        {name: "&weapon ____", value: "Outputs basic info on the chosen weapon. (note: crossbow is weird, use crossbow-light or crossbow-heavy)", inline: false},
        {name: "&condition ____", value: "Outputs basic info on the chosen condition.", inline: false},
        {name: "&ability ____", value: "Outputs basic info on the chosen ability score. (be sure to abbreviate, e.g. '&ability str'", inline: false},
        {name: "&language ____", value: "Outputs basic info on the chosen language.", inline: false},
        {name: "&joke", value: "D&Database will pull from a public joke API and tell you a joke.", inline: false}
    )

export {helpEmbed};