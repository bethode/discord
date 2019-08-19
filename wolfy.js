const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NjEyNTI3NDYwMTU1OTE2Mjg4.XVjthg.c2QmZVhhKYUu0qDF-dgurnEh1xI';

bot.on('ready', () =>{
        console.log('Hallo ich bin Wolfy!')
})

bot.login(token);
client.login(process.env.BOT_TOKEN);