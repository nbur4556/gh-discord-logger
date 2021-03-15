const Discord = require('discord.js');
const client = new Discord.Client();

// Connect to Discord
client.on('ready', () => {
    console.log('client is ready...');
});

// Create event listener for update from github
// On event, send message to github channel

// Log in bot using token from https://discord.com/developers/applications