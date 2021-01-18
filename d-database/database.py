import json
import discord
from discord.ext import commands, tasks
import time
import asyncio
import os

TOKEN = "ODAwMTA1MjQzMTMxOTA0MDIw.YANSEw.h-C2yoxGgI-rZM5KfoeDd4MdqoI"
GUILD = "Acquisitions Incorporated"

client = discord.Client()

@client.event
async def on_ready():
    print(client.user, "has connected to Discord!")

@client.event
async def on_disconnect():
    print(client.user, "has disconnected from Discord!")

@client.event
async def on_message(message):
    if message.content == "&help":
        color = discord.Color.red()
        helpEmbed = discord.Embed(color = color, title = "Help", description = "Some useful commands (don't capitalize anything!)")
        helpEmbed.add_field(name = "&help", value = "Shows this menu", inline=False)
        helpEmbed.add_field(name = "&class", value = "Outputs info on the class", inline=False)
        await message.channel.send(content = None, embed = helpEmbed)
#############################################################
    elif message.content == "&barbarian":
        color = discord.Color.dark_red()
        barbEmbed = discord.Embed(color = color, title = "Barbarian", description = "A fierce warrior of primitive background who can enter a battle rage.")
        barbEmbed.add_field(name = "Hit Die", value = "d12", inline=False)
        barbEmbed.add_field(name = "Primary Ability", value = "Strength", inline=False)
        barbEmbed.add_field(name = "Saving Throws", value = "Strength & Constitution", inline=False)
        barbEmbed.add_field(name = "Armor", value = "Light armor, medium armor, shields")
        barbEmbed.add_field(name = "Weapons", value = "Simple weapons, martial weapons")
        await message.channel.send(content = None, embed = barbEmbed)
    elif message.content == "&bard":
        color = discord.Color.purple()
        bardEmbed = discord.Embed(color = color, title = "Bard", description = "An inspiring magician whose power echoes the music of creation.")
        bardEmbed.add_field(name = "Hit Die", value = "d8", inline=False)
        bardEmbed.add_field(name = "Primary Ability", value = "Charisma", inline=False)
        bardEmbed.add_field(name = "Saving Throws", value = "Dexterity & Charisma", inline=False)
        bardEmbed.add_field(name = "Armor", value = "Light armor, medium armor, shields")
        bardEmbed.add_field(name = "Weapons", value = "Simple weapons")
        await message.channel.send(content = None, embed = bardEmbed)
    elif message.content == "&cleric":
        color = discord.Color.dark_orange()
        clerEmbed = discord.Embed(color = color, title = "Cleric", description = "A priestly champion who wields divine magic in service of a higher power.")
        clerEmbed.add_field(name = "Hit Die", value = "d8", inline=False)
        clerEmbed.add_field(name = "Primary Ability", value = "Wisdom", inline=False)
        clerEmbed.add_field(name = "Saving Throws", value = "Wisdom & Charisma", inline=False)
        clerEmbed.add_field(name = "Armor", value = "Light armor, medium armor, shields")
        clerEmbed.add_field(name = "Weapons", value = "Simple weapons")
        await message.channel.send(content = None, embed = clerEmbed)
    elif message.content == "&druid":
        color = discord.Color.green()
        druiEmbed = discord.Embed(color = color, title = "Druid", description = "A priest of the Old Faith wielding the powers of nature and adopting animal forms.")
        druiEmbed.add_field(name = "Hit Die", value = "d8", inline=False)
        druiEmbed.add_field(name = "Primary Ability", value = "Wisdom", inline=False)
        druiEmbed.add_field(name = "Saving Throws", value = "Intelligence & Wisdom", inline=False)
        druiEmbed.add_field(name = "Armor", value = "Light armor, medium armor, shields (nonmetal)")
        druiEmbed.add_field(name = "Weapons", value = "Clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears")
        await message.channel.send(content = None, embed = druiEmbed)
    elif message.content == "&fighter":
        color = discord.Color.darker_grey()
        fighEmbed = discord.Embed(color = color, title = "Fighter", description = "A master of martial combat, skilled wilh a variety of weapons and armor.")
        fighEmbed.add_field(name = "Hit Die", value = "d10", inline=False)
        fighEmbed.add_field(name = "Primary Ability", value = "Strength or Dexterity", inline=False)
        fighEmbed.add_field(name = "Saving Throws", value = "Strength & Constitution", inline=False)
        fighEmbed.add_field(name = "Armor", value = "All armor, shields")
        fighEmbed.add_field(name = "Weapons", value = "Simple and martial weapons")
        await message.channel.send(content = None, embed = fighEmbed)
    elif message.content == "&monk":
        color = discord.Color.orange()
        monkEmbed = discord.Embed(color = color, title = "Monk", description = "A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.")
        monkEmbed.add_field(name = "Hit Die", value = "d8", inline=False)
        monkEmbed.add_field(name = "Primary Ability", value = "Dexterity & Wisdom", inline=False)
        monkEmbed.add_field(name = "Saving Throws", value = "Strength & Dexterity", inline=False)
        monkEmbed.add_field(name = "Armor", value = "None")
        monkEmbed.add_field(name = "Weapons", value = "Simple weapons, shortswords")
        await message.channel.send(content = None, embed = monkEmbed)
    elif message.content == "&paladin":
        color = discord.Color.gold()
        palaEmbed = discord.Embed(color = color, title = "Paladin", description = "A holy warrior bound to a sacred oath.")
        palaEmbed.add_field(name = "Hit Die", value = "d10", inline=False)
        palaEmbed.add_field(name = "Primary Ability", value = "Strength & Charisma", inline=False)
        palaEmbed.add_field(name = "Saving Throws", value = "Wisdom & Charisma", inline=False)
        palaEmbed.add_field(name = "Armor", value = "All armor, shields")
        palaEmbed.add_field(name = "Weapons", value = "Simple and martial weapons")
        await message.channel.send(content = None, embed = palaEmbed)
    elif message.content == "&ranger":
        color = discord.Color.dark_green()
        rangEmbed = discord.Embed(color = color, title = "Ranger", description = "A poorly designed class.")
        rangEmbed.add_field(name = "Hit Die", value = "d10", inline=False)
        rangEmbed.add_field(name = "Primary Ability", value = "Dexterity & Wisdom", inline=False)
        rangEmbed.add_field(name = "Saving Throws", value = "Strength & Dexterity", inline=False)
        rangEmbed.add_field(name = "Armor", value = "Light and medium armor, shields")
        rangEmbed.add_field(name = "Weapons", value = "Simple and martial weapons")
        await message.channel.send(content = None, embed = rangEmbed)
    elif message.content == "&rogue":
        color = discord.Color.dark_grey()
        roguEmbed = discord.Embed(color = color, title = "Rogue", description = "A scoundrel who uses stealth and trickery to overcome obstacles and enemies.")
        roguEmbed.add_field(name = "Hit Die", value = "d8", inline=False)
        roguEmbed.add_field(name = "Primary Ability", value = "Dexterity", inline=False)
        roguEmbed.add_field(name = "Saving Throws", value = "Dexterity & Intelligence", inline=False)
        roguEmbed.add_field(name = "Armor", value = "Light armor")
        roguEmbed.add_field(name = "Weapons", value = "Simple weapons, hand crossbows, longswords, rapiers, shortswords")
        await message.channel.send(content = None, embed = roguEmbed)
    elif message.content == "&sorcerer":
        color = discord.Color.red()
        sorcEmbed = discord.Embed(color = color, title = "Sorcerer", description = "A spellcaster who draws on inherent magic from a gift or bloodline.")
        sorcEmbed.add_field(name = "Hit Die", value = "d6", inline=False)
        sorcEmbed.add_field(name = "Primary Ability", value = "Charisma", inline=False)
        sorcEmbed.add_field(name = "Saving Throws", value = "Constitution & Charisma", inline=False)
        sorcEmbed.add_field(name = "Armor", value = "None")
        sorcEmbed.add_field(name = "Weapons", value = "Daggers, darts, slings, quarterstaffs, light crossbows")
        await message.channel.send(content = None, embed = sorcEmbed)
    elif message.content == "&warlock":
        color = discord.Color.dark_purple()
        warlEmbed = discord.Embed(color = color, title = "Warlock", description = "A wielder of magic that is derived from a bargain with an extraplanar entity.")
        warlEmbed.add_field(name = "Hit Die", value = "d8", inline=False)
        warlEmbed.add_field(name = "Primary Ability", value = "Charisma", inline=False)
        warlEmbed.add_field(name = "Saving Throws", value = "Wisdom & Charisma", inline=False)
        warlEmbed.add_field(name = "Armor", value = "Light armor")
        warlEmbed.add_field(name = "Weapons", value = "Simple weapons")
        await message.channel.send(content = None, embed = warlEmbed)
    elif message.content == "&wizard":
        color = discord.Color.teal()
        wizaEmbed = discord.Embed(color = color, title = "Wizard", description = "A scholarly magic-user capable of manipulating the structures of reality.")
        wizaEmbed.add_field(name = "Hit Die", value = "d6", inline=False)
        wizaEmbed.add_field(name = "Primary Ability", value = "Intelligence", inline=False)
        wizaEmbed.add_field(name = "Saving Throws", value = "Intelligence & Wisdom", inline=False)
        wizaEmbed.add_field(name = "Armor", value = "None")
        wizaEmbed.add_field(name = "Weapons", value = "Daggers, darts, slings, quarterstaffs, light crossbows")
        await message.channel.send(content = None, embed = wizaEmbed)
#############################################################
    elif message.content == "&logoff":
        await client.logout()
        exit()

client.run(TOKEN)