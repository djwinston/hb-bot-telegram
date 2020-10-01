const telegramOptions = {
  agent: "keep alive", // https.Agent instance, allows custom proxy, certificate, keep alive, etc.
  webhookReply: true, // Reply via webhook
};

exports.default = telegramOptions;
