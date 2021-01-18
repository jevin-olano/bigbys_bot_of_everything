import Discord from 'discord.js';

function classInfo(input, message) {
    if (input === "barbarian") {
        message.channel.send(barbEmbed);
    } else if (input === "bard") {
        message.channel.send(bardEmbed);
    } else if (input === "cleric") {
        message.channel.send(clerEmbed);
    } else if (input === "druid") {
        message.channel.send(druiEmbed);
    } else if (input === "fighter") {
        message.channel.send(fighEmbed);
    } else if (input === "monk") {
        message.channel.send(monkEmbed);
    } else if (input === "paladin") {
        message.channel.send(palaEmbed);
    } else if (input === "ranger") {
        message.channel.send(rangEmbed);
    } else if (input === "rogue") {
        message.channel.send(roguEmbed);
    } else if (input === "sorcerer") {
        message.channel.send(sorcEmbed);
    } else if (input === "warlock") {
        message.channel.send(warlEmbed);
    } else if (input === "wizard") {
        message.channel.send(wizaEmbed);
    } else {

    }
}

const barbEmbed = new Discord.MessageEmbed()
    .setColor("BROWN")
    .setTitle("Barbarian")
    .setURL("http://dnd5e.wikidot.com/barbarian")
    .setDescription("A fierce warrior of primitive background who can enter a battle rage.")
    .setThumbnail("https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/342/420/618/636272680339895080.png")
    .addFields(
        {name: "Hit Die", value: "d12"},
        {name: "Primary Ability", value: "Strength"},
        {name: "Saving Throws", value: "Strength & Constitution"},
        {name: "Armor", value: "Light armor, medium armor, shields", inline: true},
        {name: "Weapons", value: "Simple weapons, martial weapons", inline: true}
    )

const bardEmbed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Bard")
    .setURL("http://dnd5e.wikidot.com/bard")
    .setDescription("An inspiring magician whose power echoes the music of creation.")
    .setThumbnail("https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/369/420/618/636272705936709430.png")
    .addFields(
        {name: "Hit Die", value: "d8"},
        {name: "Primary Ability", value: "Charisma"},
        {name: "Saving Throws", value: "Dexterity & Charisma"},
        {name: "Armor", value: "Light armor, medium armor, shields", inline: true},
        {name: "Weapons", value: "Simple weapons", inline: true},
        {name: "\u200B", value: "[Check out the bard's spell list here!](http://dnd5e.wikidot.com/spells:bard)", inline: false}
    )

const clerEmbed = new Discord.MessageEmbed()
    .setColor("WHITE")
    .setTitle("Cleric")
    .setURL("http://dnd5e.wikidot.com/cleric")
    .setDescription("A priestly champion who wields divine magic in service of a higher power.")
    .setThumbnail("https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/371/420/618/636272706155064423.png")
    .addFields(
        {name: "Hit Die", value: "d8"},
        {name: "Primary Ability", value: "Wisdom"},
        {name: "Saving Throws", value: "Wisdom & Charisma"},
        {name: "Armor", value: "Light armor, medium armor, shields", inline: true},
        {name: "Weapons", value: "Simple weapons", inline: true},
        {name: "\u200B", value: "[Check out the cleric's spell list here!](http://dnd5e.wikidot.com/spells:cleric)", inline: false}
    )
    
const druiEmbed = new Discord.MessageEmbed()
    .setColor("GREEN")
    .setTitle("Druid")
    .setURL("http://dnd5e.wikidot.com/druid")
    .setDescription("A priest of the Old Faith wielding the powers of nature and adopting animal forms.")
    .setThumbnail("https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/346/420/618/636272691461725405.png")
    .addFields(
        {name: "Hit Die", value: "d8"},
        {name: "Primary Ability", value: "Wisdom"},
        {name: "Saving Throws", value: "Intelligence & Wisdom"},
        {name: "Armor", value: "Light armor, medium armor, shields (nonmetal)", inline: true},
        {name: "Weapons", value: "Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears", inline: true},
        {name: "\u200B", value: "[Check out the druid's spell list here!](http://dnd5e.wikidot.com/spells:druid)", inline: false}
    )

const fighEmbed = new Discord.MessageEmbed()
    .setColor("DARK_GREY")
    .setTitle("Fighter")
    .setURL("http://dnd5e.wikidot.com/fighter")
    .setDescription("A master of martial combat, skilled wilh a variety of weapons and armor.")
    .setThumbnail("https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/359/420/618/636272697874197438.png")
    .addFields(
        {name: "Hit Die", value: "d10"},
        {name: "Primary Ability", value: "Strength or Dexterity"},
        {name: "Saving Throws", value: "Strength & Constitution"},
        {name: "Armor", value: "All armor, shields", inline: true},
        {name: "Weapons", value: "Simple and martial weapons", inline: true}
    )

const monkEmbed = new Discord.MessageEmbed()
    .setColor("ORANGE")
    .setTitle("Monk")
    .setURL("http://dnd5e.wikidot.com/monk")
    .setDescription("A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.")
    .setThumbnail("https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/489/420/618/636274646181411106.png")
    .addFields(
        {name: "Hit Die", value: "d8"},
        {name: "Primary Ability", value: "Dexterity & Wisdom"},
        {name: "Saving Throws", value: "Strength & Dexterity"},
        {name: "Armor", value: "None", inline: true},
        {name: "Weapons", value: "Simple weapons, shortswords", inline: true}
    )

