require('dotenv').config();
const Discord = require('discord.js');
const githubConnection = require('./api/githubConnection.js');

// Connect to Discord
const client = new Discord.Client();
client.on('ready', () => {
    console.log('client is ready...');
});

// Discord event listeners
client.on('message', message => {
    if (message.content === 'ping') {
        message.channel.send('pong');
    }
    else if (message.content === 'get github events') {
        githubConnection.getEvents('nbur4556', 'gh-discord-logger').then(({ data }) => {
            for (const event of data) {
                message.channel.send(event.id);
                message.channel.send(event.type);
                message.channel.send(event.created_at);
            }
        });
    }
});

// Log in bot using token from https://discord.com/developers/applications
client.login(process.env.DISCORD_TOKEN);