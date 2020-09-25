require("dotenv").config();
const { Telegraf } = require("telegraf");
const Telegram = require("telegraf/telegram");

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.on("text", (ctx) => {
  console.log(ctx.update);
  ctx.reply(`${ctx.update.message.chat.id}`);
});
bot.launch();

const options = {
  agent: "keep alive", // https.Agent instance, allows custom proxy, certificate, keep alive, etc.
  webhookReply: true, // Reply via webhook
};
const telegram = new Telegram(process.env.BOT_TOKEN, [options]);
telegram.deleteWebhook();
const me = telegram.getMe();
// const chat = telegram.getWebhookInfo();
// const update = telegram.getUpdates();
me.then((data) => console.log(data));
// chat.then((result) => console.log(result));
// update.then((update) => console.log(update));