const palaEmbed = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setTitle("Paladin")
    .setURL("http://dnd5e.wikidot.com/paladin")
    .setDescription("A holy warrior bound to a sacred oath.")
    .setThumbnail("https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/365/420/618/636272701937419552.png")
    .addFields(
        {name: "Hit Die", value: "d10"},
        {name: "Primary Ability", value: "Strength & Charisma"},
        {name: "Saving Throws", value: "Wisdom & Charisma"},
        {name: "Armor", value: "All armor, shields", inline: true},
        {name: "Weapons", value: "Simple and martial weapons", inline: true},
        {name: "\u200B", value: "[Check out the paladin's spell list here!](http://dnd5e.wikidot.com/spells:paladin)", inline: false}
    )

const rangEmbed = new Discord.MessageEmbed()
    .setColor("DARK_GREEN")
    .setTitle("Ranger")
    .setURL("http://dnd5e.wikidot.com/Ranger")
    .setDescription("A poorly designed class.")
    .setThumbnail("https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/367/420/618/636272702826438096.png")
    .addFields(
        {name: "Hit Die", value: "d10"},
        {name: "Primary Ability", value: "Dexterity & Wisdom"},
        {name: "Saving Throws", value: "Strength & Dexterity"},
        {name: "Armor", value: "All armor, shields", inline: true},
        {name: "Weapons", value: "Simple and martial weapons", inline: true},
        {name: "\u200B", value: "[Check out the ranger's spell list here!](http://dnd5e.wikidot.com/spells:ranger)", inline: false}
    )

const roguEmbed = new Discord.MessageEmbed()
    .setColor("DARKER_GREY")
    .setTitle("Rogue")
    .setURL("http://dnd5e.wikidot.com/Rogue")
    .setDescription("A scoundrel who uses stealth and trickery to overcome obstacles and enemies.")
    .setThumbnail("https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/384/420/618/636272820319276620.png")
    .addFields(
        {name: "Hit Die", value: "d8"},
        {name: "Primary Ability", value: "Dexterity"},
        {name: "Saving Throws", value: "Dexterity & Intelligence"},
        {name: "Armor", value: "Light armor", inline: true},
        {name: "Weapons", value: "Simple weapons, hand crossbows, longswords, rapiers, shortswords", inline: true}
    )

const sorcEmbed = new Discord.MessageEmbed()
    .setColor("GOLD")
    .setTitle("Sorcerer")
    .setURL("http://dnd5e.wikidot.com/Sorcerer")
    .setDescription("A spellcaster who draws on inherent magic from a gift or bloodline.")
    .setThumbnail("https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/485/420/618/636274643818663058.png")
    .addFields(
        {name: "Hit Die", value: "d6"},
        {name: "Primary Ability", value: "Charisma"},
        {name: "Saving Throws", value: "Constitution & Charisma"},
        {name: "Armor", value: "None", inline: true},
        {name: "Weapons", value: "Daggers, darts, slings, quarterstaffs, light crossbows", inline: true},
        {name: "\u200B", value: "[Check out the sorcerer's spell list here!](http://dnd5e.wikidot.com/spells:sorcerer)", inline: false}
    )

const warlEmbed = new Discord.MessageEmbed()
    .setColor("PURPLE")
    .setTitle("Warlock")
    .setURL("http://dnd5e.wikidot.com/Warlock")
    .setDescription("A wielder of magic that is derived from a bargain with an extraplanar entity.")
    .setThumbnail("https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/375/420/618/636272708661726603.png")
    .addFields(
        {name: "Hit Die", value: "d8"},
        {name: "Primary Ability", value: "Charisma"},
        {name: "Saving Throws", value: "Wisdom & Charisma"},
        {name: "Armor", value: "Light armor", inline: true},
        {name: "Weapons", value: "Simple weapons", inline: true},
        {name: "\u200B", value: "[Check out the warlock's spell list here!](http://dnd5e.wikidot.com/spells:warlock)", inline: false}
    )

 const wizaEmbed = new Discord.MessageEmbed()
    .setColor("AQUA")
    .setTitle("Wizard")
    .setURL("http://dnd5e.wikidot.com/Wizard")
    .setDescription("A scholarly magic-user capable of manipulating the structures of reality.")
    .setThumbnail("https://media-waterdeep.cursecdn.com/avatars/thumbnails/6/357/420/618/636272696881281556.png")
    .addFields(
        {name: "Hit Die", value: "d6"},
        {name: "Primary Ability", value: "Intelligence"},
        {name: "Saving Throws", value: "Intelligence & Wisdom"},
        {name: "Armor", value: "None", inline: true},
        {name: "Weapons", value: "Daggers, darts, slings, quarterstaffs, light crossbows", inline: true},
        {name: "\u200B", value: "[Check out the wizard's spell list here!](http://dnd5e.wikidot.com/spells:wizard)", inline: false}
    )

export {
    barbEmbed, clerEmbed, druiEmbed, fighEmbed,
    monkEmbed, palaEmbed, rangEmbed, roguEmbed,
    sorcEmbed, warlEmbed, wizaEmbed, classInfo
}