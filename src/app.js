require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

// Connect to Discord
client.on('ready', () => {
    console.log('client is ready...');
});

// Discord event listeners
client.on('message', message => {
    if (message.content === 'ping') {
        console.log('pong')
    }
});

// Log in bot using token from https://discord.com/developers/applications
client.login(process.env.DISCORD_TOKEN);