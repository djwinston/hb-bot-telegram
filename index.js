require("dotenv").config();
const bot = require("./src/controller/telegraf");
const state = require("./src/state/");
const dbController = require("./src/controller/db");
const StateController = require("./src/controller/state");
const TimeController = require("./src/controller/time");

bot.start((ctx) => ctx.reply("Welcome"));
bot.help((ctx) => ctx.reply("Send me a sticker"));
bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("hi", (ctx) => ctx.reply("Hey there"));
bot.on("text", (ctx) => {
  const chat_id = ctx.update.message.chat.id;
  console.log(ctx.update);
  ctx.reply(chat_id);
  dbController.writeDB({ chat_id: chat_id });
});
bot.launch();
StateController.init();
console.log(state);
console.log(TimeController.weekday());
