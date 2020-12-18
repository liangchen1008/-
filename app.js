const Discord = require('discord.js');
const config = require("./config.json");
const bot = new Discord.Client();

bot.on('ready', () => {
  console.log(`成功登入 ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if (msg.content === '嗨') {
    msg.reply('嗨 婊子');
    }
});

bot.on('message', msg => {
  if (msg.content === '閉嘴') {
    msg.reply('阿略略略');
    }
});

bot.on('message', msg => {
  if (msg.content === '是喔') {
    msg.reply('4喔4喔4喔');
    }
});



bot.login(config.token);
