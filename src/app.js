require('dotenv').config();
const Discord = require('discord.js');
const client = new Discord.Client();

// Connect to Discord
client.on('ready', () => {
    console.log('client is ready...');
    // client.channels.cache.get('820830834180489226').send('Hello world!')
});

// Discord event listeners
client.on('message', message => {
    if (message.content === 'ping') {
        client.channels.cache.get('820830834180489226').send('pong');
    }
});

// Log in bot using token from https://discord.com/developers/applications
client.login(process.env.DISCORD_TOKEN);