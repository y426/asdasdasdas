const { Client } = require('discord.js-selfbot-v13');
const client = new Client();

client.on('ready', ()=>{
  client.channels.cache.get("1406168225338888206").send('hello!');
});


client.login('MTExMzM0NzY1MjQyODUwMDk5Mg.GAHePL.SQI1zsQ3oVLPUOn8qahIXWjliAN9tf0k5zxL4U');