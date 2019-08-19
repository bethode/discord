const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NjEyNTI3NDYwMTU1OTE2Mjg4.XVjthg.c2QmZVhhKYUu0qDF-dgurnEh1xI';

client.on('ready', () => {
    console.log('Ich bin Wolfy, raaaawr!');
});

client.login(process.env.BOT_TOKEN);
