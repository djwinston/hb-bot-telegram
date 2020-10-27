const telegramOptions = require("../config/telegram");
const { Telegram } = require("telegraf");

const telegram = new Telegram(process.env.BOT_TOKEN, [telegramOptions]);
// telegram.deleteWebhook();
// const me = telegram.getMe();
// const chat = telegram.getWebhookInfo();
// const update = telegram.getUpdates();
// me.then((data) => console.log(data));
// chat.then((result) => console.log(result));
// update.then((update) => console.log(update));

exports.default = telegram;
