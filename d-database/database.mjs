import Discord from 'discord.js'
import {helpEmbed} from './helpEmbed.mjs';
import {rollDice} from './diceEmbed.mjs';
import {classInfo} from './classEmbed.mjs';
import {spellInfo} from './spellEmbed.mjs';
import {weaponInfo} from './weaponEmbed.mjs';
import {conditionInfo} from './condEmbed.mjs';
import {skillInfo} from './skillEmbed.mjs';
import {abilityInfo} from './asEmbed.mjs';
import {languageInfo} from './langEmbed.mjs';
import {tellJoke} from './jokeEmbed.mjs';
const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

// ALL YOU NEED TO KNOW IS &help AND &spellhelp, EVERYTHING ELSE EXPLAINS ITSELF

const commandPrefix = "&";

client.on('message', async message => {

    // checks if any given message begins with the command prefix "&"
    if (!message.content.startsWith(commandPrefix) || message.author.bot) {
        return;
    }

    // removes the command prefix "&", isolating the command itself for further use
    const args = message.content
        .slice(commandPrefix.length)
        .trim()
        .split(/ +/g);
    const command = args.shift().toLowerCase()

    // displays the help menu
    if (command === "help") {
        message.channel.send(helpEmbed);
    }

    // rolls a die
    if (command === "roll") {
        let roll = rollDice(args[0], message) // helper function found in diceEmbed.mjs
    }

    // displays the various classes
    if (command === "class") {
        let spell = classInfo(args[0], message) // helper function found in classEmbeds.mjs
    }

    // checks what a spell does
    if (command === "spell") {
        let spell = spellInfo(args[0], message) // helper function found in spellEmbeds.mjs
    }

    if (command === "weapon") {
        let weapon = weaponInfo(args[0], message) // helper function found in weaponEmbed.mjs
    }

    if (command === "condition") {
        let condition = conditionInfo(args[0], message) // helper function found in conditionEmbed.mjs
    }

    if (command === "skill") {
        let skill = skillInfo(args[0], message) // helper function found in skillEmbed.mjs
    }

    if (command === "ability") {
        let ability = abilityInfo(args[0], message) // helper function found in asEmbed.mjs
    }

    if (command === "language") {
        let language = languageInfo(args[0], message) // helper function found in langEmbed.mjs
    }

    // tells a corny joke
    if (command === "joke") {
        let joke = tellJoke(message) // helper function found in jokeEmbed.mjs
    }
});

// D&DATABASE LOGS INTO SERVER USING THE TOKEN BELOW

client.login('ODAwMTA1MjQzMTMxOTA0MDIw.YANSEw.h-C2yoxGgI-rZM5KfoeDd4MdqoI');