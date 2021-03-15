const axios = require('axios');
const githubUrl = 'https://api.github.com';

module.exports = {
    getEvents: (username, repository) => axios.get(`${githubUrl}/repos/${username}/${repository}/events`)
}